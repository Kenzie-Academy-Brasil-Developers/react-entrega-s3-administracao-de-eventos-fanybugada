import styled from "styled-components";

export const ContainerDiv = styled.div`
  margin: 20px 20px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;

  div {
    background-color: grey;
    width: 40%;
    min-width: 250px;
    max-width: 300px;
    /* height: 500px; */
    min-height: min-content;
    text-align: center;
    padding: 10px;
    margin: 1rem;
    border-radius: 15px;

    img {
      width: 100%;
      max-width: 270px;
      height: 100%;
      max-height: 500px;
    }

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
  }
`;
