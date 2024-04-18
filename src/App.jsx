import { styled, css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #24272f;
  flex-grow: 1;
`;

const buttonStyles = css`
  font-size: 24px;
  padding: 12px 24px;
  border-radius: 4px;
  border: 2px solid #139eca;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100%;
  padding: 64px 0;
`;

const Button = styled.button`
  ${buttonStyles}

  ${({ $isContained }) =>
    $isContained &&
    css`
      background-color: #139eca;
      border: 2px solid #139eca;
    `}

${({ $isBorder }) => {
    $isBorder &&
      css`
        background-color: transparent;
        border: 2px solid #139eca;
      `;
  }}
`;

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <div>Hello World.</div>
          <Button $isContained>Contained Button</Button>
          <Button $isBorder>Border Button</Button>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
