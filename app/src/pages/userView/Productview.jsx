import { Flex } from "@chakra-ui/react";
import React from "react";
import { SortFilter } from "./userComponents/SortFilter";
import { ProductList } from "./userComponents/ProductList";

export const Productview = () => {

  return <Flex>
    <SortFilter></SortFilter>
    <ProductList></ProductList>

  </Flex>;
};
