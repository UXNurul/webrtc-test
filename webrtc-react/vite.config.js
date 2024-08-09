import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import fs from "fs";
// import path from "path";

// Define the path to your certificate files
// const key = fs.readFileSync(path.resolve(__dirname, 'key.pem'));
// const cert = fs.readFileSync(path.resolve(__dirname, 'cert.pem'));

export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Allow connections from any IP
  //   port: 3000,      // You can specify a different port if needed
  //   https: {
  //     key,
  //     cert
  //   },
  //   strictPort: true // Ensure Vite uses the specified port
  // }
});
