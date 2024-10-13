import React from 'react'
import { Main } from '#comps/Main'
import { createRoot } from 'react-dom/client'

document.addEventListener('DOMContentLoaded', main)

async function main() {
    const root = createRoot(document.querySelector('#app')!)
    root.render(<Main />)
}
