import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import Users from "../../components/Users/Users";
import { usersActions, usersReducers, usersSelectors } from "../../data/users_container";
import Loader from "../../components/Loader/Loader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect/withAuthRedirect";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  onClickCurrentPage = (currentPage) => {
    this.props.getUsersThunkCreator(currentPage, this.props.pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching && <Loader />}
        <Users
          totalCount={this.props.totalCount}
          users={this.props.users}
          pageSize={this.props.pageSize}
          onClickCurrentPage={this.onClickCurrentPage}
          isFollowingProgress={this.props.isFollowingProgress}
          followThunkCreator={this.props.followThunkCreator}
          unFollowThunkCreator={this.props.unFollowThunkCreator}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: usersSelectors.getUsers(state),
    pageSize: usersSelectors.getPageSize(state),
    totalCount: usersSelectors.getTotalCount(state),
    currentPage: usersSelectors.getCurrentPage(state),
    isFetching: usersSelectors.getIsFetching(state),
    isFollowingProgress: usersSelectors.getIsFollowingProgress(state),
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setUsers: usersActions.setUsers,
      setCurrentPage: usersActions.setCurrentPage,
      setTotalCount: usersActions.setTotalCount,
      setIsFetching: usersActions.setIsFetching,
      getUsersThunkCreator: usersReducers.getUsersThunkCreator,
      followThunkCreator: usersReducers.followThunkCreator,
      unFollowThunkCreator: usersReducers.unFollowThunkCreator,
    },
    dispatch
  );

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer)
