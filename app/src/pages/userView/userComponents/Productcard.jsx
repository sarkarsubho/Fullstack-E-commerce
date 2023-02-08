import { Flex, Image ,Text } from "@chakra-ui/react";
import React from "react";

export const Productcard = ({data}) => {

  return <Flex direction={"column"} textAlign={"left"} padding={"10px"} shadow={" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}>
     <Image src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" rounded={"4px"}></Image>

     <Text color={"#8C8C8C"} fontWeight={"700"} fontSize={"18px"}> Brand Name</Text>
     <Text fontSize={"18px"}> Product Name</Text>
     <Text fontWeight={"700"} >₹ 2000.00 </Text>
     <Text color={"#388E3C"} fontWeight={"700"} > 30%</Text>
     <Text fontWeight={"700"} color={"#2AA745"} > Any Offer</Text>
     <Text> sizes : Xl ,XXl </Text>
  </Flex>;
};
