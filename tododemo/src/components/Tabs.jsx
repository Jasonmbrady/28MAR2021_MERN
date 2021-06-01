import React, {useState} from 'react';

const Tabs = props => {
    const [currTab, setCurrTab] = useState(0);
    const [tabs, setTabs] = useState([
        {label: "Tab 1", content: "Content for Tab 1" },
        {label: "Tab 2", content: "Content for Tab 2" },
        {label: "Tab 3", content: "Content for Tab 3" }

    ]);
    const clickHandler = e => {
        e.preventDefault();
        setCurrTab(e.target.name)
    }
    return(
        <div>
            {tabs.map((tab, idx) => {
                return(
                    <button key={idx} onClick={clickHandler} name={idx}>{tab.label}</button>
                )
            })}
            <div>
                {tabs[currTab].content}
            </div>
        </div>
    )
}

export default Tabs;