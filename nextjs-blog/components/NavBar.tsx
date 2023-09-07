import {
    Box,
    Image,
    Text,
    Stack,
    HStack
} from '@chakra-ui/react'

export default function NavBar() {
    return (
        <Box
            h='120px'
            w='full'
            bgColor='#f0f0f0'
            color='black'
            position='absolute'
        >
            <HStack>
                <Image
                    src='./logo.png'
                    w='73px'
                    h='81px'
                    ml='40px'
                    mt='16px'
                />
                <Stack spacing={0}>
                    <Text variant='title' fontSize='40px' mt='10px' mb='-16px'>Robotic Systems Enterprise</Text>
                    <Text variant='sub-title' fontSize='26px'>Michigan Technological University</Text>
                </Stack>
            </HStack>
        </Box>
    )
}