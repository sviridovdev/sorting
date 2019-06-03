import React from 'react';

interface RadioProps {
    value: number;
    onchange: any;
    checked: boolean;
    label: string;
}

/**
 * Реализует компонент радиокнопки выбора алгоритма сортировки
 * @param props
 * @returns {any}
 * @constructor
 */
const RadioSortAlg: React.StatelessComponent<RadioProps> = (props) => {
    return (
        <label>
            <input type="radio" name="sortalg" value={props.value} onChange={props.onchange} checked={props.checked}/>
            {props.label}
        </label>
    );
};

export default RadioSortAlg;