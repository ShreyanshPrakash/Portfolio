const CACHE_NAME = 'PortfolioV1.0';
const PREV_CACHE_NAME = '';

// register the event handlers
this.addEventListener( 'install', handleInstallEvent );
this.addEventListener( 'activate', handleActivateEvent );
this.addEventListener( 'fetch', handleFetchEvent );




// Event handlers
function handleInstallEvent( event ){ 
    this.skipWaiting();  // dont wait for the old worker to stop.
    event.waitUntil( 
        cacheInitialData( event )
    )
}

function handleFetchEvent( event ){
    event.respondWith(
        getRequestedFetchData( event )
    )
}

function handleActivateEvent( event ){
    console.log("Service worker is now active ", event );
    caches.delete( PREV_CACHE_NAME )
        .then( event => console.log( event ) )
        .catch( err => console.log( err ) )
}




// Service worked logic
async function cacheInitialData( event ){
    try{
        let cacheRef = await caches.open( CACHE_NAME );
        cacheRef.addAll([
            './index.html'
        ])
        console.log("Service worker installed successfully");
    }catch( err ){
        console.log( "Error while instaling application : ", err )
    }
}



async function getRequestedFetchData( event ){
    
    try{
        let cacheResponse = await caches.match( event.request );
        if ( cacheResponse )
            return cacheResponse
       
        let networkResponse = await fetch( event.request );
        let cacheRef = await caches.open( CACHE_NAME );
        cacheRef.add( event.request, networkResponse.clone() );
        console.log( `Caching ${ event.request.url } ` );
        return networkResponse;
    }catch( err ){
        console.log(" Error while trying to fetch requested data ", err )
    }

}


