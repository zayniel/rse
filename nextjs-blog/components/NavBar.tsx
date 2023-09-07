import {
    Box,
    Image,
    Text,
    Stack,
    HStack,
    Button,
} from '@chakra-ui/react'

export default function NavBar() {
    return (
        <Box
            h='120px'
            w='full'
            bgColor='#f0f0f0'
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
                    <Text color='black' variant='title' fontSize='40px' mt='10px' mb='-16px'>Robotic Systems Enterprise</Text>
                    <Text color='black' variant='sub-title' fontSize='26px'>Michigan Technological University</Text>
                </Stack>
            </HStack>
            <HStack
                position='absolute'
                right='70px'
                top='38px'
                fontSize='30px'
                spacing='70px'
            >
                <Button 
                    bgColor='#ff6600' 
                    color='white'
                    variant='solid' 
                    borderRadius='80px'
                    w='130px'
                    h='50px'
                    fontFamily='Blinker'
                >
                    Home
                </Button>
                <Button colorScheme='orange' variant='ghost' fontFamily='Blinker'>AutoDrive II</Button>
                <Button variant='ghost' fontFamily='Blinker'>Projects</Button>
                <Button variant='ghost' fontFamily='Blinker'>Teams</Button>
                <Button variant='ghost' fontFamily='Blinker'>Contact Us</Button>
            </HStack>
        </Box>
    )
}