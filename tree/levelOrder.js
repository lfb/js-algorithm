/**
 * 层序遍历顺序就是广度优先遍历
 * 不过在遍历时候需要记录当前节点所处的层级
 * 方便将其添加到不同的数组中
 */

const bt = require("./bt")

/**
 * 
 * @param {*} root 
 * @returns 
 */
function levelOrder(root) {
    if (!root) return []

    const queue = [root]
    const res = []

    while (queue.length) {
        let len = queue.length
        res.push([])

        while (len--) {
            const node = queue.shift()
            res[res.length - 1].push(node.val)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    return res
}

console.log(levelOrder(bt)) // [ [ 1 ], [ 2, 3 ], [ 4, 5, 6, 7 ] ]