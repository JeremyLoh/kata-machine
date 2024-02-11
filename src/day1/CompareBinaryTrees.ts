// Compare two binary trees to see if they are equal in both shape and structure
// https://frontendmasters.com/courses/algorithms/search-practice/
// DFS preserves shape, BFS does not preserve shape
// BFS might take tree with only left subtree as same as a balanced tree
// e.g. 3 -> 4 -> 5
//     3 - 4
//     |
//     5

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (!a && !b) {
        return true
    }
    if (!a || !b) {
        return false
    }
    if (a.value !== b.value) {
        return false
    }
    return compare(a.left, b.left) && compare(a.right, b.right)
}