import ajv from 'ajv'
import json5 from 'json5'
import {adjust, assoc, curry, lensProp, over} from "ramda";

const validator: ajv.Ajv = ajv()

export interface Level {
    readonly error: string | null
    readonly shouldAccept: ReadonlyArray<Example>
    readonly shouldReject: ReadonlyArray<Example>
}

export enum ExampleResult {
    Good,
    Bad,
    None
}

export interface Example {
    datum: any,
    result: ExampleResult
}

export interface AppModel {
    readonly levels: ReadonlyArray<Level>
    readonly currentLevel: number
}

export function example(datum: any): Example {
    return {datum, result: ExampleResult.None}
}

function levelFromExamples(examples: [any[], any[]]): Level {
    const [accept, reject] = examples
    return {
        shouldAccept: accept.map(example),
        shouldReject: reject.map(example),
        error: null
    }
}

export function appFromExamples(examples: ReadonlyArray<[any[], any[]]>): AppModel {
    return {
        levels: examples.map(levelFromExamples),
        currentLevel: 0
    }
}

const setResult: (result: ExampleResult) => (example: Example) => Example = assoc('result')
const setResultToBad: (ex: Example) => Example = setResult(ExampleResult.Bad)

function updateExample(schemaObject: any, shouldPass: boolean, example: Example): Example {
    try {
        const valid = validator.validate(schemaObject, example.datum)
        const correct = valid && shouldPass
        const result = correct ? ExampleResult.Good : ExampleResult.Bad
        return setResult(result)(example)
    } catch (e) {
        return setResultToBad(example)
    }
}

function updateLevel(newSchemaText: string, level: Level): Level {
    try {
        const schemaObject = json5.parse(newSchemaText)
        const updateWithSchema = curry(updateExample)(schemaObject)
        return {
            error: null,
            shouldAccept: level.shouldAccept.map(updateWithSchema(true)),
            shouldReject: level.shouldReject.map(updateWithSchema(false))
        }
    } catch (e) {
        return {
            error: 'Cannot parse json5',
            shouldAccept: level.shouldAccept.map(setResultToBad),
            shouldReject: level.shouldReject.map(setResultToBad)
        }
    }
}

export function applySchema(model: AppModel, newSchemaText: string, levelIndex: number): AppModel {
    return over(
        lensProp('levels'),
        adjust(levelIndex, curry(updateLevel)(newSchemaText)),
        model
    )
}

export function changeLevel(newLevelIndex: number, model: AppModel): AppModel {
    return assoc('currentLevel', newLevelIndex, model)
}
