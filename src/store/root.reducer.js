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

    switch( action.type ){

        case ActionTypes.INITIATE_API_CALL:
            return{
                ...state,
                uiState: {
                    ...state.uiState,
                    isPageLoading: true
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

store.subscribe( () => console.log( store.getState() ) );

export {
    UIErrorModel,
    UISuccessModel,
    InitialStateModel,
    rootReducer,
    store,
}