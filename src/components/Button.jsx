import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px 0;
  font-size: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
`;

function Button({ children, setNumer, number, img }) {
  function handleClick() {
    if (img == "img") {
      const sliceNum = number.slice(0, length - 1);
      setNumer(sliceNum);
    }
    if (number.length < 12) {
      if (img != "+" && !img) {
        if (number.length !== 6 && number.length !== 9) {
          setNumer((prev) => (prev += children));
        }
        if (number.length == 1) {
          setNumer((prev) => (prev += " "));
        } else if (number.length == 6) {
          setNumer((prev) => {
            return (prev += "-" + children);
          });
        } else if (number.length == 9) {
          setNumer((prev) => {
            return (prev += "-" + children);
          });
        }
      }
    }
  }
  return <StyledButton onClick={() => handleClick()}>{children}</StyledButton>;
}

export default Button;
