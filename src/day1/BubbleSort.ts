// https://frontendmasters.com/courses/algorithms/bubble-sort/

export default function bubble_sort(arr: number[]): void {
    // loop through the array, swap if current element is bigger than next element (if we are sorting in ascending order)
    // after one iteration of swapping, the largest element will be at the last position
    // we perform the iteration again until (last - 1) position
    // keep iterating until one element remains as:
    // an array of one element is always sorted
    // Total checks: N, N - 1, N - 2, ..., N - N + 1
    // = summation from 1 to N = (N/2)(N + 1) => O (N^2)
    // gauss => summation from 1 to 100 => 1 + 100, 2 + 99, 3 + 98, ..., 50 + 51
    const size: number = arr.length
    for (let i = size; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            const current: number = arr[j]
            const next: number = arr[j + 1]
            if (current > next) {
                // swap elements
                const temp: number = next
                arr[j + 1] = current
                arr[j] = temp
            }
        }
    }
}