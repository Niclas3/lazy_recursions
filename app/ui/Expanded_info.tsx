"use client"
import { Collapse, Text, Box, Group, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'

export default function Expanded_info({children}:{children: React.ReactNode}) {
        const [opened, {toggle}] = useDisclosure(false)
        return (
                <Box>
                        <Group justify="center" mb={5}>
                                <Button onClick={toggle}>
                                        seeeeeee
                                </Button>
                        </Group>
                        <Collapse in={opened}>
                                {children}
                        </Collapse>

                </Box>
        );
}
