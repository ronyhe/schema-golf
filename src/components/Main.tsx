import React from 'react'
import { add } from '#logic/math'
import { CssBaseline } from '@mui/material'

export function Main() {
    return (
        <CssBaseline>
            <div>
                <h1>Hello, world!</h1>
                <h2>2 + 2 = {add(2, 2)}</h2>
            </div>
        </CssBaseline>
    )
}
