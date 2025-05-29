import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

// export default function Header({
//   onToggleTheme,
//   selectedTheme
// }) {
//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button type="button" 
//         onClick={onToggleTheme}
//       >
//         {selectedTheme === 'dark' ? '🌞' : '🌙'}
//       </button>
//     </Container>
//   );
// }


function Hoc(ComponentHeader) {
    return class Component extends React.Component {
      render() {
        return (
          <ThemeContext.Consumer>
            {(value) => (
              <ComponentHeader {...value}/>
            )}
        </ThemeContext.Consumer>
        );
      }
  }
}


class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.theme !== this.props.theme) {
      console.log("Theme changed to:", this.props.theme);
    }
  }

  render() {
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" 
          onClick={this.props.handleToggleTheme}
        >
          {this.props.theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </Container>
    );
  }
}

export default Hoc(Header);