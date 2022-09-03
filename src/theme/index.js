import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
	html{
		font-size: 16px;
		font-family: 'Source Sans Pro';
	}
	h1, h2, h3, h4, h5, p, span {
		font-style: normal;
	}
	p, span {
		letter-spacing: .75px
	}
`;

const theme = {
  typography: {
    headingFontSizes: ["4", "3.5", "3", "2", "1.5"],
    bodyFontSizes: ["1.25", "1.125", "0.9375", "0.8125"],
  },
  palette: {
    primary: "#D5AA63",
    secondary: "#A6A19A",
  },
};

export default theme;
