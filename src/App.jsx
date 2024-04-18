import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: aqua;
  flex-grow: 1;
`;

function App() {
  return (
    <>
      <Wrapper>
        <div>Hello World.</div>
      </Wrapper>
    </>
  );
}

export default App;
