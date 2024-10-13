import { add } from '#logic/math'
import { expect, test } from '#test'

test('add', () => {
    expect(add(2, 2)).toBe(4)
})
