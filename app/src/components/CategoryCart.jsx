import { Box, Text,Image } from "@chakra-ui/react";
import React from "react";

export const CategoryCart = ({data}) => {
  return <Box>
    <Image src={data.img} alt="category img" objectFit={"contain"} width={"100px"} height={"100px"}></Image>
    <Text fontWeight={600}>{data.title}</Text>
  </Box>;
};
