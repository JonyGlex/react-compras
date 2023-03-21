import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #004e4e;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const Annoucement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Annoucement;
