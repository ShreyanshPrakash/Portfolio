import { createStore, applyMiddleware } from 'redux';
import { ActionTypes } from './root.action';
import thunk from 'redux-thunk';

class UISuccessModel{
    constructor(){
        this.isSuccess = false;
        this.successMessage = '';
        this.successResponse = '';
    }
}

class UIErrorModel{
    constructor(){
        this.hasError = false;
        this.errorMessage = "";
        this.errorResponse = "";
    }
}

class UIStateModel{
    constructor(){
        this.pageLoaded = false;
        this.showSpinner = false;
        this.isPageLoading = false;
    }
}

class InitialStateModel{
    constructor(){
        this.success = new UISuccessModel();
        this.error = new UIErrorModel();
        this.uiState = new UIStateModel();
    }
}

const rootReducer = ( state = new InitialStateModel(), action ) => {

    if( window.location.hostname === 'localhost' )
        console.log( action );

    switch( action.type ){

        case ActionTypes.INITIATE_API_CALL:
            return{
                ...state,
                uiState: {
                    ...state.uiState,
                    isPageLoading: true
                }
            }

        case ActionTypes.API_CALL_SUCCESS:
            return{
                ...state,
                uiState: new UIStateModel(),
                error : new UIErrorModel(),
                success : {
                    success: true,
                    successMessage : action.payload.statusText,
                    successResponse: action.payload.data
                },
                ...action.payload.data
            }

        case ActionTypes.API_CALL_ERRORED:
            return{
                ...state,
                uiState: new UIStateModel(),
                success: new UISuccessModel(),
                error: {
                    hasError : true,
                    errorMessage: action.payload.errorMessage,
                    errorResponse: action.payload
                }
            }

        default:
            return{
                ...state
            }
        
    }

}

const store = createStore( 
    rootReducer,
    applyMiddleware( thunk )
);

if( window.location.hostname === 'localhost' )
    store.subscribe( () => console.log( store.getState() ) );

export {
    UIErrorModel,
    UISuccessModel,
    InitialStateModel,
    rootReducer,
    store,
}