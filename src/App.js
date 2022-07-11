import { useEffect } from 'react';

import './App.css';
import ContactUs from './components/ContactUs';
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-189719752-1';
ReactGA.initialize(TRACKING_ID);

function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<div className="App">
			<ContactUs />
		</div>
	);
}

export default App;
