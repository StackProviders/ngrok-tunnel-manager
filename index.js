import 'dotenv/config';
import { createServer } from 'http';
import { connect } from '@ngrok/ngrok';

// Create webserver
createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('Congrats you have created an ngrok web server');
}).listen(8080, () => console.log('Node.js web server at 8080 is running...'));


// Get your endpoint online
async function startTunnels() {
	try {
		const listener1 = await connect({ 
			addr: 3000, 
			authtoken: process.env.NGROK_AUTHTOKEN_1,
			domain: process.env.NGROK_DOMAIN_1
		});
		console.log(`Tunnel 1 established at: ${listener1.url()}`);
	} catch (err) {
		console.error(`Tunnel 1 failed:`, err.message);
	}

	try {
		const listener2 = await connect({ 
			addr: 5000, 
			authtoken: process.env.NGROK_AUTHTOKEN_2,
			domain: process.env.NGROK_DOMAIN_2
		});
		console.log(`Tunnel 2 established at: ${listener2.url()}`);
	} catch (err) {
		console.error(`Tunnel 2 failed:`, err.message);
	}
}

startTunnels();