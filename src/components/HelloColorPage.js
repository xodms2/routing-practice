import React from 'react';
import { link } from '@reach/router';

const HelloColorPage = props => {
    return (
        <div style={{ backgroundColor: props.bgColor, color: props.textColor}}>
            <h1>The Word is: {props.id}</h1>
        </div>
    )
}

export default HelloColorPage;