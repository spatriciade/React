// import './B.css';

function B(props) {
  return (
<div onClick={props.onClick} style={{backgroundColor:"dodgerblue"}}>This is B component</div>
  );
}

export default B;