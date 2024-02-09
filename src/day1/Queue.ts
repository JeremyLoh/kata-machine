// https://frontendmasters.com/courses/algorithms/implementing-a-queue/

type Node<T> = {
    value: T
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }

    enqueue(item: T): void {
        // add to end of queue
        this.length++
        const value: Node<T> = {value: item, next: undefined}
        if (this.tail == undefined) {
            this.head = value
            this.tail = value
            return
        }
        this.tail.next = value
        this.tail = value
    }

    deque(): T | undefined {
        // remove from front of queue
        if (this.head == undefined) {
            return undefined
        }
        this.length--
        const value: T = this.head.value
        const currentHead: Node<T> | undefined = this.head
        this.head = this.head.next
        // free
        currentHead.next = undefined

        if (this.length === 0) {
            this.tail = undefined
        }
        return value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}