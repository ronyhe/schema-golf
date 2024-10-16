import React from 'react'
import { test, expect } from '#test'
import { render, cleanup } from '#render'
import { Main } from '#comps/Main'

test('<Main />', async t => {
    t.afterEach(cleanup)

    await t.test('shows the first level by default', () => {
        const level = {
            valid: ['This is super duper valid'],
            invalid: ['Big mistake... Huge']
        }
        const { screen } = render(<Main levels={[level]} />)
        const allExamples = [...level.valid, ...level.invalid]
        for (const example of allExamples) {
            const exact = false // Stringification slightly changes the output (quotes around strings for example)
            expect(screen.getByText(example, { exact })).toBeInTheDocument()
        }
    })
})
