import React from 'react';

const Content = ({tabs}) => {
    const tabsObj = tabs.filter( tab => {
       return tab.active
    })
    const tab = tabsObj[0];

    console.log(tab);

    return (
        <section className="content" key={tab.id}>
            <h2 className="content__title">{tab.name}</h2>
            <div className={"content__photo content__photo_" + tab.name }/>
            <p className="content__text">{tab.text}</p>
            <div className={"content__photo content__photo_small content__photo_" + tab.name }/>
        </section>
    )
} 

export default Content