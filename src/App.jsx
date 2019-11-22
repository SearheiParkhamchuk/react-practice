import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { initializeApp } from './redux/reducers/app-reducer';

class App extends React.Component {
	render() {
		return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Nav />
				<div className='app-wrapper__content'>
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <LoginContainer />} />
				</div>
			</div>
		);
	}
}
export default compose(
	withRouter,
	connect(null, {initializeApp}),
)(App)
