import styled, { css } from "styled-components";

const centerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const headerContentStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;
export const MyDiv = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  ${({ center }) => (center ? centerStyle : "")}
  ${({ gap }) =>
    gap &&
    css`
      display: flex;
      gap: ${({ gap }) => gap};
    `}
  ${({ header }) => header && headerContentStyle}
`;
