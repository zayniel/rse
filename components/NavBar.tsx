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
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

export default function NavBar() {
    return (
        <Box
            h={{base: '80px', xs: '120px'}}
            w='full'
            bgColor='#f0f0f0'
            position='absolute'
            color='black'
            zIndex={'dropdown'}
        >
            <HStack>
                <Image
                    src='./logo-title.png'
                    h={{base:'60px', xs: '100px'}}
                    ml={{base:'10px', xs: '30px'}}
                    mt={{base: '10px', xs:'10px'}}
                />
                {/*
                <Stack spacing={0}>
                    <Text color='black' variant='title' fontSize={{base:'20px', xs:'28px', sm: '28px', md: '34px', lg: '40px'}} mt={{base: '30px', xs:'16px'}} mb={{base:'-10px', xs:'-16px', sm:'-16px', md:'-16px', lg:'-16px'}}>Robotic Systems Enterprise</Text>
                    <Text color='black' variant='sub-title' fontSize={{base:'16px', xs:'20px', sm: '22px', md: '24px', lg: '26px'}}>Michigan Technological University</Text>
                </Stack>
                */}
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
                    right={{base: '30px', xs: '50px'}}
                    top={{base: '29px', xs: '49px'}}
                    as={IconButton}
                    aria-label='Menu'
                    icon={<HamburgerIcon/>}
                    variant='outline'
                    position='absolute'
                    visibility={{base: 'visible', sm:'hidden', md:'hidden', lg:'hidden'}}
                    fontSize='2xl'
                />
                <MenuList fontFamily='Blinker' fontSize='24px' paddingY='10px' paddingX='20px' bgColor='white' borderRadius='lg'>
                    <MenuItem my='2px'>
                        Home
                    </MenuItem>
                    <MenuItem my='2px'>
                        AutoDrive II
                    </MenuItem>
                    <MenuItem my='2px'>
                        Projects
                    </MenuItem>
                    <MenuItem my='2px'>
                        Teams
                    </MenuItem>
                    <MenuItem my='2px'>
                        Contact Us
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}