import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import theme from "./theme";

type Props = {
  children: ReactNode;
};

const ThemeProviderWrapper: FC<Props> = (props) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
