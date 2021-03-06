const corsMiddleWare = ( req, res, next ) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    })
    next();
}

module.exports = { corsMiddleWare };