const express = require('express');
const path = require('path');

const staticMiddleware = ( req, res, next ) => {
    express.static(
        path.join(
            __dirname, '../', 'build'
        )
    )
    next();
}

module.exports = { staticMiddleware }