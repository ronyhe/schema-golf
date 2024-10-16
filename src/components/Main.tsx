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
    return (
        <Box
            sx={{
                padding: 2,
                width: '100%',
                height: '100%'
            }}
        >
            <CodeEditor />
            <Examples level={levels[currentLevel]} />
        </Box>
    )
}

function Examples({ level }: { level: Level }) {
    return (
        <Box>
            <Box>
                <Typography variant='h6'>Valid examples</Typography>
                <List>
                    {level.valid.map((example, i) => (
                        <ListItem key={i}>{JSON.stringify(example)}</ListItem>
                    ))}
                </List>
            </Box>
            <Box>
                <Typography variant='h6'>Invalid examples</Typography>
                <List>
                    {level.invalid.map((example, i) => (
                        <ListItem key={i}>{JSON.stringify(example)}</ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

function CodeEditor() {
    return (
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
    )
}
