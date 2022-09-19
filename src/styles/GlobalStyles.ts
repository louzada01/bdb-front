import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * { 
    margin: 0; 
    border: 0;
    padding: 0;
  	vertical-align: baseline;
  }
  body{ 
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }
`;
