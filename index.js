import 'dotenv/config';
import { createServer } from 'http';
import { connect } from '@ngrok/ngrok';

// Create webserver
createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('Congrats you have created an ngrok web server');
}).listen(8080, () => console.log('Node.js web server at 8080 is running...'));

// Get your endpoint online
connect({ addr: 3000, authtoken: process.env.NGROK_AUTHTOKEN })
	.then(listener => console.log(`Ingress established at: ${listener.url()}`));