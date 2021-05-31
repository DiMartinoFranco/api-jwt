const jwt= require('jsonwebtoken');

const validateToken= (req, res, next)=>{
    const token= req.header('auth-token');
    if(!token){ 
        return res.status(401).json({error: 'Acceso Denegado'})

    }

    try {
        const verificaToken=jwt.verify(token, process.env.TOKEN_SECRET);
        req.user=verificaToken
        next() //continua
    } catch (error) {
        return res.status(400).json({error: true, mensaje:'token no es valido' })
    }
}

module.exports = validateToken;