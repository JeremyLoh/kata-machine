// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way
//https://frontendmasters.com/courses/algorithms/two-crystal-balls-problem/
export default function two_crystal_balls(breaks: boolean[]): number {
    // jump sqrt n until the first crystal ball break, then backtrack to previous sqrt n and linear check
    // O(sqrt(n))
    let size: number = breaks.length
    let jump: number = Math.floor(Math.sqrt(size))
    let i: number = jump

    for (; i < size; i += jump) {
        if (breaks[i]) {
            // first crystal ball breaks
            break
        }
    }
    i -= jump
    // iterate from previous jump until second ball breaks, or we reach end of array
    let j = i
    for (; j < size; j++) {
        if (breaks[j]) {
            return j
        }
    }
    return -1

    // while (true) {
    //     if (i > size) {
    //         // Fix infinite loop, when all elements don't cause break
    //         return -1
    //     }
    //     if (breaks[i]) {
    //         // break one crystal ball
    //         break
    //     }
    //     i += jump
    // }
    // let previous = i - jump
    // while (true) {
    //     if (breaks[previous]) {
    //         break
    //     }
    //     previous++
    // }
    // return previous
}