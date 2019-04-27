import React, { Component } from 'react';
// import t from 'prop-types'

class Header extends Component {
  render () {
    return (
      <header className="d-flex justify-content-center header">
        <div className="header__logo">
          <img
            className="header__logo__image"
            src="assets/img/logo.png"
            alt="Logo"
          />
        </div>
      </header>
    )
  }
}

// Header.propTypes = {
//   teste: t.bool
// }


export default Header;