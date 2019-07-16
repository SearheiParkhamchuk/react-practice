import React from 'react';
import { NavLink } from 'react-router-dom';
import css from "./Nav.module.css";

const Nav = () => {
	return (
		<nav className={css.nav}>
			<ul>
				<li className={css.item}>
					<NavLink to='/profile' activeClassName={css.active}>Profile</NavLink>
				</li>
				<li className={css.item}>
					<NavLink to='/dialogs' activeClassName={css.active}>Messages</NavLink>
				</li>
				<li className={css.item}>
					<NavLink to='/' activeClassName={css.active}>News</NavLink>
				</li>
				<li className={css.item}>
					<NavLink to='/' activeClassName={css.active}>Music</NavLink>
				</li>
				<li className={css.item}>
					<NavLink to='/' activeClassName={css.active}>Settings</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;