@echo off
start "Server" node index.js
start "Tunnel 1" node tunnel1.js
start "Tunnel 2" node tunnel2.js
