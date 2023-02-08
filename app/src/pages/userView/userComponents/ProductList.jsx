import { Grid } from "@chakra-ui/react";
import React from "react";
import { Productcard } from "./Productcard";
import styles from "./productList.module.css";

export const ProductList = () => {
  let arr = new Array(20).fill(1);
  return (
    <Grid
      gap={"20px"}
      className={styles.autofill}
      width={"100%"}
    >
      {arr.map((e, i) => (
        <Productcard key={i}></Productcard>
      ))}
    </Grid>
  );
};
