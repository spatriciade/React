import styled from 'styled-components'; //importa la funcionalidad de la libreria

const Title = styled.h1` //para trabajar a nivel de etiqueta 
font-size:1.5em;
text-align: center;
color:AliceBlue;
margin-bottom: 1rem;
`;

// hereda estilos de Title
const Paragraph = styled(Title)` 
color:YellowGreen;

`

//para trabajar a nivel de etiqueta
const Wrapper = styled.section.attrs(props =>({
  id:"header",
  size:props.size||"1.5em",
}))` 
font-size: ${props => props.size};
padding: 4em;
background: ${props => props.darkTheme ? "DarkSlateGrey" : "DarkOliveGreen"};
text-align: center;

&:hover h1 {
color:Skyblue;}

h1{
font-size:1.5em;
text-align: center;
color:AliceBlue;
margin-bottom: 1rem;
}
p{
color:YellowGreen;
}

`


 
function App() {
  return (
    <Wrapper darkTheme size="1.7em">
      <h1>Hello, World!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero eum labore omnis aperiam eius fuga ratione suscipit! Officiis, non recusandae!

      </p>
    </Wrapper>
  );
}

export default App;
