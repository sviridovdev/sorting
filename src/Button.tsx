import React from 'react';
import './Button.less'

/**
 * Реализует компонент кнопки
 * @param props
 * @returns {any}
 * @constructor
 */
export default function Button(props: any): any {
    return (
        <button onClick={props.clickHandler}>{props.text}</button>
    );
}