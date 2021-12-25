const bt = require("./bt")

function maxDepth(root) {
    // 新建一个变量，记录最大深度
    // 深度优先遍历整棵树，并几率每个节点的层级，同时不断刷新最大深度这个变量
    // 遍历结束后返回最大深度这个变量

    var res = 0

    const dfs = (root, len) => {
        if (!root) return

        if (!root.left && !root.right) {
            res = Math.max(res, len)
        }

        if (root.left) {
            dfs(root.left, len + 1)
        }

        if (root.right) {
            dfs(root.right, len + 1)
        }

    }
    dfs(root, 1)

    return res
}

console.log(maxDepth(bt))