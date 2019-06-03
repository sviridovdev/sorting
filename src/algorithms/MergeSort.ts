export default class MergeSort {
    /**
     * Сортировка массива алгоритмом merge sort
     * @param {any[]} arr - сортируемый массив
     */
    public static sort(arr: any[]): void {
        let aux: any[] = [];
        MergeSort._sort(arr, aux, 0, arr.length - 1);
    }

    /**
     * Реализация сортировки merge sort
     * @param {any[]} arr - сортируемый массив
     * @param {any[]} aux - вспомогательный массив
     * @param {number} lo - нижняя граница сортируемого участка
     * @param {number} hi - верхняя граница сортируемого участка
     * @private
     */
    private static _sort(arr: any[], aux: any[], lo: number, hi: number): void {
        if (hi <= lo) return;
        let mid: number = lo + Math.floor((hi - lo) / 2);
        MergeSort._sort(arr, aux, lo, mid);
        MergeSort._sort(arr, aux, mid + 1, hi);
        MergeSort._merge(arr, aux, lo, mid, hi);
    }

    /**
     * Объединяет два отсортированных подмассива
     * @param {any[]} arr - сортируемый массив
     * @param {any[]} aux - вспомогательный массив
     * @param {number} lo - начало участка массива, который нужно объединить
     * @param {number} mid - граница, разделяющая два подмассива, которые нужно объединить
     * @param {number} hi - конец участка массива, который надо объединить
     * @private
     */
    private static _merge(arr: any[], aux: any[], lo: number, mid: number, hi: number): void {
        for (let k: number = lo; k <= hi; k++) {
            aux[k] = arr[k];
        }

        let i: number = lo, j: number = mid + 1;
        for (let k: number = lo; k <= hi; k++) {
            if (this._less(mid, i)) {
                arr[k] = aux[j];
                j++;
            } else if (this._less(hi, j)) {
                arr[k] = aux[i];
                i++;
            } else if (this._less(aux[j], aux[i])) {
                arr[k] = aux[j];
                j++;
            } else {
                arr[k] = aux[i];
                i++;
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