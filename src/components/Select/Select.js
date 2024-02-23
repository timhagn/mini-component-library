import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";

const StyledSelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: hsl(0deg 0% 10%);

    svg {
      stroke-width: 3px;
    }
  }
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  padding: 0.84375rem calc(1.5rem + 0.84375rem) 0.84375rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: inherit;
  margin-right: inherit;

  &:focus {
    outline-offset: 3px;
    outline-color: ${COLORS.primary};
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 0.84375rem;
  color: inherit;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  return (
    <StyledSelectWrapper>
      <StyledSelect
        value={value}
        onChange={onChange}
        name={label}
        aria-label={label}
      >
        {children}
      </StyledSelect>
      <SelectIcon id="chevron-down" size={16} strokeWidth={2} />
    </StyledSelectWrapper>
  );
};

export default Select;
