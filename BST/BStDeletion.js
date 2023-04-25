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
    min(root){
        if(!root.left){
            console.log(root.value);
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return root
        }if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
}
let bst=new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.inOrder(bst.root)
bst.delete(5)
console.log(`deleted`);
bst.inOrder(bst.root)
