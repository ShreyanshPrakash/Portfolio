const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');

const { cmsRouter } = require( './routes/cms.route' );
const { loggerMiddleWare } = require('./middleware/logger.middleware');
const { corsMiddleWare } = require('./middleware/cors.middleware');
const { httpRedirectMiddleWare } = require('./middleware/httpRedirect.middleware');
const { staticMiddleware } = require('./middleware/static.middleware');

const app = express();


// middlewares
app.use( 
    loggerMiddleWare, 
    corsMiddleWare, 
    httpRedirectMiddleWare, 
    staticMiddleware
)

app.use('/restservices/content', cmsRouter );


// can be pushed into static router file.
app.get( '**', ( req, res ) => {

    fs.createReadStream(
        path.join(
            __dirname, '../', 'build', 'index.html'
        )
    ).pipe( res )

})





process.addListener( 'uncaughtException', handleUncaughtException );

function handleUncaughtException( event ){
    console.log( event );
}

// when server is up, print the port and also the routes that it is listening to all such details.
// while starting, try to make connection to the db and print the status
app.listen( 80, () => console.log("Listening at port 80" ) );

const httpsCred = {
    key: fs.readFileSync('/etc/letsencrypt/live/shreyanshprakash.com/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/shreyanshprakash.com/cert.pem', 'utf8')
}

const httpsServer = https.createServer( httpsCred, app );
httpsServer.listen( 443, () => console.log("Listening at port 443" ) );

