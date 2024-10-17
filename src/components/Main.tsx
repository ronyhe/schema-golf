import React, { useState } from 'react'
import Box from '#mui/Box'
import Editor from '@monaco-editor/react'
import Typography from '#mui/Typography'
import List from '#mui/List'
import ListItem from '#mui/ListItem'
import { NonEmptyArray } from '#logic/utils'
import Tabs from '#mui/Tabs'
import Tab from '#mui/Tab'
import AppBar from '#mui/AppBar'
import Stack from '#mui/Stack'
import { ResourcesFab } from '#comps/ResourcesFab'
import Card from '#mui/Card'
import { CardHeader } from '@mui/material'

export interface Level {
    valid: unknown[]
    invalid: unknown[]
}

export interface MainProps {
    levels: NonEmptyArray<Level>
}

export function Main({ levels }: MainProps) {
    const [levelIndex, _setLevelIndex] = useState(0)
    const level = levels[levelIndex]
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
                    <ExampleCard examples={level.valid} title='Should Pass' />
                    <CodeEditor />
                    <ExampleCard examples={level.invalid} title='Should Fail' />
                </Stack>
            </Box>
            <ResourcesFab />
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

function ExampleCard({
    examples,
    title
}: {
    examples: unknown[]
    title: string
}) {
    return (
        <Card elevation={2}>
            <CardHeader title={<Typography variant='h6'>{title}</Typography>} />
            <List>
                {examples.map((example, i) => (
                    <ListItem key={i}>{JSON.stringify(example)}</ListItem>
                ))}
            </List>
        </Card>
    )
}
