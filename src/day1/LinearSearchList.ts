// To test: npx jest Linear
// Type a partial name of the file
export default function linear_search(haystack: number[], needle: number): boolean {
    // return boolean representing if needle was found
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            return true
        }
    }
    return false
}