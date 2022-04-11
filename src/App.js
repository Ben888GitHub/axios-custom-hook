import { Suspense, lazy } from 'react';
import './App.css';
import FirstExample1 from './component/FirstExample1';
import FirstExample2 from './component/FirstExample2';
// import SecondExample from './component/SecondExample';
const SecondExample2 = lazy(() => import('./component/SecondExample2'));
function App() {
	return (
		<div className="App">
			<h1>Custom Hook Axios</h1>
			<FirstExample1 />
			<br />
			<FirstExample2 />
			<br />
			{/* <SecondExample /> */}
			{/* <br /> */}
			<Suspense fallback={<p>Loading...</p>}>
				<SecondExample2 />
			</Suspense>
		</div>
	);
}

export default App;
