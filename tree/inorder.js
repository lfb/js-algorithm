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


    /**
     * 入栈1：stack: [1]
     * 入栈1左节点2: stack: [1,2] p =2
     * 入栈2左节点4: stack: [1,2,4]
     *  4下无right节点，p = null,第二个while循环结束，
     * 出栈4：stack: [1,2], 
     * 出栈2，stack: [1], 2下存在right节点，p = 5
     * 入栈5，stack: [1,5], 5下无right节点,p=null
     * 出栈5, stack: [1]
     * 出栈1，stack: [], p = 3
     * 入栈3，stack: [3]
     * 入栈6，stack: [3,6]
     * 出栈6，stack: [3], 6下无节点
     * 出栈3，stack: [3], 3下有节点：p = 7
     * 出栈7
     */

    while (stack.length || p) {
        // 这个 while 的作用是把寻找最左叶子结点的过程中，途径的所有结点都记录下来 
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
