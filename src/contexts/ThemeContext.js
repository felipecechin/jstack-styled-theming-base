import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  handleToggleTheme: () => {},
});

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");

//   const handleToggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let theme = 'dark';

    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        theme = JSON.parse(savedTheme);
      }
    } catch (error) {
      console.error("Error parsing theme from localStorage:", error);
    }

    this.state = {
      theme,
      batatinha: "frita",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      console.log("Theme changed to:", this.state.theme);
    }
  }

  handleToggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }), () => {
      localStorage.setItem("theme", JSON.stringify(this.state.theme));
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        <button onClick={() => this.setState({ batatinha: 123 })}>
          Change Batatinha
        </button>

        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}