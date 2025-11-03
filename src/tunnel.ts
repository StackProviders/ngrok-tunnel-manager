import { connect } from '@ngrok/ngrok';
import type { TunnelConfig } from './config';

export async function startTunnel(config: TunnelConfig): Promise<void> {
  try {
    const listener = await connect({
      addr: config.addr,
      authtoken: config.authtoken,
      ...(config.domain && { domain: config.domain }),
    });
    console.log(`✓ ${config.name} (port ${config.addr}): ${listener.url()}`);
  } catch (err) {
    console.error(`✗ ${config.name} failed:`, (err as Error).message);
  }
}
