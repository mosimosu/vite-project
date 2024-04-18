import { Button, Container, Wrapper } from "./styled.jsx";

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
