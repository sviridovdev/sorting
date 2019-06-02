import React from 'react';
import './Button.less'


export default function Button(props: any): any {
    return (
        <button onClick={props.clickHandler}>{props.text}</button>
    );
}