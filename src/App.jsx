import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Nav />
				<div className='app-wrapper__content'>
					<Route path='/dialogs' render={ () => <DialogsContainer store={props.store} /> }/>
					<Route path='/profile' render={ () => <Profile store={props.store} /> }/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
