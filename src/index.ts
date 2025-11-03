import { spawn } from 'child_process';
import { tunnels } from './config';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Starting ngrok tunnels...\n');

tunnels.forEach(config => {
  spawn('tsx', [join(__dirname, 'worker.ts'), JSON.stringify(config)], {
    stdio: 'inherit',
    shell: true,
  });
});
