import { CustomMDX } from '@/app/ui/CustomMDX'
import { Blockquote } from '@mantine/core'
import { BookOpen } from 'lucide-react'

export default function More_info({children, cite}: {children: React.ReactNode, cite: string }){
        const icon = <BookOpen />;
        return (
                <Blockquote color="indigo" radius="lg" cite={cite ?? ""} icon={icon} mt="xl">
                        <CustomMDX source={children}>
                        </CustomMDX>
                </Blockquote>
        );
}
