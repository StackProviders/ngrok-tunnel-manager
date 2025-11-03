import { connect } from '@ngrok/ngrok';
import type { TunnelConfig } from './config';

const config: TunnelConfig = JSON.parse(process.argv[2]);

connect({
  addr: config.addr,
  authtoken: config.authtoken,
  ...(config.domain && { domain: config.domain }),
})
  .then(listener => {
    console.log(`✓ ${config.name} (port ${config.addr}): ${listener.url()}`);
    setInterval(() => {}, 1000);
  })
  .catch(err => {
    console.error(`✗ ${config.name} failed:`, err.message);
    process.exit(1);
  });
