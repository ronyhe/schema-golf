import React from 'react'
import { Main } from '#comps/Main'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import examples from './examples.json'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

document.addEventListener('DOMContentLoaded', main)

async function main() {
    console.log(examples)
    const root = createRoot(document.querySelector('#app')!)
    root.render(
        <CssBaseline>
            <Main />
        </CssBaseline>
    )
}
