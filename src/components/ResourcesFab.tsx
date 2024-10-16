import React, { MouseEvent } from 'react'
import Card from '#mui/Card'
import Typography from '#mui/Typography'
import Link from '#mui/Link'
import List from '#mui/List'
import ListItem from '#mui/ListItem'
import HelpIcon from '#mui-icons/Help'
import Box from '#mui/Box'
import Fab from '#mui/Fab'
import Popover from '#mui/Popover'

export function ResourcesFab() {
    const [isOpen, setIsOpen] = React.useState(false)
    // We pass this to the Menu component
    // This suppresses a warning from the popper.js lib that underlies MUI's Popover component
    // See example at https://mui.com/material-ui/react-popper/#system-SimplePopper.tsx
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const openMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
        setIsOpen(true)
    }

    const closeMenu = () => {
        setAnchorEl(null)
        setIsOpen(false)
    }

    const onFabClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (isOpen) {
            closeMenu()
        } else {
            openMenu(e)
        }
    }

    return (
        <Box sx={{ position: 'fixed', bottom: 15, right: 15 }}>
            <Fab color='primary' onClick={onFabClick} role='menu'>
                <HelpIcon />
                <Popover
                    open={isOpen}
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                >
                    <ResourcesCard />
                </Popover>
            </Fab>
        </Box>
    )
}

function ResourcesCard() {
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
        <Card
            elevation={2}
            sx={{ padding: 2, '& .MuiPaper-root': { width: 200 } }}
        >
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
