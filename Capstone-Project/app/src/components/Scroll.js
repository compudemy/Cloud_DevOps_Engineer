import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px', margin: '2px'}} >
            {props.children}
        </div>
    );
};

export default Scroll;