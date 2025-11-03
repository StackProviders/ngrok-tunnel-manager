import { tunnels } from './config';
import { startTunnel } from './tunnel';

async function main() {
  console.log('Starting ngrok tunnels...\n');
  
  await Promise.all(tunnels.map(startTunnel));
  
  setInterval(() => {}, 1000);
}

main();
