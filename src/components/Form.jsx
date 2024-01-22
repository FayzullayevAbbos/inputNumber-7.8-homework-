import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
`;
const StyledInput = styled.input`
  outline: none;
  font-size: 40px;
  padding: 10px 10px 10px 90px;
  width: 100%;
  border-radius: 10px;
  border-color: #4b4b4b;
  font-weight: bold;
  color:${ (props)=>  props.color ? "red" : "#121111"} ;
`;
const StyledImg = styled.img`
  position: absolute;
  left: 15px;
  top: 20%;
  width: 40px;
`;

function Form({ number }) {
  const [imgs, setimgs] = useState(null);
  const [red , setRed] = useState(false)
  const companies = [
    {
      id: 1,
      codes: [90, 91],
      icon: "https://beeline.uz/favicon.ico",
    },
    {
      id: 2,
      codes: [94, 93, 50],
      icon: "https://ucell.uz/img/favicon.ico",
    },
    {
      id: 3,
      codes: [33],
      icon: "https://humans.uz/app-icons/favicon-32x32.png",
    },
    {
      id: 4,
      codes: [99, 98, 77, 95],
      icon: "https://uztelecom.uz/images/favicon.ico",
    },
  ];

  useEffect(() => {
    if (number.length == 3) {
      setRed(true)
      console.log("ok");
      const sliceNum = number.slice(0, length - 1);
      
      companies.forEach((company, i) => {
        if (company.codes.includes(+sliceNum)) {
          console.log(imgs);
          setRed(false)
          setimgs((prev) => (prev = i));
        }
      });
    }
    else if(number.length < 2) {
        
        setimgs((prev) => prev = null)
    }

  }, [number]);

  console.log("inputni klaviyatudan boshqaralomaslik un atay qilingan ");
  return (
    <StyledForm>
      <StyledInput color={red} value={number} type="text" />
      <StyledImg
        src={
          imgs == null
            ? "public/img/uzbekistan.png"
            : `${(companies[imgs]?.icon) } `
        }
        alt="copany img"
      />
    </StyledForm>
  );
}

export default Form;
