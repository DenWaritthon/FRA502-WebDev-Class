import express from'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const_filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// ---CONFIGURATION --
const appName = 'test-deploy'; // เปลี ยนให้ตรงกับชื อโฟลเดอร์แอป
const username = process.env.USER; 
const socketPath = `/home/${username}/apps/${appName}/app.sock`;
const distPath = path.join(__dirname, 'dist');
app.use(`/${username}/${appName}`, express.static(distPath));
app.use('/', express.static(distPath));
app.get(/.*/, (req, res) =>{
res.sendFile(path.join(distPath, 'index.html'));
});
// ---SOCKET LISTENER --
if(fs.existsSync(socketPath)) {
fs.unlinkSync(socketPath);
}
app.listen(socketPath, () =>{
console.log(`${appName} is running on socket: ${socketPath}`);
fs.chmodSync(socketPath, '777');
});
