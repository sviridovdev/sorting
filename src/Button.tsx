import React from 'react';
import './Button.less'

interface ButtonProps {
    clickHandler: any;
    text: string;
}

/**
 * Реализует компонент кнопки
 * @param props
 * @returns {any}
 * @constructor
 */
const Button: React.StatelessComponent<ButtonProps> = (props) => {
    return (
        <button onClick={props.clickHandler}>{props.text}</button>
    );
};

export default Button;