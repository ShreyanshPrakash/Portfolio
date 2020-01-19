const httpRedirectMiddleWare = ( req, res, next ) => {
    if( !req.secure || req.protocol === 'http' )
        res.status(301).redirect("https://" + req.headers.host + req.url);
    next();
}

module.exports = { httpRedirectMiddleWare }