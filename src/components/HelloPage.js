import React from 'react';
import { link } from '@reach/router';

const HelloPage = props => {
    if( isNaN(props.id)) {
        return (
            <div>
                <h1> The word is: {props.id}</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>The number is: {props.id}</h1>
            </div>
    )}
}

export default HelloPage;