import React from "react";
import { Global, css } from "frontity";
import DINProCond from "../fonts/DINPro-Cond.woff2";
import DINProCondBold from "../fonts/DINPro-CondBold.woff2";
import DINProCondMedium from "../fonts/DINPro-CondMedium.woff2";
import DINProLight from "../fonts/DINPro-Light.woff2";

const FontFace = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "DINProCond";
          src: url(${DINProCond}) format("woff2");
        }

        @font-face {
          font-family: "DINProCondBold";
          src: url(${DINProCondBold}) format("woff2");
        }

        @font-face {
          font-family: "DINProCondMedium";
          src: url(${DINProCondMedium}) format("woff2");
        }

        @font-face {
          font-family: "DINProLight";
          src: url(${DINProLight}) format("woff2");
        }
      `}
    />
  );
};

export default FontFace;
