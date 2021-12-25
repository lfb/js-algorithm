/**
 * 深度优先遍历口诀
 * 1. 访问根节点的值
 * 2. 对根节点的孩子们进行深度优先遍历
 */

const bt = require('./bt')

const dfs = (root) => {
    if (!root) {
        return false
    }

    // 1. 访问根节点的值
    console.log(root.val)

    // 2. 对根节点的孩子们进行深度优先遍历
    if (root.left) {
        dfs(root.left)
    }
    if (root.right) {
        dfs(root.right)
    }
}

dfs(bt) // 1,2,4,5,3,6,7