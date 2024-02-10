// https://frontendmasters.com/courses/algorithms/path-finding-base-case/
const dir = [
    [0, -1], // top
    [1, 0], // right
    [0, 1], // bottom
    [-1, 0] // left
]

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const visited: boolean[][] = []
    for (let y = 0; y < maze.length; y++) {
        visited.push(Array(maze[0].length).fill(false))
    }
    const path: Point[] = []
    walk(maze, wall, start, end, visited, path)
    return path
}

function walk(maze: string[], wall: string, current: Point, end: Point, visited: boolean[][], path: Point[]): boolean {
    // base cases
    // 1) out of maze bounds
    if (current.x < 0 || current.x >= maze[0].length || current.y < 0 || current.y >= maze.length) {
        return false
    }
    // 2) on a wall
    if (maze[current.y][current.x] === wall) {
        return false
    }
    // 3) on a previously visited cell
    if (visited[current.y][current.x]) {
        return false
    }
    // 4) found the end
    if (current.x === end.x && current.y === end.y) {
        // need to push the end cell
        path.push(end)
        return true
    }

    // recurse, 3 steps: pre, recurse, post
    // pre
    // add visited
    visited[current.y][current.x] = true
    path.push(current)
    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i]
        const next: Point = {x: current.x + x, y: current.y + y}
        const foundEnd: boolean = walk(maze, wall, next, end, visited, path)
        if (foundEnd) {
            return true
        }
    }
    // post
    // tried 4 directions, did not find the end, remove this current cell from the path
    path.pop()
    return false
}
