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
function postindex(root) {
    if (!root) return

    const stack = [root]
    const outputStack = []

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
