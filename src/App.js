import React, { Component } from 'react';
import { ThemeProvider  } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

// function App(){
//   const [theme, setTheme] = useState('dark');

//   let firstRender = useRef(true);

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
//   }

  // Executa a cada render
  // useEffect(() => {
  //   console.debug('useEffect executed');
  // });

  // Executa apenas uma vez depois do mount
  // useEffect(() => {
  //   console.debug('useEffect executed');
  //   // Executa apenas uma vez
  //   // componentDidMount
  //   return () => {
  //     console.debug('useEffect cleanup');
  //     // Executa quando o componente é desmontado
  //     // componentWillUnmount
  //   };
  // }, []);  

  // Executa quando o tema muda
  // useEffect(() => {
  //   console.debug('Theme changed to:', theme);
  // }, [theme]);

  // executa antes do usuário ver a tela
  // executado de forma síncrona
  // useLayoutEffect(() => {
  //   for (let i = 0; i <= 15000; i++) {
  //     console.debug('useLayoutEffect', i);
  //   }
  // }, [theme]);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }

  //   console.debug('Theme changed to:', theme);
  // }, [theme])

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <button onClick={handleToggleTheme}>
//         Toggle theme
//       </button>
//       {theme === 'dark' && (
//         <Layout 
//           onToggleTheme={
//             handleToggleTheme
//           }
//           selectedTheme={theme}
//         />
//       )}
//     </ThemeProvider>
//   );
// };


class App extends Component {
  state = {
    theme: 'dark',
    oiTudoBem: true
  }

  handleToggleTheme = () => {
    // Função para forçar a renderização do componente
    // this.forceUpdate();

    this.setState((prevState) => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout 
          onToggleTheme={
            this.handleToggleTheme
          }
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

export default App;