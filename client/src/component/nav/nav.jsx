
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import './style.css';

export default class NavElement extends React.Component {
  render() {
    const handleActive = (match) => {
      if (match && match.isExact) {
        return true;
      }
      return false;
    };
    const {
      link,
      txt,

    } = this.props;

    return (

      <NavLink to={link} isActive={handleActive} activeClassName="active" className="nav-link">
        <a>
          {txt}
        </a>
      </NavLink>


    );
  }
}

NavElement.propTypes = {
  txt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
