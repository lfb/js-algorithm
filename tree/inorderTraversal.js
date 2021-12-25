const bt = require("./bt")

function inorderTraversal(root) {
    if (!root) return []

    let res = []
    const inorder = (root) => {
        if (!root) return

        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)

    return res
}


/**
 * 非递归版
 * @param {*} root 
 * @returns 
 */
function inorderTraversal(root) {
    if (!root) return []

    const res = []
    const stack = []

    let p = root
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        res.push(n.val)

        p = n.right
    }
    return res
}

console.log(inorderTraversal(bt))