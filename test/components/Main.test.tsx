import React from 'react'
import { expect } from '#test'
import { render, renderTests } from '#render'
import { Main } from '#comps/Main'

await renderTests(async t => {
    await t.test('renders', () => {
        const { screen } = render(<Main />)
        const text = screen.getByText('Hello, world!')
        expect(text).toBeInTheDocument()
    })
})
