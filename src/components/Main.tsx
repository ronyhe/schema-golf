import React, { useState } from 'react'
import Box from '#mui/Box'
import Editor from '@monaco-editor/react'
import { attempt, NonEmptyArray } from '#logic/utils'
import Tabs from '#mui/Tabs'
import Tab from '#mui/Tab'
import AppBar from '#mui/AppBar'
import Stack from '#mui/Stack'
import { ResourcesFab } from '#comps/ResourcesFab'
import { ExampleCard, ExampleWithStatus } from '#comps/ExampleCard'
import Ajv from 'ajv'

export interface Level {
    valid: unknown[]
    invalid: unknown[]
}

export interface MainProps {
    levels: NonEmptyArray<Level>
}

interface LevelWithStatus {
    valid: ExampleWithStatus[]
    invalid: ExampleWithStatus[]
}

export function Main({ levels }: MainProps) {
    const [levelIndex, _setLevelIndex] = useState(0)
    const level = levels[levelIndex]
    const [text, setText] = useState('')
    const stati = getExampleStati(level, text)

    return (
        <Box padding={2}>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: 'transparent'
                }}
            >
                <Tabs
                    value={levelIndex}
                    onChange={(_, value) => _setLevelIndex(value)}
                    centered
                    textColor={'primary'}
                >
                    {levels.map((_, i) => (
                        <Tab label={`Level ${i + 1}`} key={i}></Tab>
                    ))}
                </Tabs>
            </AppBar>
            <Box padding={2}>
                <Stack
                    direction='row'
                    spacing={2}
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <ExampleCard examples={stati.valid} title='Should Pass' />
                    <CodeEditor onChange={setText} />
                    <ExampleCard examples={stati.invalid} title='Should Fail' />
                </Stack>
            </Box>
            <ResourcesFab />
        </Box>
    )
}

function CodeEditor({ onChange }: { onChange: (value: string) => void }) {
    return (
        <Box
            sx={{
                height: '50vh',
                width: '60vh',
                border: '1px solid black'
            }}
        >
            <Editor
                onChange={value => {
                    onChange(value ?? '')
                }}
                language='json'
                defaultValue='{}'
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

function getExampleStati(level: Level, text: string): LevelWithStatus {
    const { valid, invalid } = level
    const parsed = attempt(() => JSON.parse(text))
    if (parsed.didFail) {
        return allUnknown(level)
    }
    const ajv = new Ajv()
    const compiled = attempt(() => ajv.compile(parsed.value))
    if (compiled.didFail) {
        return allUnknown(level)
    }
    return {
        valid: valid.map(value => ({
            value,
            status: compiled.value!(value) ? 'passing' : 'failing'
        })),
        invalid: invalid.map(value => ({
            value,
            status: compiled.value!(value) ? 'failing' : 'passing'
        }))
    }
}

function allUnknown(level: Level): LevelWithStatus {
    const { valid, invalid } = level
    return {
        valid: valid.map(value => ({ value, status: 'unknown' })),
        invalid: invalid.map(value => ({ value, status: 'unknown' }))
    }
}
