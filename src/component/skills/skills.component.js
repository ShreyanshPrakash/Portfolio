import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPageContentAction } from '../../store/root.action';
import { apiEndpoints } from '../../config/api.endpoints';


function SkillsComponent( props ){

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( GetPageContentAction( apiEndpoints.skills ) );
    }, [ dispatch ] )

    const skillsContent = useSelector( state => state.skills );

    const getUiTemplate = useCallback( () => {
        if( !skillsContent ){
            return <p>Loading.....</p>
        }

        console.log( skillsContent );
        return(
            <div className="skillsWrapper">
                <h1>Hello</h1>
            </div>
        )
    })
    
    return(
        <React.Fragment>
            { getUiTemplate() }
        </React.Fragment>
    )
}



export {
    SkillsComponent,
}