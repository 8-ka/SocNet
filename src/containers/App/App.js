import React, { PureComponent } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import ProfilePageContainer from '../ProfilePageContainer/ProfilePageContainer';
import MessagesPageContainer from '../MessagesPageContainer/MessagesPageContainer';
import NewsPage from '../../components/NewsPage/NewsPage';
import MusicPage from '../../components/MusicPage/MusicPage';
import SettingsPage from '../../components/SettingsPage/SettingsPage';
import UsersContainer from '../UsersContainer/UsersContainer';
import LoginPage from '../../components/Login/LoginPage';
import './styles.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withRouter from '../../hoc/withRouter/withRouter';
import { appReducers } from '../../data/app_container';
import Loader from '../../components/Loader/Loader';

class App extends PureComponent {
  componentDidMount() {
    this.props.setInitializedAppThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer className='header' />
        <Sidebar className='sidebar' />
        <div className='main-content'>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfilePageContainer className='test' />} />
            <Route path='/users' element={<UsersContainer className='test' />} />
            <Route path='/messages' element={<MessagesPageContainer />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/music' element={<MusicPage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route exact path="/" element={<Navigate to='/profile' /> } />
          </Routes>
        </div>
        <Footer className='footer' />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitializedAppThunkCreator: () => {
      dispatch(appReducers.setInitializedAppThunkCreator());
    },
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App)
