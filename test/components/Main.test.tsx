import React from 'react'
import { test, expect } from '#test'
import { render, cleanup } from '#render'
import { Main } from '#comps/Main'

test('<Main />', async t => {
    t.afterEach(cleanup)

    await t.test('renders', () => {
        const { screen } = render(<Main />)
        const text = screen.getByText('Hello, world!')
        expect(text).toBeInTheDocument()
    })
})
