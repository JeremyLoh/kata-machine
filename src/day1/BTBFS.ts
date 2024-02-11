// use a queue for BFS, or else if arraylist, it will be O(N^2) instead of O(N)
// removing from front of arraylist is O(N) operation, need to move elements after removal of first element
// https://frontendmasters.com/courses/algorithms/breadth-first-search/
// https://frontendmasters.com/courses/algorithms/implement-breadth-first-search/

import Queue from "@code/Queue"

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: Queue<BinaryNode<number>> = new Queue<BinaryNode<number>>()
    queue.enqueue(head)
    while (queue.length > 0) {
        const current: BinaryNode<number> | undefined = queue.deque()
        if (current?.value === needle) {
            return true
        }
        if (current?.left) {
            queue.enqueue(current.left)
        }
        if (current?.right) {
            queue.enqueue(current.right)
        }
    }
    return false
}