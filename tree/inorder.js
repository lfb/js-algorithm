/**
 * 中序遍历算法口诀
 * 1.对根节点的左子树进行中序遍历
 * 2.访问根节点
 * 3.对根节点的右子树进行中序遍历
 */

const bt = require('./bt')

/**
 * 中序遍历
 * 左-根-右
 * 
 * @param {*} root 
 * @returns 
 */
function inorder(root) {
    if (!root) return

    // 1.对根节点的左子树进行中序遍历
    inorder(root.left)

    // 2.访问根节点
    console.log(root.val)

    // 3.对根节点的右子树进行中序遍历
    inorder(root.right)
}

/*
       1
     /   \
    2     3
   / \   / \
  4  5  6   7
*/
// inorder(bt) // 4,2,5,1,6,3,7

function inorder(root) {
    if (!root) return

    const stack = []
    let p = root;

    while (stack.length || p) {
        while (p) {
            stack.push(p)
            // 1.对根节点的左子树进行中序遍历
            p = p.left
        }

        const node = stack.pop()
        // 2.访问根节点
        console.log(node.val)
        // 3.对根节点的右子树进行中序遍历
        p = node.right
    }
}

inorder(bt) // 4,2,5,1,6,3,7


