import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Nav />
				<div className='app-wrapper__content'>
					<Route path='/dialogs' component={Dialogs}/>
					<Route path='/profile' component={Profile}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
