import { styled, css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkBLue};
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100%;
  padding: 64px 0;
`;

const buttonStyles = css`
  font-size: 24px;
  padding: 12px 24px;
  border-radius: 4px;
  color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  cursor: pointer;
`;

export const Button = styled.button`
  ${buttonStyles}

  ${({ $appreance }) =>
    $appreance === "contained" &&
    css`
      background-color: ${({ theme }) => theme.colors.lightBlue};
    `}
  ${({ $appreance }) =>
    $appreance === "border" &&
    css`
      background-color: transparent;
    `}
`;
