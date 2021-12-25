
/**
 * 广度优先遍历口诀
 * 1. 新建一个队列，把根节点入队
 * 2. 把队头出队并访问
 * 3. 把队头的孩子们挨个入队
 * 4. 重复 2,3 步骤，直到队列为空
 */

const bt = require("./bt")

const bfs = (root) => {
    // 1. 新建一个队列，把根节点入队
    const queue = [root]

    // 4. 重复 2,3 步骤，直到队列为空
    while (queue.length) {
        // 2. 把队头出队并访问
        const node = queue.shift()
        console.log(node.val)

        // 3. 把队头的孩子们挨个入队
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
}


bfs(bt) // 1,2,3,4,5,6,7