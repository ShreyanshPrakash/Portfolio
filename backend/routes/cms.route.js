const express = require('express');
const fs = require('fs');
const path = require('path');

const cmsRouter = express.Router();

cmsRouter.get( '/:documentId', async ( req, res ) => { 

    try{
        let content = await getDataFromCMS( req.params.documentId )
        res.json({
            [ req.params.documentId ]: content
        });
    }catch( err ){
        res.status( 404 ).json({
            error: true,
            errorMessage: "Something went wrong. Please try again later."
        })
    }
   

});

module.exports = {cmsRouter};