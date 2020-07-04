import React, {useState} from 'react';
import './App.css';

import {GolfApp} from "./GolfApp";
import {appFromExamples, applySchema, AppModel, changeLevel} from "./Model";
import {curry} from "ramda";

const defaultModel = appFromExamples([
  [
    ['some string', 'some other string'],
    [5, {a: 4}]
  ],
  [
    [5, 10],
    ['5', {a: 4}]
  ],
  [[], []]
])

function App() {
  const [model, setModel] = useState<AppModel>(defaultModel)
  const levelChange = (index: number) => setModel(curry(changeLevel)(index))
  const onApplySchema = (newSchemaText: string) => {
    setModel(oldModel => applySchema(oldModel, newSchemaText, oldModel.currentLevel))
  }

  return <GolfApp model={model} onApplySchema={onApplySchema} onChangeLevel={levelChange} />
}

export default App;
