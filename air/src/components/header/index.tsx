import { h , FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';
import * as style from './style.scss';

const Header : 	FunctionalComponent  = () => (
	<header className={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} className={style.text} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</header>
);

export default Header;
