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
    }arrayToBST(arr){
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i])
        }
    }
}
let bst=new BinarySearchTree()
let arr=[3,2,9,8,0,1]
bst.arrayToBST(arr)
console.log(`preorder`);
bst.inOrder(bst.root)
