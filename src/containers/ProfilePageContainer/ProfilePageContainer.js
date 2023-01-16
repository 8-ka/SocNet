import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import withRouter from "../../hoc/withRouter/withRouter";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import { profileReducers, profileSelectors } from "../../data/profile_container";
import { withAuthRedirect } from "../../hoc/withAuthRedirect/withAuthRedirect";

class ProfilePageContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId || 27296;

    this.props.getUserProfileThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }

  render() {
    return (
      <ProfilePage {...this.props}
        userProfile={this.props.userProfile}
        userStatus={this.props.userStatus}
        userUpdateStatus={this.props.userUpdateStatus}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: profileSelectors.getUserProfile(state),
    userStatus: profileSelectors.getUserStatus(state),
    isAuth: profileSelectors.getIsAuth(state),
    autorisedUserId: profileSelectors.getUserId(state),
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUserProfileThunkCreator: profileReducers.getUserProfileThunkCreator,
      getUserStatusThunkCreator: profileReducers.getUserStatusThunkCreator,
      userUpdateStatus: profileReducers.updateUserStatusThunkCreator,
    },
    dispatch
  );

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfilePageContainer)