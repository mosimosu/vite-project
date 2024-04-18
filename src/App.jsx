import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #24272f;
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100%;
  padding: 64px 0;
`;

const ContainedButton = styled.button`
  font-size: 24px;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: #139eca;
  color: white;
  cursor: pointer;
`;
const BorderButton = styled.button`
  font-size: 24px;
  padding: 12px 24px;
  border-radius: 4px;
  border: 2px solid #139eca;
  background-color: transparent;
  color: #139eca;
  cursor: pointer;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <div>Hello World.</div>
          <ContainedButton>Contained Button</ContainedButton>
          <BorderButton>Border Button</BorderButton>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
