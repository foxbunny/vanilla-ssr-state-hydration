let
  http = require('http'),
  fs = require('fs'),
  path = require('path')

let
  clientCode = fs.readFileSync(path.resolve(__dirname, 'client.js')),
  tableData = Array.from(new Array(500), (_, i) => [
    Math.round(Math.random() * 1000),
    Math.random().toString(36).slice(2),
  ]),
  notFoundHTML = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>SSR state hydration - table</title>
      </head>
      <body>
        <h1>404: Page not found</h1>
      </body>
    </html>
  `

let
  renderRow = ([a, b]) => `
    <tr>
      <td>${a}</td>
      <td>${b}</td>
    </tr>
  `,
  renderPage = () => `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>SSR state hydration - table</title>
        <script defer src="client.js"></script>
      </head>
      <body>
        <h1>SSR state hydration example: table</h1>
        
        <table id="table">
          <thead>
            <th scope="col" data-type="numeric">Number</th>
            <th scope="col" data-type="string">Text</th>
          </thead>
          <tbody>
            ${tableData.map(renderRow).join('')}
          </tbody>
        </table>
      </body>
    </html>
  `,
  respond = (res, text, contentType, status = 200) => {
    let buff = Buffer.from(text, 'utf-8')
    res.writeHead(status, {
      'content-type': contentType,
      'content-length': buff.length,
    })
    res.end(buff)
  }

http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      respond(res, renderPage(), 'text/html')
      break
    case '/client.js':
      respond(res, clientCode, 'text/javascript')
      break
    default:
      respond(res, notFoundHTML, 'text/html', 404)
  }
}).listen(8080, '127.0.0.1', () => {
  console.log('Server is listening at http://localhost:8080')
})
