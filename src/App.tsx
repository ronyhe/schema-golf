import React, {useState} from 'react';
import './App.css';

import {GolfApp} from "./GolfApp";
import {appFromExamples, applySchema, AppModel, changeLevel} from "./Model";
import {curry} from "ramda";
import {examples} from "./Examples";

const defaultModel = appFromExamples(examples)

function App() {
  const [model, setModel] = useState<AppModel>(defaultModel)
  const levelChange = (index: number) => setModel(curry(changeLevel)(index))
  const onApplySchema = (newSchemaText: string) => {
    setModel(oldModel => applySchema(oldModel, newSchemaText, oldModel.currentLevel))
  }

  return <GolfApp model={model} onApplySchema={onApplySchema} onChangeLevel={levelChange} />
}

export default App;
