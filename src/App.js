import { useEffect } from 'react';

import './App.css';
import ContactUs from './components/ContactUs';

import ReactGA from 'react-ga';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
const TRACKING_ID = 'UA-189719752-1';
ReactGA.initialize(TRACKING_ID);

const Home = () => (
	<div>
		<h1>Home</h1>
	</div>
);

function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<div className="App">
			<h1>React Google Analytics</h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
