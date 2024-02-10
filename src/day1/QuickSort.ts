// https://frontendmasters.com/courses/algorithms/quicksort-algorithm/
// https://frontendmasters.com/courses/algorithms/implementing-quicksort/

export default function quick_sort(arr: number[]): void {
    // [low, high], inclusive of low and high
    quicksort(arr, 0, arr.length - 1)
}

function quicksort(arr: number[], low: number, high: number): void {
    // base case
    if (low >= high) {
        return
    }
    // [low, high], inclusive of low and high
    // partition array to have => [smaller or equal elements than pivot, pivot, larger elements than pivot]
    const pivotIdx: number = partition(arr, low, high)
    // quick sort left of pivot
    quicksort(arr, low, pivotIdx - 1)
    // quick sort right of pivot
    quicksort(arr, pivotIdx + 1, high)
}

function partition(arr: number[], low: number, high: number): number {
    // partition by comparing, set pivot to right position
    const pivotIdx: number = high;
    const pivot: number = arr[pivotIdx]
    let idx: number = low - 1
    for (let i = low; i < high; i++) {
        const current: number = arr[i]
        if (current <= pivot) {
            idx++
            swap(arr, i, idx)
        }
    }
    idx++
    // move pivot to correct position
    swap(arr, idx, pivotIdx)
    return idx
}

function swap(arr: number[], firstIdx: number, secondIdx: number): void {
    const temp: number = arr[firstIdx]
    arr[firstIdx] = arr[secondIdx]
    arr[secondIdx] = temp
}