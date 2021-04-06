import styled from "styled-components";

const Title = styled.h1`
  font-size: 38px;
  font-weight: 400;
  margin: 1rem;
  padding: 3rem 0;
  color: ${props => (props.main ? "black" : "white")};
  text-align: center;

`;

export default Title;
