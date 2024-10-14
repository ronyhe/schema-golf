import React from 'react'
import Box from '#mui/Box'
import Typography from '#mui/Typography'

const CircleSegment = ({ angle, label }: { angle: number; label: string }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                width: '50%',
                height: '2px',
                backgroundColor: 'black',
                transformOrigin: '0 0',
                transform: `rotate(${angle}deg)`,
                top: '50%',
                left: '50%'
            }}
        >
            <Typography
                sx={{
                    position: 'absolute',
                    top: '-10px',
                    left: '70%', // Adjusted to move the label further out
                    transform: 'translate(-50%, -50%)',
                    whiteSpace: 'nowrap',
                    fontSize: '1.5rem' // Increased font size
                }}
            >
                {label}
            </Typography>
        </Box>
    )
}

export function Circle() {
    const segments = 17
    const angleStep = 360 / segments
    const labels = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        ''
    ]

    return (
        <Box
            sx={{
                position: 'relative',
                width: '600px',
                height: '600px',
                border: '2px solid black',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto'
            }}
        >
            {Array.from({ length: segments }).map((_, index) => (
                <CircleSegment
                    key={index}
                    angle={index * angleStep}
                    label={labels[index]}
                />
            ))}
        </Box>
    )
}
