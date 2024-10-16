import React from 'react'
import { test, expect } from '#test'
import { render, cleanup } from '#render'
import { Level, Main } from '#comps/Main'
import { NonEmptyArray } from '#logic/utils'

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

    await t.test('should list levels', () => {
        const levels = [
            {
                valid: [1],
                invalid: [2]
            },
            {
                valid: [1],
                invalid: [2]
            }
        ] as NonEmptyArray<Level>

        const { screen } = render(<Main levels={levels} />)
        for (let i = 0; i < levels.length; i++) {
            expect(screen.getByText(`Level ${i + 1}`)).toBeInTheDocument()
        }
    })
})
