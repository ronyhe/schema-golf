import React from 'react'
import { add } from '#logic/math'

export function Main() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>2 + 2 = {add(2, 2)}</h2>
        </div>
    )
}
