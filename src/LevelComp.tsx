import React, {useState} from 'react';
import {Example, ExampleResult, Level} from "./Model";

export interface LevelProps {
    readonly level: Level
    onApplySchema(schemaText: string): void
}

interface DataExampleProps {
    readonly text: string
    readonly result: ExampleResult
}

const DataExampleComp: React.FunctionComponent<DataExampleProps> = ({text, result}) => {
    const style = {
        color: exampleColor(result)
    }
    return <div style={style}>{text}</div>
}

function exampleToProps({datum, result}: Example): DataExampleProps {
    return {
        text: JSON.stringify(datum, null, 4),
        result
    }
}

export const LevelComp: React.FunctionComponent<LevelProps> = ({level, onApplySchema}) => {
    const [schemaText, setSchemaText] = useState<string>(level.schemaText)
    const error = level.error === null ? null : (
        <h3 style={{color: 'red'}}>{level.error}</h3>
    )
    const textArea = <textarea value={schemaText} onChange={e => setSchemaText(e.target.value)} rows={20} cols={65} />

    return (
        <div>
            {error}
            {textArea}
            <button type="button" onClick={() => onApplySchema(schemaText)}>Try it out!</button>
            <div>
                <h4>Should Accept</h4>
                {level.shouldAccept.map((ex, index) => {
                    const {text, result} = exampleToProps(ex)
                    return <DataExampleComp key={`${index}`} text={text} result={result}/>
                })}
            </div>
            <div>
                <h4>Should Reject</h4>
                {level.shouldReject.map((ex, index) => {
                    const {text, result} = exampleToProps(ex)
                    return <DataExampleComp key={`${index}`} text={text} result={result}/>
                })}
            </div>
        </div>
    )
}

function exampleColor(result: ExampleResult): string {
    if (result === ExampleResult.Good) {
        return 'green'
    }
    if (result === ExampleResult.Bad) {
        return 'red'
    }
    return 'black'
}
