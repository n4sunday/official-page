import { h ,FunctionalComponent} from 'preact';
import Header from './header';
import Footer from './footer';
import Invite from './invite';
import { Button } from 'antd';

const App: FunctionalComponent = () => (
	<div id="app">
		<Header />
		<div style={{padding:80}}>

		</div>
		<Button type="primary">Primary Button</Button>
		<div>asdasdasd</div>
		<Invite/>
		<Footer/>
	</div>
)

export default App;
