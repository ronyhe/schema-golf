import React, { useEffect, useState } from 'react'
import Box from '#mui/Box'

const ClockHand = ({ type, angle }: { type: string; angle: number }) => {
    const length = type === 'hour' ? 50 : type === 'minute' ? 70 : 90
    const width = type === 'second' ? 2 : 4
    const color = type === 'second' ? 'red' : 'black'

    return (
        <Box
            sx={{
                position: 'absolute',
                width: `${width}px`,
                height: `${length}px`,
                backgroundColor: color,
                transformOrigin: 'bottom',
                transform: `rotate(${angle}deg)`,
                bottom: '50%',
                left: '50%',
                marginLeft: `-${width / 2}px`
            }}
        />
    )
}

export function AnalogClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours()

    const secondAngle = (seconds / 60) * 360
    const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6
    const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30

    return (
        <Box
            sx={{
                position: 'relative',
                width: '200px',
                height: '200px',
                border: '2px solid black',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <ClockHand type='hour' angle={hourAngle} />
            <ClockHand type='minute' angle={minuteAngle} />
            <ClockHand type='second' angle={secondAngle} />
        </Box>
    )
}
