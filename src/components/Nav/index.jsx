import React from 'react';
import css from "./Nav.module.css";

const Nav = () => {
	return (
		<nav className={css.nav}>
			<ul>
				<li className={`${css.item} ${css.active}`}>Profile</li>
				<li className={css.item}>Messages</li>
				<li className={css.item}>News</li>
				<li className={css.item}>Music</li>
				<li className={css.item}>Settings</li>
			</ul>
		</nav>
	)
}

export default Nav;