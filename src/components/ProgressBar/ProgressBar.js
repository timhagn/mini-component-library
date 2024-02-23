/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBarWrapper = styled.div`
  width: 23.125rem;
  height: var(--height);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
`;

const InnerProgressBar = styled.div`
  width: var(--current-width);
  height: var(--inner-height);
  background-color: hsla(240, 80%, 60%, 1);
  border-radius: 0.25rem var(--inner-right-radii) var(--inner-right-radii)
    0.25rem;
  margin: 0 var(--inner-margin);
`;
const ProgressBar = ({ value, size }) => {
  const currentValue = value <= 0 ? 0 : value > 100 ? 100 : value;
  const currentInnerWidth = (currentValue / 100) * 23.125;
  const borderRightRadii = currentValue >= 98 ? `0.25rem` : `0`;
  let height = `0.5rem`;
  let innerHeight = height;
  switch (size) {
    case "large": {
      height = `${24 / 16}rem`;
      innerHeight = `1rem`;
      break;
    }
    case "medium": {
      height = `${12 / 16}rem`;
      innerHeight = height;
      break;
    }
  }
  return (
    <>
      <VisuallyHidden id="progresslabel">
        Current value: currentValue
      </VisuallyHidden>
      <ProgressBarWrapper
        style={{
          "--height": height,
          "--inner-height": innerHeight,
          "--inner-right-radii": borderRightRadii,
          "--current-width": `${currentInnerWidth}rem`,
          "--inner-margin": size === "large" ? `0.2rem` : 0,
        }}
        role="progressbar"
        aria-labelledby="progresslabel"
        aria-valuenow="23"
      >
        <InnerProgressBar />
      </ProgressBarWrapper>
    </>
  );
};

export default ProgressBar;
