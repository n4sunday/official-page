import { h ,FunctionalComponent} from 'preact';
import Header from './header';
import Footer from './footer';
import Invite from './invite';
import Structure from './structure';
import { Button } from 'antd';

const App: FunctionalComponent = () => (
	<div id="app">
		<Header />
		<Invite/>

		<Structure/>
		<Invite/>
		<Footer/>
	</div>
)

export default App;
