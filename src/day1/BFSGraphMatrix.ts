// BFS on adjacency matrix
// https://frontendmasters.com/courses/algorithms/searching-an-adjacency-matrix/

import Queue from "@code/Queue"

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    // bfs, uses queue
    // return the path to traverse from source
    const visited: boolean[] = Array(graph.length).fill(false)
    visited[source] = true
    const path: number[] = []
    const previous: number[] = Array(graph.length).fill(-1)
    const queue: Queue<number> = new Queue<number>()
    queue.enqueue(source)

    while (queue.length > 0) {
        const current: number | undefined = queue.deque()
        if (current === undefined) {
            // cannot do "!current" as 0 will be true!
            break
        }
        if (current === needle) {
            break
        }
        const adjs: number[] = graph[current]
        // for each child, mark the previous value as the current node
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                // no link to other nodes
                continue
            }
            if (visited[i]) {
                continue
            }
            visited[i] = true
            previous[i] = current
            queue.enqueue(i)
        }
    }
    // construct path, walk backwards from end to source
    let x: number = needle
    while (previous[x] !== -1) {
        path.push(x)
        x = previous[x]
    }
    if (path.length > 0) {
        path.push(source)
        return path.reverse()
    }
    return null
}