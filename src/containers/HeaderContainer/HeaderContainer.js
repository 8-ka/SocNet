import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header/Header";
import { authReducers } from "../../data/auth_container";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />
  }
};

const mapStateToProps = (state) => {
  const { isAuth, login } = state.auth;

  return {
    isAuth,
    login,
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setLogOut: authReducers.setLogOutThunkCreator,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
