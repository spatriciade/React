import styled from 'styled-components'; //importa la funcionalidad

const Title = styled.h1`
font-size:1.5em;
text-align: center;
color:AliceBlue;
margin-bottom: 1rem;
`;

const Wrapper = styled.section`
font-size: 1.5em;
padding: 4em;
background: DarkOliveGreen;
text-align: center;

`

function App() {
  return (
    <Wrapper>
      <Title>Hello, World!</Title>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero eum labore omnis aperiam eius fuga ratione suscipit! Officiis, non recusandae!

      </p>
    </Wrapper>
  );
}

export default App;
