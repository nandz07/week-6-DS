class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left){
                this.insertNode(root.left,newNode)
            }else{
                root.left=newNode
            }
        }else{
            if(root.right){
                this.insertNode(root.right,newNode)
            }else{
                root.right=newNode
            }
        }
    }
    search(root,value){
        if(!root){
            console.log(`value is not present`);
            return true
        }else{
            if(root.value===value){
                console.log(`value is present `);
                return false
            }else  if(value<root.value){
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
            }
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}
let bst=new BinarySearchTree()
bst.insert(5)
bst.insert(2)
bst.insert(7)
bst.insert(1)
bst.insert(3)
bst.insert(8)
bst.insert(6)
console.log(`preorder`);
bst.preOrder(bst.root)
console.log(`inorder`);
bst.inOrder(bst.root)
console.log(`postOrder`);
bst.postOrder(bst.root)