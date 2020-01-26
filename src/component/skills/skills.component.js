import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GetPageContentAction } from '../../store/root.action';
import { apiEndpoints } from '../../config/api.endpoints';
import './skills.style.css';


function SkillsComponent(props) {

    const dispatch = useDispatch();
    const skillsContent = useSelector(state => state.skills);

    useEffect(() => {
        if (!skillsContent)
            dispatch(GetPageContentAction(apiEndpoints.skills));
    }, [dispatch, skillsContent])


    return !skillsContent ? null :

        <div className="skillsPageWrapper fadeIn">
            <h1 className="title">Skills</h1>
            <div className="skillsWrapper">
                {skillsContent.categories.map((category, categoryIndex) => {
                    return (
                        <div className="categoryWrapper" key={categoryIndex}>
                            <h2>{category.title}</h2>
                            {category.subTitle ? <span className="subTitle">{category.subTitle}</span> : null}
                            {category.groups.map((group, index) => {
                                return (
                                    <div className="groupWrapper" key={index}>
                                        {group.title
                                            ? <>
                                                <h3>{group.title}</h3><hr />
                                            </>
                                            : null
                                        }
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
        </div>

}



export {
    SkillsComponent,
}