
const ActionTypes = {

    INITIATE_API_CALL : "[API] Initiate Api call",

    API_CALL_SUCCESS : "[API] Api call is resolved successfully",
    API_CALL_FAILED : "[API] Api call failed",
    API_CALL_ERRORED : "[API] Api call has errored",

}

// Static Actions

function InitiateApiCallAction( payload ){
    return{
        type: ActionTypes.INITIATE_API_CALL,
        payload: payload
    }
}


// Async Actions




export {
    ActionTypes,
    InitiateApiCallAction,
}