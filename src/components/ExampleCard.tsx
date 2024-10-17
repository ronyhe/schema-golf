import React from 'react'
import Card from '#mui/Card'
import { CardHeader } from '#mui/index'
import Typography from '#mui/Typography'
import List from '#mui/List'
import ListItem from '#mui/ListItem'
import ListItemIcon from '#mui/ListItemIcon'
import ListItemText from '#mui/ListItemText'
import CheckIcon from '#mui-icons/Check'
import XIcon from '@mui/icons-material/Close'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

export interface ExampleCardProps {
    examples: ExampleWithStatus[]
    title: string
}

export interface ExampleWithStatus {
    value: unknown
    status: Status
}

export type Status = 'passing' | 'failing' | 'unknown'

export function ExampleCard({ examples, title }: ExampleCardProps) {
    return (
        <Card elevation={2}>
            <CardHeader title={<Typography variant='h6'>{title}</Typography>} />
            <List dense>
                {examples.map((example, i) => (
                    <ExampleListItem example={example} key={i} />
                ))}
            </List>
        </Card>
    )
}

function ExampleListItem({ example }: { example: ExampleWithStatus }) {
    const { status, value } = example
    const Icon = getIcon(status)
    const text = JSON.stringify(value)
    return (
        <ListItem dense>
            <ListItemIcon>
                <Icon fontSize='small' />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}

function getIcon(status: Status) {
    if (status === 'passing') {
        return CheckIcon
    }
    if (status === 'failing') {
        return XIcon
    }
    return QuestionMarkIcon
}
