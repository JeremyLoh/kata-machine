// https://frontendmasters.com/courses/algorithms/binary-search-algorithm/
// Another Big O trick: if the input halves at each step, it is likely O(Log N) or O(N Log N) (if we are scanning also)
export default function bs_list(haystack: number[], needle: number): boolean {
    // [low, high) inclusive of low, exclude high (so no need to offset index by -1 for high)
    let low: number = 0
    let high: number = haystack.length
    while (low < high) {
        const middle: number = Math.floor(low + (high - low) / 2)
        const current: number = haystack[middle]
        if (current === needle) {
            return true
        } else if (current > needle) {
            high = middle
        } else {
            low = middle + 1
        }
    }
    return false
}