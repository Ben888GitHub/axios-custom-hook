import logo from './logo.svg';
import './App.css';
import FirstExample1 from './component/FirstExample1';
import FirstExample2 from './component/FirstExample2';
import SecondExample from './component/SecondExample';

function App() {
	return (
		<div className="App">
			<h1>Custom Hook Axios</h1>
			<FirstExample1 />
			<br />
			<FirstExample2 />
			<br />
			<SecondExample />
		</div>
	);
}

export default App;
