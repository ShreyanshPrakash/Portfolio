import { getData } from "../component/http.service"

const ActionTypes = {

    INITIATE_API_CALL : "[API] Initiate Api call",
    RESET_UI_STATE : "[UI] Reset the ui state",

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

function ResetUIStateAction( payload ){
    return{
        type: ActionTypes.RESET_UI_STATE,
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
        }catch( err ){
            dispatch( ApiErrorAction( err ) )
        }
    }

}




export {
    ActionTypes,
    InitiateApiCallAction,
    ApiErrorAction,
    ApiSuccessAction,
    GetPageContentAction,
    ResetUIStateAction,
}