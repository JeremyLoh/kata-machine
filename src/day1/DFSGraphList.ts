// Depth first search (DFS) on adjacency list
// https://frontendmasters.com/courses/algorithms/searching-an-adjacency-matrix/
// O(V + E) (check every vertex and every edge)

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const visited: boolean[] = new Array(graph.length).fill(false)
    const path: number[] = []
    walk(graph, source, needle, path, visited)
    return path.length > 0 ? path : null
}

function walk(graph: WeightedAdjacencyList, current: number, needle: number, path: number[],
              visited: boolean[]): boolean {
    if (current === needle) {
        path.push(needle)
        return true
    }
    if (visited[current]) {
        return false
    }
    // pre
    path.push(current)
    visited[current] = true
    // recurse
    const neighbours: GraphEdge[] = graph[current]
    for (let i = 0; i < neighbours.length; i++) {
        const edge: number = neighbours[i].to
        const foundNeedle: boolean = walk(graph, edge, needle, path, visited)
        if (foundNeedle) {
            return true
        }
    }
    // post - did not find needle with current, remove it from path
    path.pop()
    return false
}