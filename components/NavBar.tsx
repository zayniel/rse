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
            </HStack>
            <HStack
                position='absolute'
                right='70px'
                top='38px'
                visibility={{base: 'hidden', sm:'visible', md:'visible', lg:'visible'}}
                fontSize={{ sm: '24px', md: '26px', lg: '30px'}}
                spacing={{sm: '30px', md: '30px', lg: '50px'}}
            >
                <Button bgColor='#f0f0f0' color='black' as='a' href='https://rse-mtu.vercel.app' borderRadius='20px' _hover={{bg:'orange.200'}} fontWeight='normal' h='50px' w='100px' size='xl' fontFamily='Blinker'>Home</Button>
                <Button bgColor='#f0f0f0' color='black' as='a' href='/autodrive' borderRadius='20px' _hover={{bg:'orange.200'}} fontWeight='normal' h='50px' w='170px' size='xl' fontFamily='Blinker'>AutoDrive II</Button>
                <Button bgColor='#f0f0f0' color='black' as='a' href='/projects' borderRadius='20px' _hover={{bg:'orange.200'}} fontWeight='normal' h='50px' w='120px' size='xl' fontFamily='Blinker'>Projects</Button>
                <Button bgColor='#f0f0f0' color='black' as='a' href='/teams' borderRadius='20px' _hover={{bg:'orange.200'}} fontWeight='normal' h='50px' w='100px' size='xl' fontFamily='Blinker'>Teams</Button>
                <Button bgColor='#f0f0f0' color='black' as='a' href='/contact' borderRadius='20px' _hover={{bg:'orange.200'}} fontWeight='normal' h='50px' w='160px' size='xl' fontFamily='Blinker'>Contact Us</Button>
            </HStack>
            <Menu>
                <MenuButton
                    right={{base: '20px', xs: '40px'}}
                    top={{base: '20px', xs: '40px'}}
                    as={IconButton}
                    aria-label='Menu'
                    icon={<HamburgerIcon/>}
                    variant='outline'
                    position='absolute'
                    visibility={{base: 'visible', sm:'hidden', md:'hidden', lg:'hidden'}}
                    fontSize='2xl'
                    color='black'
                    _hover={{bg:'orange.200'}}
                />
                <MenuList fontFamily='Blinker' fontSize='24px' paddingY='10px' paddingX='10px' bgColor='white' borderRadius='lg'>
                    <MenuItem borderRadius='lg' _hover={{bg:'orange.200'}} my='2px' as='a' href='https://rse-mtu.vercel.app'>
                        Home
                    </MenuItem>
                    <MenuItem borderRadius='lg' _hover={{bg:'orange.200'}} my='2px' as='a' href='/autodrive'>
                        AutoDrive II
                    </MenuItem>
                    <MenuItem borderRadius='lg' _hover={{bg:'orange.200'}} my='2px' as='a' href='/projects'>
                        Projects
                    </MenuItem>
                    <MenuItem borderRadius='lg' _hover={{bg:'orange.200'}} my='2px' as='a' href='/teams'>
                        Teams
                    </MenuItem>
                    <MenuItem borderRadius='lg' _hover={{bg:'orange.200'}} my='2px' as='a' href='/contact'>
                        Contact Us
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}