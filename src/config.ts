import 'dotenv/config';

export interface TunnelConfig {
  name: string;
  addr: number;
  authtoken: string;
  domain?: string;
}

export const tunnels: TunnelConfig[] = [
  {
    name: 'Next.js App',
    addr: 3000,
    authtoken: process.env.NGROK_AUTHTOKEN_1!,
    domain: process.env.NGROK_DOMAIN_1,
  },
  {
    name: 'WebSocket Server',
    addr: 3001,
    authtoken: process.env.NGROK_AUTHTOKEN_2!,
    domain: process.env.NGROK_DOMAIN_2,
  },
];
