const jwt=require('jsonwebtoken')
const middlewareController={
    verifyToken:(req, res, next)=>{
        const token=req.headers.token
        if(token){
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user)=>{
                if(err){
                    res.status(403).json("Token is not value")
                }
                req.user=user;
                next()
            })
        }else{
            res.status(401).json("You need Sign in")
        }
    },
    verifyTokenAndAdmin:(req, res, next)=>{
        middlewareController.verifyToken(req, res, ()=>{
           if(req.user.id===req.params.id || req.user.admin){
            next();
           }else{
            res.status(403).json('Not alllowed')
           } 
        })

    }
}
module.exports=middlewareController