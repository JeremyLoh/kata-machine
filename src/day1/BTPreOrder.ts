// Traversals, different ways in which you can visit the nodes of a tree
// pre-order, in-order, post-order
// visitNode, do something with node, then recurse
// pre-order -> do something with current node, then recurse left then recurse right
// in order -> recurse left, do something with node, recurse right
//      In binary search tree, in order traversal will print in order array
// post order -> recurse left, recurse right, do something with node
//      e.g. freeing memory, we need to free memory of child nodes before parents
// O(N)

// These traversals are Depth First Search (DFS), and utilizing recursion (stack)
// We can do it without recursion, just add to stack

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk_pre_order(head, [])
}

function walk_pre_order(current: BinaryNode<number> | null, path: number[]): number[] {
    if (!current) {
        return path
    }
    path.push(current.value)
    if (current.left) {
        walk_pre_order(current.left, path)
    }
    if (current.right) {
        walk_pre_order(current.right, path)
    }
    return path
}