import React from 'react';
import './App.less';
import MergeSort from './MergeSort';
import Button from './Button';

class App extends React.Component {
    state = {
        source: [],
        result: []
    };

    onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        let source: any[] = event.target.value
            ? event.target.value.trim().split(/\s+/)
            : [];

        if (this.isArrayNumeric(source)) {
            source = source.map(item => Number(item));
        }

        this.setState({source});
    };

    onSortButtonClick = (event: React.MouseEvent<HTMLElement>): void => {
        let result: any = this.state.source.slice(0);
        MergeSort.sort(result);
        this.setState({result})
    };

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
                    <div className="grid-row">
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
                    <div className="grid-row">
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
                        <div className="grid-col-side">
                            <Button text="Sort" clickHandler={this.onSortButtonClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
