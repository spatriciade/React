//import './button.css';
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background-color: #3b5998;
  color: white;
  border-radius: 0.3em;
  padding: 0.3em;
  margin: 1em auto;
  &:hover{
    background-color: #5972A9;
  }
`;

function button() {
  return <Button>Save</Button>;
}

export default button;