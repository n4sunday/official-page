import { h , FunctionalComponent} from 'preact';
import {useEffect, useState} from "preact/hooks";
import * as style  from './style.scss';
 interface IProps {
  user?: string,
}
// Note: `user` comes from the URL, courtesy of our router
const Profile : FunctionalComponent<IProps> = (props) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div class={style.profile}>
			<h1>Profile: {props.user}</h1>
			<p>This is the props.user profile for a user named { props.user }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => setCount((count) => count + 1)}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>
		</div>
	);
}

export default Profile;
