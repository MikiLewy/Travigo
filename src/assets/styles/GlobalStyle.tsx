import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    font-family:'Poppins', sans-serif;
    font-size: 10px;
}
button{
    font-family:'Poppins', sans-serif;

}

`;
