import React from 'react';
import {isEmpty} from 'ramda'
import {AppModel} from "./Model";
import {LevelComp} from "./LevelComp";

export interface GoldAppProps {
    readonly model: AppModel
    onChangeLevel(index: number): void
    onApplySchema(newSchemaText: string): void
}

export const GolfApp: React.FunctionComponent<GoldAppProps> = ({model, onChangeLevel, onApplySchema}) => {
    const {levels, currentLevel} = model
    if (isEmpty(levels)) {
        return (
            <div>
                Empty game. No levels :(
            </div>
        )
    }

    const levelButtons = levels.map((level, index) => {
        const text = `Level ${index + 1}`
        return <button type="button" key={text} onClick={() => onChangeLevel(index)}>{text}</button>
    })

    return (
        <div>
            {levelButtons}
            <LevelComp level={levels[currentLevel]} onApplySchema={onApplySchema} />
        </div>
    )
}
