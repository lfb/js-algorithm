/**
 * 后序遍历算法口诀
 * 1.对根节点的左子树进行后序遍历
 * 2.对根节点的右子树进行后序遍历
 * 3.访问根节点
 */
const bt = require('./bt')

/**
 * 后序遍历
 * 左-右-根
 * 
 * @param {*} root 
 * @returns 
 */
function postorder(root) {
    if (!root) return

    // 1.对根节点的左子树进行后序遍历
    postorder(root.left)

    // 2.对根节点的右子树进行后序遍历
    postorder(root.right)

    // 3.访问根节点
    console.log(root.val)
}


/*
       1
     /   \
    2     3
   / \   / \
  4  5  6   7
*/
// postorder(bt) // 4,5,2,6,7,3,1

// 非递归版本
function postorder(root) {
    if (!root) return

    const stack = [root]
    const outputStack = []

    /**
     * 入栈：stack: [1]
     * 出栈1，stack: []
     * 入栈1左右节点：stack: [2,3]
     * 出栈3：stack: [2]
     * 入栈3左右节点：stack: [2,6,7]
     * 出栈7: stack: [2,6]
     * 出栈6: stack: [2]
     * 出栈2: stack: []
     * 入栈2的左右节点：stack: [4,5]
     * 出栈5: stack: [4]
     * 出栈4: stack: []
     * 
     * 出栈即是 outputStack 入栈
     * 最后 outputStack 分别出栈输出
     */

    while (stack.length) {
        const node = stack.pop()
        outputStack.push(node)

        // 1.对根节点的左子树进行后序遍历
        if (node.left) {
            stack.push(node.left)
        }
        // 2.对根节点的右子树进行后序遍历
        if (node.right) {
            stack.push(node.right)
        }
    }

    while (outputStack.length) {
        // 3.访问根节点
        const node = outputStack.pop()
        console.log(node.val)
    }
}

postorder(bt) // 4,5,2,6,7,3,1
