import { h ,FunctionalComponent} from 'preact';
import Header from './header';
import { Button } from 'antd';

const App: FunctionalComponent = () => (
	<div id="app">
		<Header />
		<div style={{padding:80}}>

		</div>
		<Button type="primary">Primary Button</Button>
		<div>asdasdasd</div>
	</div>
)

export default App;
