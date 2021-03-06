import React from "react";
import { BorrowHeader } from "../../components/Borrow/BorrowHeader";
import { Grid } from "./styles";
import { SideMenu } from "../../components/SideMenu";

export const Borrow = () => {
  return (
    <>
      <Grid>
        <SideMenu />
        <BorrowHeader />
      </Grid>
    </>
  );
};
