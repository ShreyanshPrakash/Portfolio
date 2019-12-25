const express = require('express');
const fs = require('fs');
const path = require('path');
const { cmsRouter } = require( './routes/cms.route' );

const { loggerMiddleWare } = require('./middleware/logger.middleware');
const { corsMiddleWare } = require('./middleware/cors.middleware');

const app = express();

app.use( loggerMiddleWare, corsMiddleWare )

app.use( ( req, res, next ) => {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    })

    next();
})


app.use('/restservices/content', cmsRouter );

// can be pushed into static router file.
app.get( '**', ( req, res ) => {

    // fs.createReadStream()
    console.log( req.url )
    res.json({
        message: "Default route"
    })

})





process.addListener( 'uncaughtException', handleUncaughtException );

function handleUncaughtException( event ){
    console.log( event );
}

// when server is up, print the port and also the routes that it is listening to all such details.
// while starting, try to make connection to the db and print the status
app.listen( 4200, () => console.log("Listening at port 4200" ) );

