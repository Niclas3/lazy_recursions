"use client"
import { Collapse,  Box, Group, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'

export default function Expanded_info({name="more", children}:{name: string ,children: React.ReactNode}) {
        const [opened, {toggle}] = useDisclosure(false)
        return (
                <Box className="mb-4">
                        <Group justify="left" mb={5}>
                                <Button onClick={toggle}>
                                        {name}
                                </Button>
                        </Group>
                        <Collapse in={opened}>
                                {children}
                        </Collapse>

                </Box>
        );
}
