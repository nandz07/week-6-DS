class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinerySearchTree{
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
        }
        else{
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
                this.insertNode(root.left,newNode)
            }else{
                root.right=newNode
            }
        }
    }
    search(root,value){
        if(!root){
            console.log(`value not found`);
            return false
        }else{
            if(root.value===value){
                return true
            }
            else if(root.value>value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
        
    }
    display(root){
        if(root){
                if(root.left || root.right){
                    console.log(root.value);
                }
            this.display(root.left)
            this.display(root.right)
        }
    }
}

let bst=new BinerySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.display(bst.root)


