import { getData } from "../component/http.service"

const ActionTypes = {

    INITIATE_API_CALL : "[API] Initiate Api call",

    API_CALL_SUCCESS : "[API] Api call is resolved successfully",
    API_CALL_FAILED : "[API] Api call failed",
    API_CALL_ERRORED : "[API] Api call has errored",

}

// Plain Actions

function InitiateApiCallAction( payload ){
    return{
        type: ActionTypes.INITIATE_API_CALL,
        payload: payload
    }
}

function ApiErrorAction( payload ){
    return{
        type: ActionTypes.API_CALL_ERRORED,
        payload: payload
    }
}

function ApiSuccessAction( payload ){
    return{
        type: ActionTypes.API_CALL_SUCCESS,
        payload: payload
    }
}


// Async Actions

function GetPageContentAction( payload ){

    return async ( dispatch, getState ) => {
        try{
            dispatch( InitiateApiCallAction('Initiate') )
            let response = await getData( payload );
            dispatch( ApiSuccessAction( response ) )
        }catch( err ){ console.dir( err );
            if( err.message === 'Network Error')
                dispatch( ApiErrorAction( { message: err.message } ) )
            else
                dispatch( ApiErrorAction( err.response.data ) )
        }
    }

}




export {
    ActionTypes,
    InitiateApiCallAction,
    ApiErrorAction,
    ApiSuccessAction,
    GetPageContentAction,
}