// middleware-app.js

const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

// Middleware de logging
function loggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next(); // chama o próximo middleware ou rota
}

// Middleware de autenticação simples
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    
    if (!token || token !== 'Bearer meutoken123') {
        return res.status(401).json({ erro: 'Token inválido' });
    }
    
    next(); // token válido, continua
}

// Usa o middleware de logging em todas as rotas
app.use(loggerMiddleware);

// Rota pública
app.get('/publico', (req, res) => {
    res.json({ mensagem: 'Esta é uma rota pública' });
});

// Rota protegida com middleware de autenticação
app.get('/protegido', authMiddleware, (req, res) => {
    res.json({ mensagem: 'Esta é uma rota protegida' });
});

app.listen(PORT, () => {
    console.log(`Servidor com middleware rodando em http://localhost:${PORT}`);
});
