import { useAnalytics } from '../hooks/useAnalytics';

function ContactUs() {
	const eventTracker = useAnalytics('Contact us');

	return (
		<>
			<h3>Contact Us</h3>
			<div>
				<p onClick={() => eventTracker('call action', 'call label')}>Call Us</p>
			</div>
			<div>
				<p onClick={() => eventTracker('email action', 'email label')}>
					Write to us
				</p>
			</div>
		</>
	);
}

export default ContactUs;
