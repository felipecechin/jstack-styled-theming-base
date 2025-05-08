import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({
  onToggleTheme,
  selectedTheme
}) {

  // useEffect(() => {
  //   console.debug({
  //     selectedTheme
  //   });
  //   // Executa apenas uma vez
  //   // componentDidMount
  //   return () => {
  //     console.log('Layout unmounted');
  //     // Executa quando o componente é desmontado
  //     // componentWillUnmount
  //   };
  // }, []);

  return (
    <>
      <Header 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
