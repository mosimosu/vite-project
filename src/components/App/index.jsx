import { Button, Container, Wrapper } from "./styled.jsx";
import data from "./data.js";

function App() {
  const { buttons } = data;
  return (
    <>
      <Wrapper>
        <Container>
          {buttons.map((button) => {
            const { id, text, type, appreance } = button;
            return (
              <Button key={id} type={type} $appreance={appreance}>
                {text}
              </Button>
            );
          })}
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
