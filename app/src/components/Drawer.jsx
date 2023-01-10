import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerFooter,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  Flex,
  Box,
  Divider 
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
      <GiHamburgerMenu fontSize={"28PX"} />
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}   >
        <DrawerOverlay />
        <DrawerContent w={"150px"} >
          <DrawerHeader borderBottomWidth="1px" background={"#287ff0"}>
           <Flex algnItmes={"center"} gap={"20px"}>
           <Box fontSize={"28PX"} color={"white"}>
              <IoPersonSharp />
            </Box>
            <Box color={"white"}> Subhankar Sarkar</Box>
           </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex gap={"15px"} padding={"5px 0"} fontSize={"17px"} fontWeight={"700"} font>
             <Box>IC</Box>
             <Box>My Order</Box>
            </Flex>
            <Flex gap={"15px"} padding={"5px 0"} fontSize={"17px"} fontWeight={"700"}>
             <Box>IC</Box>
             <Box>My Cart</Box>
            </Flex>
            <Flex gap={"15px"} padding={"5px 0"} fontSize={"17px"} fontWeight={"700"}>
             <Box>IC</Box>
             <Box>My WishList</Box>
            </Flex>
            <Flex gap={"15px"} padding={"5px 0"} fontSize={"17px"} fontWeight={"700"}>
             <Box>IC</Box>
             <Box>My Account</Box>
            </Flex>
            <Divider h={"4px"}/>
            <Flex gap={"15px"} padding={"5px 0"} fontSize={"17px"} fontWeight={"700"}>
             <Box>IC</Box>
             <Box>Sell on Flipcart</Box>
            </Flex>
          </DrawerBody>
          <DrawerFooter borderTopWidth="2px">
            <Button variant='outline' mr={3} color={"red"} onClick={onClose}>
             Logout
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
