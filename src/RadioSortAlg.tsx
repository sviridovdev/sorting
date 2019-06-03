import React from 'react';

/**
 * Реализует компонент радиокнопки выбора алгоритма сортировки
 * @param props
 * @returns {any}
 * @constructor
 */
export default function RadioSortAlg(props: any): any {
    return (
        <label>
            <input type="radio" name="sortalg" value={props.value} onChange={props.onchange} checked={props.checked}/>
            {props.label}
        </label>
    );
}