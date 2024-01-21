import styled from "styled-components";
import Form from "./components/Form";
import Button from "./components/Button";
import { useState } from "react";

const StyledDiv = styled.div`
  max-width: 400px;
  margin: 30px auto;
  padding: 10px 8px;
  border: 2px solid red;
  border-radius: 10px;
`;
const StyledBtn = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  padding-top: 10px;
`;
const StyledImg = styled.img`
  width: 30px;
`

function App() {
  const  [number , setNumer] = useState("")

  return (
    <StyledDiv>
      <Form number={number} />
      <StyledBtn>
        <Button number={number} setNumer={setNumer}>1</Button>
        <Button number={number} setNumer={setNumer}>2</Button>
        <Button number={number} setNumer={setNumer}>3</Button>
        <Button number={number} setNumer={setNumer}>4</Button>
        <Button number={number} setNumer={setNumer}>5</Button>
        <Button number={number} setNumer={setNumer}>6</Button>
        <Button number={number} setNumer={setNumer}>7</Button>
        <Button number={number} setNumer={setNumer}>8</Button>
        <Button number={number} setNumer={setNumer}>9</Button>
        <Button number={number} img={"+"} setNumer={setNumer}>+</Button>
        <Button number={number} setNumer={setNumer}>0</Button>
        <Button number={number} img={"img"} setNumer={setNumer}>
          <StyledImg src="public/img/backSpace.svg" alt="" />
        </Button>
      </StyledBtn>
    </StyledDiv>
  );
}

export default App;



