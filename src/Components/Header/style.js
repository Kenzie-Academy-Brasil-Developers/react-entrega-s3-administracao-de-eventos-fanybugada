import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #d3d3d3c9;
  position: sticky;
  top: 0;
  border-radius: 0px 0px 50px 50px;
  box-shadow: 0 0.06em 1em rgba(131 129 129 / 81%);

  button {
    border: none;
    margin: 0 3vw;
    background-color: black;
    color: white;
    padding: 8px;
    border-radius: 10px 1px 10px 1px;
  }

  button:hover {
    border-radius: 1px 10px 1px 10px;
    cursor: pointer;
  }
`;
