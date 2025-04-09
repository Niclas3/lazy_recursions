import { Blockquote } from '@mantine/core'
import { BookOpen } from 'lucide-react'
import React from 'react'

export default function More_info({children, cite}: {children: React.ReactNode, cite: string }){
        const icon = <BookOpen />;
        return (
                <Blockquote color="indigo" radius="lg" cite={ cite } icon={icon} mt="xl">
                        <div className="text-base not-italic not-prose">
                                {children}
                        </div>
                </Blockquote>
        );
}
