import React from 'react';
import './App.less';
import MergeSort from './MergeSort';
import Button from './Button';
import InsertionSort from "./InsertionSort";
import RadioSortAlg from "./RadioSortAlg"

class App extends React.Component {
    private readonly CHOICE_MERGE_SORT = 0;
    private readonly CHOICE_INSERTION_SORT = 1;

    state = {
        source: [],
        result: [],
        sortType: this.CHOICE_MERGE_SORT
    };

    /**
     * Обработчик ввода в поле ввода массива
     * @param {React.ChangeEvent<HTMLTextAreaElement>} event
     */
    onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        let source: any[] = event.target.value
            ? event.target.value.trim().split(/\s+/)
            : [];

        if (this.isArrayNumeric(source)) {
            source = source.map(item => Number(item));
        }

        this.setState({source});
    };

    /**
     * Обработчик клика по кнопке сортировки
     * @param {React.MouseEvent<HTMLElement>} event
     */
    onSortButtonClick = (event: React.MouseEvent<HTMLElement>): void => {
        let result: any = this.state.source.slice(0);

        switch (this.state.sortType) {
            case this.CHOICE_MERGE_SORT:
                MergeSort.sort(result);
                break;
            case this.CHOICE_INSERTION_SORT:
                InsertionSort.sort(result);
                break;
            default:
                MergeSort.sort(result);
        }

        this.setState({result})
    };

    /**
     * Обработчик изменения состояния радиокнопок
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    onRadioChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.checked)
            this.setState({sortType: Number(event.target.value)});
    };

    /**
     * Обработчик кнопки генерации случайного массива
     * @param {React.MouseEvent<HTMLElement>} event
     */
    onGenerateButtonClick = (event: React.MouseEvent<HTMLElement>): void => {
        let source: number[] = [];
        // Длина массива выбирается случайно от 5 до 19
        const arrayLength: number = Math.floor(Math.random() * 15) + 5;

        for (let i: number = 0; i < arrayLength; i++) {
            // Массив заполняется случайными числами от 1 до 100
            source.push(Math.floor(Math.random() * 100) + 1);
        }

        this.setState({source});
    };

    /**
     * Проверяет, является ли массив числовым
     * @param arr - проверяемый массив
     * @returns {boolean}
     */
    isArrayNumeric(arr: any): boolean {
        for (let i: number = 0; i < arr.length; i++) {
            if (isNaN(Number(arr[i])))
                return false;
        }

        return true;
    }

    render() {
        const {source, result} = this.state;

        return (
            <div className="app">
                <div className="grid">
                    <div className="grid-row grid-row-1">
                        <div className="grid-col-main">
                            <textarea
                                placeholder="Enter a sequence of numbers or words separated with spaces"
                                className="app-input"
                                name="app-input"
                                onChange={this.onInputChange}
                            ></textarea>
                        </div>
                        <div className="grid-col-side">
                            <Button text="Generate randomly" clickHandler={this.onGenerateButtonClick}/>
                        </div>
                    </div>
                    <div className="grid-row grid-row-2">
                        <div className="grid-col-side">
                            <Button text="Sort" clickHandler={this.onSortButtonClick}/>

                            <div className="search-type-selection">
                                <RadioSortAlg
                                    value={this.CHOICE_MERGE_SORT}
                                    onchange={this.onRadioChange}
                                    checked={this.state.sortType == this.CHOICE_MERGE_SORT}
                                    label="Merge sort"
                                />

                                <RadioSortAlg
                                    value={this.CHOICE_INSERTION_SORT}
                                    onchange={this.onRadioChange}
                                    checked={this.state.sortType == this.CHOICE_INSERTION_SORT}
                                    label="Insertion sort"
                                />
                            </div>
                        </div>
                        <div className="grid-col-main">
                            <div>
                                <p>Source: </p>
                                {source.join(" ")}
                            </div>
                            <div>
                                <p>Result: </p>
                                {result.join(" ")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
