import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { initializeApp } from './redux/reducers/app-reducer';
import { Preloader } from './components/Common/Preloader/preloader';
import store from './redux/redux-store';
import { BrowserRouter,Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './components/Common/WithSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.isInit) {
			return <Preloader />
		} else {
			return (
				<div className='app-wrapper'>
					<HeaderContainer />
					<Nav />
					<div className='app-wrapper__content'>
						<Switch>
							<Route exact path='/' render={() => <Redirect to={'/profile'}/>} />
							<Route path='/dialogs' render={withSuspense(DialogsContainer)} />
							<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
							<Route path='/users' render={withSuspense(UsersContainer)} />
							<Route path='/login' render={() => <LoginContainer />} />
						</Switch>
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	isInit: state.app.isInit
});

const ContainerApp = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}),
)(App);

const TestContainerApp = props => {
	return <BrowserRouter>
				<Provider store={store}>
					<ContainerApp />
				</Provider>
			</BrowserRouter>
}

export default TestContainerApp;
