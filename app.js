const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const readline = require('readline');

const server = http.createServer((req, res) => {

  let urlPath = req.url;

  const filePath = path.join(__dirname, 'html', urlPath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else if (path.extname(filePath) === '.html') {
      // If the requested file is an HTML file, add the <base> tag to resolve hyperlinks correctly.
      const baseUrl = `http://localhost:${port}${path.dirname(urlPath)}/`;
      const modifiedContent = content.toString().replace('<head>', `<head><base href="${baseUrl}">`);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(modifiedContent, 'utf-8');
    } else {
      const extname = path.extname(filePath);
      const contentType = {
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.htm':'text/html'
      };
      res.writeHead(200, { 'Content-Type': contentType[extname] || 'text/plain' });
      res.end(content, 'utf-8');
    }
  });
});

const port = 1145;
const url = `http://localhost:${port}`;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function openBrowser(url) {
  if (process.platform === 'win32') {
    exec(`start "" "${url}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error opening the browser: ${error}`);
      }
    });
  }
  //else if (process.platform === 'darwin') {
  //  exec(`open "${url}"`, (error, stdout, stderr) => {
  //    if (error) {
  //      console.error(`Error opening the browser: ${error}`);
  //    }
  //  });
  //} else {
  //  exec(`xdg-open "${url}"`, (error, stdout, stderr) => {
  //    if (error) {
  //      console.error(`Error opening the browser: ${error}`);
  //    }
  //  });
  //}
}

const directoryPath = path.join(__dirname, 'html');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    const htmlFiles = files.filter(file => file.endsWith('.html'));
    if (htmlFiles.length === 0) {
      console.log('No HTML files found in the directory.');
    } else {
      console.log('HTML files in the directory:');
      htmlFiles.forEach((file, index) => {
        console.log(`${index + 1}: ${file}`);
      });

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const openSelectedFiles = () => {
        rl.question('Enter the number of the HTML file you want to open : ', (answer) => {
          const fileNumber = parseInt(answer);
          if (fileNumber >= 1 && fileNumber <= htmlFiles.length) {
            const selectedFile = htmlFiles[fileNumber - 1];
            openBrowser(`http://localhost:${port}/${selectedFile}`);
            openSelectedFiles();
          } else {
            console.log('Invalid input. Please enter a valid number.');
            openSelectedFiles();
          }
        });
      };

      openSelectedFiles();
    }
  }
});
