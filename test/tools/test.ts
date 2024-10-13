import { test, type Mock, type TestContext } from 'node:test'
import { expect } from 'expect'
// This work around, and the corresponding `postinstall` script in `package.json will not be necessary once
// https://github.com/jestjs/jest/pull/15288 is merged and released
// @ts-expect-error - an unexported JS file
import spyMatchers from 'expect/build/spyMatchers'
import { mapValues } from '#logic/utils'

export type { Mock, TestContext }
export { expect, test }

expect.extend(
    mapValues(spyMatchers, matcher => {
        return function (received, ...args) {
            received.calls = {
                all() {
                    return received.mock.calls.map(
                        (c: Mock<typeof received>) => ({
                            args: c.arguments
                        })
                    )
                },
                count() {
                    return received.mock.calls.length
                }
            }

            // @ts-expect-error - unexported JS file
            return matcher.call(this, received, ...args)
        }
    })
)
expect.extend({
    toBeInTheDocument(received?: HTMLElement | null) {
        const pass = received?.isConnected ?? false
        const message = () =>
            pass
                ? `expected ${received} not to be in the document, but it was`
                : `expected ${received} to be in the document, but it was not`
        return {
            pass,
            message
        }
    },
    // Adapted from https://github.com/jest-community/jest-extended/blob/main/src/matchers/toHaveBeenCalledExactlyOnceWith.js
    // Commit #2adf68380ddf31a26c69287a4137524301a1e4fb
    toHaveBeenCalledExactlyOnceWith(
        received: Mock<(...args: unknown[]) => unknown>,
        ...expected
    ) {
        const { printReceived, printExpected, matcherHint } = this.utils

        const actual = received.mock.calls[0].arguments
        const invokedOnce = received.mock.calls.length === 1
        const pass = invokedOnce && this.equals(expected, actual)

        return {
            pass,
            message: () => {
                return pass
                    ? matcherHint(
                          '.not.toHaveBeenCalledExactlyOnceWith',
                          'received',
                          ''
                      ) +
                          '\n\n' +
                          'Expected mock to be invoked some number of times other than once or once with ' +
                          `arguments other than ${printExpected(expected)}, but was invoked ` +
                          // @ts-expect-error - Error in original
                          `${printReceived(received.mock.calls.length)} times with ${printReceived(...actual)}`
                    : matcherHint('.toHaveBeenCalledExactlyOnceWith') +
                          '\n\n' +
                          (invokedOnce
                              ? 'Expected mock function to have been called exactly once with ' +
                                // @ts-expect-error - Error in original
                                `${printExpected(expected)}, but it was called with ${printReceived(...actual)}`
                              : 'Expected mock function to have been called exactly once, but it was called ' +
                                `${printReceived(received.mock.calls.length)} times`)
            },
            actual: received
        }
    }
})
