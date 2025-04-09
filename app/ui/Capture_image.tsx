import { Flex , Image, Text } from '@mantine/core'

export default function Capture_image({src, alt, capture}: 
                                      {src:string, alt:string, capture:string}) {
        return (
                <Flex justify="center"
                      wrap="wrap"
                      align="center"
                      direction="column"
                      gap="xs"
                      mb={"xl"}
                 >
                <Image mb={0} radius='md' alt={alt} src = {src}/>
                <Text size="sm" variant="gradient" 
                      gradient={{ from: 'gray', to: 'gray', deg: 0 }} >
                         {capture} 
                </Text>
                </Flex>
        );
}
