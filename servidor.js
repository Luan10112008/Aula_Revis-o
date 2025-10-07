// servidor.js

// TODO: Importe o módulo http
const http = require('http');

// TODO: Defina a porta
const PORT = 3000;

// TODO: Crie o servidor
const servidor = http.createServer((req, res) => {
    // TODO: Configure o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    // TODO: Verifique a URL da requisição
    if (req.url === '/') {
        // TODO: Responda com página inicial
        res.end(`
            <html>
                <head>
                    <title>Página Inicial</title>
                </head>
                <body>
                    <h1>Bem-vindo à página inicial!</h1>
                </body>
            </html>
        `);
    } else if (req.url === '/sobre') {
        // TODO: Responda com página sobre
        res.end(`
            <html>
                <head>
                    <title>Sobre Mim</title>
                </head>
                <body>
                    <h1>Sobre Mim</h1>
                    <p>Meu nome é [Seu Nome] e este é um servidor simples em Node.js.</p>
                </body>
            </html>
        `);
    } else {
        // TODO: Responda com erro 404
        res.writeHead(404);
        res.end(`
            <html>
                <head>
                    <title>Página Não Encontrada</title>
                </head>
                <body>
                    <h1>404 - Página não encontrada</h1>
                    <p>A página que você está procurando não existe.</p>
                </body>
            </html>
        `);
    }
});

// TODO: Inicie o servidor
servidor.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
