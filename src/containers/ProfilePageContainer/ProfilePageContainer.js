import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import withRouter from "../../hoc/withRouter/withRouter";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import { profileReducers, profileSelectors } from "../../data/profile_container";
import { withAuthRedirect } from "../../hoc/withAuthRedirect/withAuthRedirect";

class ProfilePageContainer extends PureComponent {
  refreshProfile = () => {
    let userId = this.props.router.params.userId || 27296;

    this.props.getUserProfileThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <ProfilePage {...this.props}
        isOwner={!this.props.router.params.userId}
        userProfile={this.props.userProfile}
        userStatus={this.props.userStatus}
        userUpdateStatus={this.props.userUpdateStatus}
        saveAvatar={this.props.saveAvatar}
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
      saveAvatar: profileReducers.saveAvatarThunkCreator,
    },
    dispatch
  );

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfilePageContainer)