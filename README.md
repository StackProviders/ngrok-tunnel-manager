# Multi-Account Ngrok Tunnel Manager

Manage multiple ngrok tunnels with different accounts simultaneously.

## Features

- ✅ Multiple tunnels with separate ngrok accounts
- ✅ TypeScript support
- ✅ Easy configuration via `.env` file
- ✅ Custom domain support
- ✅ Isolated process per tunnel

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` file**
   - Get your authtoken from [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken)
   - (Optional) Reserve domains at [ngrok domains](https://dashboard.ngrok.com/domains)
   - Add your authtokens and domains to `.env`

## Usage

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm run build
npm start
```

## Adding More Tunnels

1. **Add environment variables** in `.env`:
   ```env
   NGROK_AUTHTOKEN_3=your_third_authtoken
   NGROK_DOMAIN_3=your-third-domain.ngrok-free.app
   ```

2. **Update `src/config.ts`**:
   ```typescript
   export const tunnels: TunnelConfig[] = [
     // ... existing tunnels
     {
       name: 'API Server',
       addr: 8000,
       authtoken: process.env.NGROK_AUTHTOKEN_3!,
       domain: process.env.NGROK_DOMAIN_3,
     },
   ];
   ```

## Configuration

Edit `src/config.ts` to modify tunnel settings:

```typescript
{
  name: 'Server Name',        // Display name
  addr: 3000,                 // Local port
  authtoken: 'your_token',    // Ngrok authtoken
  domain: 'your-domain.com',  // Optional: Custom domain
}
```

## Notes

- Each tunnel runs in a separate process to support multiple ngrok accounts
- Domains are optional - omit for random ngrok URLs
- Make sure your local servers are running before starting tunnels
- Press `Ctrl+C` to stop all tunnels

## Troubleshooting

**Error: Domain reserved for another account**
- Ensure the authtoken matches the account that owns the domain
- Or remove the domain field to use a random URL

**Error: Port already in use**
- Check if your local server is running on the specified port
- Verify no other process is using the port
