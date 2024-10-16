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
import Card from '#mui/Card'
import Link from '#mui/Link'

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
            <AppBar
                position='static'
                sx={{
                    backgroundColor: 'transparent'
                }}
            >
                <Tabs
                    value={currentLevel}
                    onChange={(_, value) => _setCurrentLevel(value)}
                    centered
                    textColor={'primary'}
                >
                    {levels.map((_, i) => (
                        <Tab label={`Level ${i + 1}`} key={i}></Tab>
                    ))}
                </Tabs>
            </AppBar>
            <Box padding={2}>
                <Stack direction={'row'} spacing={2}>
                    <CodeEditor />
                    <Examples level={levels[currentLevel]} />
                </Stack>
                <Resources />
            </Box>
        </Box>
    )
}

function Examples({ level }: { level: Level }) {
    return (
        <Box>
            <Box>
                <Typography variant='h6'>Should Pass</Typography>
                <List>
                    {level.valid.map((example, i) => (
                        <ListItem key={i}>{JSON.stringify(example)}</ListItem>
                    ))}
                </List>
            </Box>
            <Box>
                <Typography variant='h6'>Should Fail</Typography>
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

function Resources() {
    const base = 'https://json-schema.org/understanding-json-schema/reference/'
    const links = [
        {
            title: 'string',
            slug: 'string'
        },
        {
            title: 'RegEx',
            slug: 'regular_expressions'
        },
        {
            title: 'numbers',
            slug: 'numeric'
        },
        {
            title: 'object',
            slug: 'object'
        },
        {
            title: 'array',
            slug: 'array'
        },
        {
            title: 'boolean',
            slug: 'boolean'
        },
        {
            title: 'null',
            slug: 'null'
        },
        {
            title: 'Enumerated Values (enum)',
            slug: 'enum'
        },
        {
            title: 'Schema Composition',
            slug: 'combining'
        }
    ]
    return (
        <Card elevation={2} sx={{ padding: 2 }}>
            <Typography
                gutterBottom
                sx={{ color: 'text.secondary', fontSize: 14 }}
            >
                You can always use the
                <Link sx={{ paddingLeft: 1 }} href={base}>
                    JSON schema reference
                </Link>
            </Typography>
            <List>
                {links.map(({ title, slug }) => (
                    <ListItem key={slug}>
                        <Link href={`${base}${slug}`}>{title}</Link>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}
