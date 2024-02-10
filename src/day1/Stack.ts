// https://frontendmasters.com/courses/algorithms/stack/
type SNode<T> = {
    value: T
    prev?: SNode<T>
}

export default class Stack<T> {
    public length: number
    private head?: SNode<T>

    constructor() {
        this.length = 0
        this.head = undefined
    }

    push(item: T): void {
        const v: SNode<T> = {value: item, prev: undefined}
        this.length++
        if (this.head == undefined) {
            this.head = v
            return
        }
        v.prev = this.head
        this.head = v
    }

    pop(): T | undefined {
        if (this.head == undefined) {
            return undefined
        }
        this.length--
        const value: T = this.head.value
        const previous: SNode<T> | undefined = this.head.prev
        this.head.prev = undefined
        this.head = previous
        return value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}