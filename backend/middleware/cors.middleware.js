const corsMiddleWare = ( req, res, next ) => {
    res.set({
        "Access-Control-Allow-Origin":  "*",
        "Access-Control-Allow-Method": "*"
    })
    next();
}

module.exports = { corsMiddleWare };