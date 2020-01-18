// function initServiceWorkerConfig(){

//     // window.addEventListener( 'beforeinstallprompt', handleBeforeInstallPropmt );
//     handleServiceWorkerRegistration()

// }



// function handleServiceWorkerRegistration(){

//     if( 'serviceWorker' in navigator ){
//         navigator.serviceWorker.getRegistrations()
//             .then( reg => {

//                 if( reg.length === 0 )
//                     navigator.serviceWorker.register( `${process.env.PUBLIC_URL}/serviceWorker.js`)
//                         .then( event => console.log( event) )
//                         .catch( err => console.log( '[Error occured while registering service worker]::\n ', err ) )
//                 else
//                     console.log( "[Service worker is already registred]\n", reg );

//             } )
//             .catch( err => console.log( '[ Error occured while registering service worker ]::\n ', err ) );

//     }else{
//         console.log( "[The client doesn't support service worker]");
//     }

// }


// // let eventCache;
// // function handleBeforeInstallPropmt( event ){
// //     console.log("Propmpt");
// //     event.preventDefault();
// //     eventCache = event;
// //     showAddToHomeScreenBanner();

// // }

// // function showAddToHomeScreenBanner(){

// // }

// export{
//     initServiceWorkerConfig,
// }