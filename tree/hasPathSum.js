const bt = require("./bt")

/**
 * 在深度优先遍历的过程中，记录当前路径的节点值的和
 * 在叶子节点处，判断当前路径的节点值的和是否等于目标值
 * @param {*} root 
 * @returns 
 */
function hasPathSum(root, sum) {
    if (!root) return false
    let res = false

    const dfs = (root, v) => {
        if (!root) return

        if (!root.left && !root.right && v === sum) {
            res = true
        }

        if (root.left) {
            dfs(root.left, v + root.left.val)
        }
        if (root.right) {
            dfs(root.right, v + root.right.val)
        }
    }
    dfs(root, root.val)

    return res
}
console.log(hasPathSum(bt, 10))