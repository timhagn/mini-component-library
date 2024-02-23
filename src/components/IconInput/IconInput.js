import React, { useRef } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  &:hover {
    font-weight: bold;
    svg {
      stroke-width: 2px;
    }
  }
`;

const IconButton = styled.button`
  display: inherit;
  position: absolute;
  width: var(--height);
  height: var(--height);
  align-items: center;
  background: transparent;
  border: none;
`;

const InnerInput = styled.input`
  display: inherit;
  padding: 1rem 0 1rem calc(var(--height) * 1.69);
  width: var(--width);
  height: calc(var(--height) / 16);
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  font-weight: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: lighter;
  }

  &:focus {
    outline-offset: 4px;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  className,
}) => {
  const inputRef = useRef();
  const currentSize = size === "small" ? 16 : 24;
  const currentSizeRem = currentSize / 16;
  const currentWidthRem = width / 16;
  const currentBorder = size === "small" ? 1 : 2;

  return (
    <IconInputWrapper
      style={{
        "--height": `${currentSizeRem}rem`,
        "--width": `${currentWidthRem}rem`,
        "--border": `${currentBorder}px`,
      }}
    >
      <IconButton
        className="btn"
        aria-label="Select Button"
        type="button"
        onClick={() => inputRef?.current && inputRef.current.focus()}
      >
        <Icon id={icon} size={currentSize} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </IconButton>
      <InnerInput
        defaultValue=""
        autoComplete="true"
        placeholder={placeholder}
        type="text"
        className={className}
        ref={inputRef}
      />
    </IconInputWrapper>
  );
};

export default IconInput;
