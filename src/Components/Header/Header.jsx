import React, { useEffect, useState } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { getAuthUserData, setAuthUserData, signOut } from '../../Redux/auth-reducer';
import { connect } from 'react-redux';

const Header = (props) => {
  useEffect(() => props.getAuthUserData())
  const signOut = () => props.signOut()

  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
      <Navbar.Brand >My APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to={"/home"}>Home</NavLink>
          <NavLink className="nav-link" to={"/shop"}>Shop</NavLink>
          <NavLink className="nav-link" to={"/admin"}>Admin</NavLink>
        </Nav>
        <Nav>

          <p>{props.email}</p>
          {props.uid
            ? <NavLink className="nav-link" to="/" onClick={signOut}>Sign Out</NavLink>
            : <>
              <NavLink className="nav-link" to={"/sign-in"}>Sign in</NavLink>
              <NavLink className="nav-link" to={"/sign-up"}>Sign up</NavLink>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
const mapStateToProps = (state) => ({
  uid: state.firebase.auth.uid,
  email: state.firebase.auth.email

})
const mapDistpatchToProps1 = (dispatch) => {
  return {
    setAuthUserData: () => dispatch(setAuthUserData()),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, { signOut, getAuthUserData })(Header) 
