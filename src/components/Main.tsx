import React, { useState } from 'react'
import Box from '#mui/Box'
import Editor from '@monaco-editor/react'
import Typography from '#mui/Typography'
import List from '#mui/List'
import ListItem from '#mui/ListItem'
import { NonEmptyArray } from '#logic/utils'

export interface Level {
    valid: unknown[]
    invalid: unknown[]
}

export interface MainProps {
    levels: NonEmptyArray<Level>
}

export function Main({ levels }: MainProps) {
    const [currentLevel, _setCurrentLevel] = useState(0)
    const { valid, invalid } = levels[currentLevel]
    return (
        <Box>
            <Box
                sx={{
                    height: '50vh',
                    width: '60vh',
                    border: '1px solid black'
                }}
            >
                <Editor
                    language='json'
                    defaultValue='{"text": "Hello, world!"}'
                    options={{
                        lineNumbers: 'off',
                        overviewRulerBorder: false,
                        minimap: {
                            enabled: false
                        },
                        lineDecorationsWidth: 0,
                        fontSize: 16,
                        formatOnType: true,
                        autoClosingBrackets: 'languageDefined',
                        scrollbar: {
                            vertical: 'hidden'
                        }
                    }}
                />
            </Box>
            <Box>
                <Box>
                    <Typography variant='h6'>Valid examples</Typography>
                    <List>
                        {valid.map((example, i) => (
                            <ListItem key={i}>
                                {JSON.stringify(example)}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Typography variant='h6'>Invalid examples</Typography>
                    <List>
                        {invalid.map((example, i) => (
                            <ListItem key={i}>
                                {JSON.stringify(example)}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}
