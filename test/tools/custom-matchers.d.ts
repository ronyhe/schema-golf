import 'expect'

declare module 'expect' {
    interface Matchers<R> {
        toBeInTheDocument(): R
        toHaveBeenCalledExactlyOnceWith(...expected: unknown[]): R
    }
}
