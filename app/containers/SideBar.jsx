import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';

import classNames from 'classnames/bind';
import styles from 'css/components/navigation';
 
const cx = classNames.bind(styles);

const SideBar = ({user, dispatch}) => {
	const logout = () => dispatch(logOut());

    return (
      <nav className={cx('navigation')} role="navigation">
        
          { user.authenticated ? (
            <Link onClick={logout}
              className={cx('item')} to="/">Home</Link>
          ) : (
            <Link className={cx('item')} to="/login">Home</Link>
          )}
          <Link className={cx('item')} to="/dashboard">Reports </Link>
          <Link className={cx('item')} to="/productListing">Product Listing</Link>
      </nav>
    );
};

SideBar.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SideBar);
