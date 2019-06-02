export default class MergeSort {
    public static sort(arr: any[]): void {
        let aux: any[] = [];
        MergeSort._sort(arr, aux, 0, arr.length - 1);
    }

    private static _sort(arr: any[], aux: any[], lo: number, hi: number): void {
        if (hi <= lo) return;
        let mid: number = lo + Math.floor((hi - lo) / 2);
        MergeSort._sort(arr, aux, lo, mid);
        MergeSort._sort(arr, aux, mid + 1, hi);
        MergeSort._merge(arr, aux, lo, mid, hi);
    }

    private static _merge(arr: any[], aux: any[], lo: number, mid: number, hi: number): void {
        for (let k: number = lo; k <= hi; k++) {
            aux[k] = arr[k];
        }

        let i: number = lo, j: number = mid + 1;
        for (let k: number = lo; k <= hi; k++) {
            if (i > mid) {
                arr[k] = aux[j];
                j++;
            } else if (j > hi) {
                arr[k] = aux[i];
                i++;
            } else if (aux[j] < aux[i]) {
                arr[k] = aux[j];
                j++;
            } else {
                arr[k] = aux[i];
                i++;
            }
        }
    }
}