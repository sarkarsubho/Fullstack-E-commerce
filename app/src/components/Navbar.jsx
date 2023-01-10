import React, { useState } from "react";
import styles from "./navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import {
  Box,
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Input,
} from "@chakra-ui/react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

import { IoPersonSharp } from "react-icons/io5";
import NavDrawer from "./Drawer";

export const Navbar = () => {
  // const [modal, setModal] = useState(true);
  // const handleModal = (event) => {
  //   setModal(!modal);
  //   event.stopPropagation();
  // };
  return (
    <Box background={"#287ff0"} padding={"10px"}>
      <Flex
        width={["90%", "90%", "90%", "70%"]}
        margin={"auto"}
        gap={"10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        display={["none", "flex", "flex", "flex"]}
      >
        <Image
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          width={"90px"}
          objectFit={"contain"}
        ></Image>

        <InputGroup
          border={"1px solid white"}
          background={"white"}
          borderRadius={"5px"}
          display={"flex"}
          alignItems={"center"}
          // flexGrow={"1"}
        >
          <Input type="text" placeholder="Search Products..." />{" "}
          <InputRightElement
            pointerEvents="none"
            children={<AiOutlineSearch fontSize={"25px"} color="gray.300" />}
          />
        </InputGroup>

        <Flex>
          <Menu>
            <MenuButton
              className={styles.tab}
              as={Button}
              background={"local"}
              _hover={{ background: "local" }}
              _active={{ background: "local" }}
              width={"120px"}
              rightIcon={<BiChevronDown />}
            >
              Profile
            </MenuButton>
            <MenuList>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Orders</MenuItem>
              <MenuItem>WishList</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>

          <Button
            background={"local"}
            className={styles.tab}
            _hover={{ background: "local" }}
            _active={{ background: "local" }}
          >
            {" "}
            Became a Seller
          </Button>

          <Box position={"relative"}>
            <Box
              position={"absolute"}
              top={0}
              left={7}
              zIndex={2}
              background={"red"}
              w="22px"
              h={"22px"}
              borderRadius={"50%"}
              fontSize={"15px"}
              fontWeight={700}
              color={"white"}
            >
              {" "}
              4
            </Box>

            <Button
              background={"local"}
              className={styles.tab}
              _hover={{ background: "local" }}
              _active={{ background: "local" }}
              leftIcon={<BsFillCartFill fontSize={"28PX"} />}
            >
              {" "}
              cart
            </Button>
          </Box>
        </Flex>
      </Flex>
      {/* Mobile Nav */}
      <Flex direction={"column"} display={["flex", "none", "none", "none"]}>
        <Flex padding={"10px "} justifyContent={"space-between"}>
          <Flex  justifyContent={"center"} alignItems={"center"}>
            <Box  color={"white"}>
              <NavDrawer></NavDrawer>
            </Box>
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              width={"90px"}
              objectFit={"contain"}
            ></Image>
          </Flex>

          <Flex gap={"12px"} justifyContent={"center"} alignItems={"center"}>
            <Box color={"white"} position={"relative"}>
              <Box
                position={"absolute"}
                top={-1.5}
                left={2.5}
                zIndex={2}
                background={"red"}
                w="22px"
                h={"22px"}
                borderRadius={"50%"}
                fontSize={"15px"}
                fontWeight={700}
                color={"white"}
              >
                {" "}
                4
              </Box>
              <BsFillCartFill fontSize={"28PX"} />
            </Box>
            <Box fontSize={"28PX"} color={"white"}>
              <IoPersonSharp />
            </Box>
          </Flex>
        </Flex>
        <InputGroup
          border={"1px solid white"}
          background={"white"}
          borderRadius={"5px"}
          display={"flex"}
          alignItems={"center"}
          // flexGrow={"1"}
        >
          <Input type="text" placeholder="Search Products..." />{" "}
          <InputRightElement
            pointerEvents="none"
            children={<AiOutlineSearch fontSize={"25px"} color="gray.300" />}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};
