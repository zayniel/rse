import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Image,
    Text,
    Stack,
    HStack,
    Button,
    Menu,
    MenuButton,
    IconButton,
} from '@chakra-ui/react'

export default function NavBar() {
    return (
        <Box
            h='120px'
            w='full'
            bgColor='#f0f0f0'
            position='absolute'
            color='black'
        >
            <HStack>
                <Image
                    src='./logo.png'
                    h={{base:'50px', xs: '81px', sm: '81px', md:'81px', lg:'81px'}}
                    ml={{base:'20px', xs: '40px', sm: '40px', md: '40px', lg:'40px'}}
                    mt={{base: '34px', xs:'16px', sm: '16px'}}
                />
                <Stack spacing={0}>
                    <Text color='black' variant='title' fontSize={{base:'20px', xs:'28px', sm: '28px', md: '34px', lg: '40px'}} mt={{base: '30px', xs:'16px'}} mb={{base:'-10px', xs:'-16px', sm:'-16px', md:'-16px', lg:'-16px'}}>Robotic Systems Enterprise</Text>
                    <Text color='black' variant='sub-title' fontSize={{base:'16px', xs:'20px', sm: '22px', md: '24px', lg: '26px'}}>Michigan Technological University</Text>
                </Stack>
            </HStack>
            <HStack
                position='absolute'
                right='70px'
                top='38px'
                visibility={{base: 'hidden', sm:'visible', md:'visible', lg:'visible'}}
                fontSize={{ sm: '24px', md: '26px', lg: '30px'}}
                spacing={{sm: '50px', md: '60px', lg: '70px'}}
            >
                <Button fontFamily='Blinker'>Home</Button>
                <Button fontFamily='Blinker'>AutoDrive II</Button>
                <Button fontFamily='Blinker'>Projects</Button>
                <Button fontFamily='Blinker'>Teams</Button>
                <Button fontFamily='Blinker'>Contact Us</Button>
            </HStack>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Menu'
                    icon={<HamburgerIcon/>}
                    variant='outline'
                    position='absolute'
                    right='50px'
                    top='50px'
                    visibility={{base: 'visible', sm:'hidden', md:'hidden', lg:'hidden'}}
                />
            </Menu>
        </Box>
    )
}