import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPageContentAction } from '../../store/root.action';
import { apiEndpoints } from '../../config/api.endpoints';

function WorkComponent(props) {

    const dispatch = useDispatch();

    const workContent = useSelector(state => state.work);

    useEffect(() => {
        dispatch(GetPageContentAction(apiEndpoints.work))
    }, [dispatch])

    const getUiTemplate = useCallback(() => {
        if (!workContent) {
            return <p>Loading ..............</p>
        }

        return workContent.map((item, index) => {
            return (
                <div key={index} className="workWrapper">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <ul>
                        {item.stack.map((stack, key) => {
                            return <li key={key}>{stack.viewContent}</li>
                        })}
                    </ul>
                    <div className="linksWrapper">
                        { item.links.map( ( link, key ) => {
                        return <a key={ key } href={ link.href } target="_blank">{ link.viewContent }</a>
                        })}
                    </div>
                </div>
            )
        })
    }, [workContent])

    return (
        <React.Fragment>
            {getUiTemplate()}
        </React.Fragment>
    )
}



export {
    WorkComponent,
}