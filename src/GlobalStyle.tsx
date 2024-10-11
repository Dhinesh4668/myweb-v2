import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');


  /* title fonts */
  @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap'); // font-family: "Cabin", sans-serif;
  /* body font */
  @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&display=swap'); //font-family: "Outfit", sans-serif;

  * {
      box-sizing: border-box;

    font-family: "Cabin", sans-serif;
      margin: 0;
      padding: 0;
  }

  body {
      background-color: #0D0D0D; /* Dark background */
      color: #E0E0E0; /* Light text color */
      line-height: 1.6;
      overflow-y: scroll; /* Enable scrolling */
      font-family: "Cabin", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
      color: #FFFFFF; /* Header text color */
      margin-bottom: 0.5rem;
  }

  p {
      color: #B0BEC5; /* Paragraph text color */
      margin-bottom: 1rem;
  }

  a {
      color: #BB86FC; /* Link color */
      text-decoration: none;
      &:hover {
          text-decoration: underline;
      }
  }

  input, textarea, select {
      background-color: #1E1E1E; /* Input background */
      color: #E0E0E0; /* Input text color */
      border: 1px solid #444; /* Input border */
      border-radius: 4px;
      padding: 0.5rem;
      &:focus {
          outline: none;
          border-color: #BB86FC; /* Input focus border color */
      }
  }

  button {
      background-color: #BB86FC; /* Button background */
      color: #121212; /* Button text color */
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
          background-color: #9B67E3; /* Button hover color */
      }
  }

  *::-webkit-scrollbar {
    display: none; 
  }
`;

export default GlobalStyle;
