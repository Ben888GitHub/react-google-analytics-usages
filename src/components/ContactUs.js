import { useAnalytics } from '../hooks/useAnalytics';

function ContactUs() {
	const eventTracker = useAnalytics('Contact us');

	return (
		<>
			<h3>Contact Us</h3>
			<div>
				<a href="#" onClick={() => eventTracker('call action', 'call label')}>
					Call Us
				</a>
			</div>
			<div>
				<a
					href="mailto:someone@example.com"
					onClick={() => eventTracker('email action', 'email label')}
				>
					Write to us
				</a>
			</div>
		</>
	);
}

export default ContactUs;
