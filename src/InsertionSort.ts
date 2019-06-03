export default class InsertionSort {
    /**
     * Сортировка массива алгоритмом insertion sort
     * @param {any[]} arr - сортируемый массив
     */
    public static sort(arr: any[]): void {
        for (let i: number = 0; i < arr.length; i++) {
            for (let j: number = i; j > 0; j--) {
                if (this._less(arr[j], arr[j - 1])) {
                    let temp: any = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                } else {
                    break;
                }
            }
        }
    }

    /**
     * Проверяет, меньше ли первый аргумент второго
     * @param arg1
     * @param arg2
     * @returns {boolean}
     * @private
     */
    private static _less(arg1: any, arg2: any) {
        // Если аргументы являются строками, сравниваем, приводя к lower case
        if (typeof arg1 == 'string' && typeof arg2 == 'string')
            return arg1.toLowerCase() < arg2.toLowerCase();
        else
            return arg1 < arg2;
    }
}