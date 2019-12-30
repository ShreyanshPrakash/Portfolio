import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPageContentAction } from '../../store/root.action';
import { apiEndpoints } from '../../config/api.endpoints';
import './work.style.css';

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
                <div key={index} className="workItem">
                    <h2 className="projectTile">{item.title}</h2><hr></hr>
                    <p className="description">{item.description}</p>
                    <ul className="techStack">
                        {item.stack.map((stack, key) => {
                            return <li key={key}>{stack.viewContent}</li>
                        })}
                    </ul>
                    <div className="linksWrapper">
                        {item.links.map((link, key) => {
                            return <a key={key} href={link.href} target="_blank" rel="noopener noreferrer">{link.viewContent}</a>
                        })}
                    </div>
                </div>
            )
        })
    }, [workContent])

    return (
        <React.Fragment>
            <h1 className="title">Projects</h1>
            <div className="workWrapper">
                {getUiTemplate()}
            </div>
        </React.Fragment>
    )
}



export {
    WorkComponent,
}