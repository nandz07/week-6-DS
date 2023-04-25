class Node{
    constructor(){
        this.children={}
        this.isWordEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let current=this.root
        for(let i=0;i<word.length;i++){
            let charToInsert=word[i]
            if(!(charToInsert in current.children)){
                current.children[charToInsert]=new Node()
            }
            current=current.children[charToInsert]
        }
        current.isWordEnd=true
    }
    contain(word){
        let current=this.root
        for(let i=0;i<word.length;i++){
            let charToFind=word[i]
            if(!(charToFind in current.children)){
                return false
            }
            current=current.children[charToFind]
        }
        return true
    }
}
let trie=new Trie()
console.log(trie);
trie.insert("n")
console.log(trie.root.children);