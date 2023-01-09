import React from "react";
import { data } from "../data/Caategorydata";
import { Flex } from "@chakra-ui/react";
import { CategoryCart } from "./CategoryCart";
export const Category = () => {
  return (
    <Flex justifyContent={"center"} gap={"40px"} overflow={"scroll"} overflowX={["scroll","scroll","hidden"]} overflowY={"hidden"} padding={"0 40px"}>
      {data.map((e, i) => {
        return <CategoryCart key={i} data={e}></CategoryCart>;
      })}
    </Flex>
  );
};
