import 'global-jsdom/register'
import { ReactNode } from 'react'
import { render as baseRender, screen, cleanup } from '@testing-library/react'
import { userEvent, UserEvent } from '@testing-library/user-event'
import { test, TestContext } from '#test'
export type Screen = typeof screen

interface TestSetup {
    screen: Screen
    user: UserEvent
}

export function render(ui: ReactNode): TestSetup {
    baseRender(ui)
    return {
        screen,
        user: userEvent.setup()
    }
}

export async function renderTests(fn: (t: TestContext) => Promise<void>) {
    await test(async t => {
        t.afterEach(cleanup)
        await fn(t)
    })
}
