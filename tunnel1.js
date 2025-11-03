import 'dotenv/config';
import { connect } from '@ngrok/ngrok';

connect({ 
	addr: 3000, 
	authtoken: process.env.NGROK_AUTHTOKEN_1,
	domain: process.env.NGROK_DOMAIN_1
})
.then(listener => console.log(`Tunnel 1: ${listener.url()}`))
.catch(err => console.error(`Tunnel 1 failed:`, err.message));
