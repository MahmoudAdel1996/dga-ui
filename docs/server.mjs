import { createServer as createHttpsServer } from 'https';
import { createServer as createHttpServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

// Initialize Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // HTTPS server with certificates
  const httpsOptions = {
    key: readFileSync(join(__dirname, '.cert', 'localhost-key.pem')),
    cert: readFileSync(join(__dirname, '.cert', 'localhost.pem')),
  };

  const httpsServer = createHttpsServer(httpsOptions, async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  // Start HTTPS server
  httpsServer.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on https://${hostname}:${port}`);
  });
});
