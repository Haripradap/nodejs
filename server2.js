
import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {id:1, name: "hari1"},
    {id:2, name: "hari2"},
    {id:3, name: "hari3"},
    {id:4, name: "hari4"},
];


//logger middleware
const logger = (req,res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

//json middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

// route handler for /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

//route handler for /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3]
    const user =users.find((user) => user.id === parseInt(id));
    if(user){
                
        res.write(JSON.stringify(user));
        
    }
    else {
        
        res.statusCode = 404;
        res.write(JSON.stringify({message : 'user not found'}));
        
    }
    res.end();
};

//Not Found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message : 'Route not found'}));
    res.end();
};

const server = createServer((req ,res) => {
    logger(req,res, () => {
       jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET'){
                getUsersHandler(req, res);
            }
            else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByIdHandler(req, res);
            }
            else {
                notFoundHandler(req, res);
            }
       });
    });
        
});

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});