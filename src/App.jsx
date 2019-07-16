import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Nav />
				<div className='app-wrapper__content'>
					<Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogs} /> }/>
					<Route path='/profile' render={ () => <Profile
															profile={props.state.profile}
															newPostText={props.state.newPostText}
															dispatch={props.dispatch} /> }/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
