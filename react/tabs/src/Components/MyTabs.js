import React, { useState } from 'react'

const MyTabs = (props) => {

    const [content, setContent] = useState("");

    const showTab = (id) => {
        for (var i = 0; i < 3; i++) {
            document.getElementById(i).style.removeProperty("background-color");
        }
        document.getElementById(id).style.backgroundColor = 'blue';

    }

    return (
        <div>
            <div>
                {props.tabs.map((item, id) => <button id={id} style={{
                    display: 'inline-block',
                    width: '120px', height: '40px', border: '2px solid black', margin: '40px 0 5px 0'
                }} key={id}
                    onClick={(e) => {
                        showTab(id);
                        setContent(item.content)
                    }
                    }>{item.title}
                    <h1 onClick={showTab}></h1></button>)}
            </div>
            <div style={{ width: '400px', height: '200px', border: '2px solid black', margin: '0 auto',
             fontSize: '2em' }}>
                {content}
            </div>
        </div>
    )
}

export default MyTabs
