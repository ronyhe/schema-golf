import React from 'react'
import { add } from '#logic/math'
import Box from '#mui/Box'
import Typography from '#mui/Typography'
import Button from '#mui/Button'
import AcUnitIcon from '#mui-icons/AcUnit'
import { AnalogClock } from '#comps/AnalogClock'
import { Circle } from '#comps/Circle'

export function Main() {
    return (
        <Box>
            <AnalogClock />
            <Circle />
            <Typography variant='h1'>Hello, world!</Typography>
            <Typography variant='h2'>2 + 2 = {add(2, 2)}</Typography>
            <Button variant='contained' color='primary'>
                Click me!
            </Button>
            <AcUnitIcon />
        </Box>
    )
}
