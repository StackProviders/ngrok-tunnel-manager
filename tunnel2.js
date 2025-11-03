import 'dotenv/config';
import { connect } from '@ngrok/ngrok';

connect({ 
	addr: 5000, 
	authtoken: process.env.NGROK_AUTHTOKEN_2,
	domain: process.env.NGROK_DOMAIN_2
})
.then(listener => console.log(`Tunnel 2: ${listener.url()}`))
.catch(err => console.error(`Tunnel 2 failed:`, err.message));
