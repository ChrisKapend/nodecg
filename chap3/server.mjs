import {createServer} from 'http';

const server = createServer((request, response) => {
    response.writeHeader(200, {'content-type': 'text/html; charset=utf8'});
    const body = `
    <!Doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <title>Node.js Demo</title>
    </head>
    <body>
        <h1 style="color: purple; font-family: 'Segoe UI Light'">
            Hello World!
        </h1>
    </body>
    </html>
    `
    response.end(body);
});

server.listen(8080, () => {
    console.log(`Server is listening to http://localhost${server.address().port}`)
});