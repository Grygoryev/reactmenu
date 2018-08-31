import React from 'react';

const Content = ({tabs}) => {
    const tabsObj = tabs.filter( tab => tab.isActive)

    const activeTab = tabsObj[0];

    return (
        <section className="content" key={activeTab.id}>
            <h2 className="content__title">{activeTab.name}</h2>
            <div className={"content__photo content__photo_" + activeTab.name }/>
            <p className="content__text">{activeTab.text}</p>
            <div className={"content__photo content__photo_small content__photo_" + activeTab.name }/>
        </section>
    )
} 

export default Content