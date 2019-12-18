const express = require('express');
const fs = require('fs');
const path = require('path');
const {getDataFromCMS} = require('./../controllers/cms.controller');

const cmsRouter = express.Router();

cmsRouter.get( '/:documentId', async ( req, res ) => { 

    try{
        // let content = await getDataFromCMS( req.params.documentId )
        // res.json({
        //     [ req.params.documentId ]: content
        // });
        // setTimeout( () => {
            let data = fs.createReadStream(
                path.join(
                    __dirname, '../', 'documents', `${req.params.documentId}.document.json`
                )
            )
    
            data.on( "data", ( data, err ) => {
                res.json({
                    [ req.params.documentId ]: JSON.parse(data.toString())
                });
            })
        // }, 2000)
        
        
    }catch( err ){
        res.status( 404 ).json({
            error: true,
            errorMessage: "Something went wrong. Please try again later."
        })
    }
   

});

module.exports = {cmsRouter};