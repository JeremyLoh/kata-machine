// https://frontendmasters.com/courses/algorithms/heap/
// implemented as array, left child (2i + 1), right child (2i + 2), parent Floor((i - 1)/2)
// last element of heap -> just keep track of length of array

// https://frontendmasters.com/courses/algorithms/implementing-heap/
// O(N) for insert and delete. complete binary tree

export default class MinHeap {
    // used for insertion and deletion, to do swap and heapify up/down
    public length: number
    public data: number[]


    constructor() {
        this.length = 0
        this.data = []
    }

    insert(value: number): void {
        // insert at last element, then heapify up if needed to correct position
        this.data[this.length] = value
        this.heapifyUp(this.length)
        this.length++
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return undefined
        }
        if (this.length === 1) {
            const value: number = this.data[0]
            this.length = 0
            this.data = []
            return value
        }
        const value: number = this.data[0]
        this.length--
        // set last element as head
        this.data[0] = this.data[this.length]
        // heapify down the new head
        this.heapifyDown(0)
        return value
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    private leftChild(idx: number): number {
        return (idx * 2) + 1
    }

    private rightChild(idx: number): number {
        return (idx * 2) + 2
    }

    private heapifyUp(idx: number): void {
        // min heap, compare with parent, swap if smaller than parent
        let current: number = idx
        while (current > 0) {
            const parent: number = this.parent(current)
            if (this.data[parent] < this.data[current]) {
                break
            }
            this.swap(parent, current)
            current = parent
        }
    }

    private heapifyDown(idx: number): void {
        // nodes are filled from left to right, check if left child is out of array bounds
        if (idx >= this.length || this.leftChild(idx) >= this.length) {
            return
        }
        // check for the smaller child, and swap if needed
        const leftIdx: number = this.leftChild(idx)
        const rightIdx: number = this.rightChild(idx)
        const left: number = this.data[leftIdx]
        const right: number = this.data[rightIdx]
        if (left < right && this.data[idx] > left) {
            this.swap(leftIdx, idx)
            this.heapifyDown(leftIdx)
        } else if (right < left && this.data[idx] > right) {
            this.swap(rightIdx, idx)
            this.heapifyDown(rightIdx)
        }
    }

    private swap(first: number, second: number) {
        const temp: number = this.data[first]
        this.data[first] = this.data[second]
        this.data[second] = temp
    }
}