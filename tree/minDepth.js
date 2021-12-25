/**
 * 求最小深度，考虑用广度优先遍历
 * 广度优先遍历整棵树，并记录每个节点的层级
 * 遇到叶子结点，停止遍历，返回节点的层级
 */

const bt = require("./bt")

function minDepth(root) {
    if (!root) return 0

    const queue = [[root, 1]]

    while (queue.length) {
        const [node, len] = queue.shift()

        if (!node.left && !node.right) {
            return len
        }

        if (node.left) {
            queue.push([node.left, len + 1])
        }

        if (node.right) {
            queue.push([node.right, len + 1])
        }
    }
}

console.log(minDepth(bt))