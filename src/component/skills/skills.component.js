import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPageContentAction } from '../../store/root.action';
import { apiEndpoints } from '../../config/api.endpoints';


function SkillsComponent(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetPageContentAction(apiEndpoints.skills));
    }, [dispatch])

    const skillsContent = useSelector(state => state.skills);

    const getUiTemplate = useCallback(() => {
        if (!skillsContent) {
            return <p>Loading.....</p>
        }
        return (
            <div className="skillsWrapper">
                {skillsContent.categories.map((category, categoryIndex) => {
                    return (
                        <div className="categoryWrapper" key={categoryIndex}>
                            <h2>{category.title}</h2>
                            {category.subTitle ? <span>{category.subTitle}</span> : null}
                            {category.groups.map((group, index) => {
                                return (
                                    <div className="groupWrapper" key={index}>
                                        <ul>
                                            {group.items.map((item, itemIndex) => {
                                                return <li key={itemIndex}>{item.viewContent}</li>
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }, [skillsContent])

    return (
        <React.Fragment>
            {getUiTemplate()}
        </React.Fragment>
    )
}



export {
    SkillsComponent,
}