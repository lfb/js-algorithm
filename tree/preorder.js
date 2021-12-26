const bt = require('./bt')
/**
 * 先序遍历算法口诀
 * 1.访问 根 节点
 * 2.对根节点的 左 子树进行先序遍历
 * 3.对根节点的 右 子树进行先序遍历
 */

/**
 * 先序遍历
 * 根 - 左 - 右
 * @param {*} root 
 * @returns 
 */
function preorder(root) {
    if (!root) return
    // 1.访问 根 节点
    console.log(root.val)

    // 2.对根节点的 左 子树进行先序遍历
    preorder(root.left)

    // 3.对根节点的 右 子树进行先序遍历
    preorder(root.right)
}


/*
        1
     /   \
    2     3
   / \    / \
  4   5  6   7
*/
// preorder(bt) // 1,2,4,5,3,6,7

// 非递归版本
function preorder(root) {
    if (!root) return

    const stack = [root]

    /**
     * 出栈就是输出
     * 
     * 第一次入栈，stack: [1]
     * 出栈1，statck: []
     * 入栈右左 ，stack: [3,2]
     * 出栈2：stack: [3]
     * 入栈右左：stack[3,5,4]
     * 出栈4：stack: [3,5]
     * 出栈5: stack: [3]
     * 出栈3： stack: []
     * 入栈右左：stack: [7,6]
     * 出栈6: stack: [7]
     * 出栈7: stack: []
     */
    while (stack.length) {
        const node = stack.pop()
        // 1.访问 根 节点
        console.log(node.val)

        // 3.对根节点的 右 子树进行先序遍历
        if (node.right) {
            stack.push(node.right)
        }

        // 栈 - 后进先出
        // 2.对根节点的 左 子树进行先序遍历
        if (node.left) {
            stack.push(node.left)
        }
        // 循环一次得到的栈：stack: [right, left]
    }
}

preorder(bt) // 1,2,4,5,3,6,7
