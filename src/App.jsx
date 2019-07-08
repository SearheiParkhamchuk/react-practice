import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Nav />
			<div className='app-wrapper__content'>
				<Profile />
				{/* <Dialogs /> */}
			</div>
		</div>
	);
}

export default App;
