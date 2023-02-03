import React from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Users } from "../../components/Users/Users";
import { usersActions, usersReducers, usersSelectors } from "../../data/users_container";
import Loader from "../../components/Loader/Loader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect/withAuthRedirect";

const UserPage = (props) => {
  const { followThunkCreator, unFollowThunkCreator } = props;
  const isFetching = useSelector(usersSelectors.getIsFetching);

  return (
    <>
        <h2>{'Users'}</h2>
        {isFetching && <Loader />}
        <Users
          followThunkCreator={followThunkCreator}
          unFollowThunkCreator={unFollowThunkCreator}
        />
      </>
  )
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setUsers: usersActions.setUsers,
      setCurrentPage: usersActions.setCurrentPage,
      setTotalCount: usersActions.setTotalCount,
      setIsFetching: usersActions.setIsFetching,
      followThunkCreator: usersReducers.followThunkCreator,
      unFollowThunkCreator: usersReducers.unFollowThunkCreator,
    },
    dispatch
  );

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps),
)(UserPage)
