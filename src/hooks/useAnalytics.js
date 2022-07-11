import ReactGA from 'react-ga';
export const useAnalytics = (category = 'Blog category') => {
	// console.log(category);
	// return category;
	const eventTracker = (action = 'test action', label = 'test label') => {
		console.log({ category, action, label })
        ReactGA.event({ category, action, label });
	};
	return eventTracker;
};
