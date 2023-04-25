class Node {
    constructor() {
        this.children = {}
        this.isWordEnd = false
    }
}
class Trie {
    constructor() {
        this.root = new Node()
    }
 
    insert(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            let charToInsert = word[i]
            if (!(charToInsert in current.children)) {
                current.children[charToInsert] = new Node()
            }
            current = current.children[charToInsert]
        }
        current.isWordEnd = true    
    }

    contains(word) {
        let current = this.root
          for (let i = 0; i < word.length; i++) {
            let charToFind = word[i]
            if (!(charToFind in current.children)) {
                return false
            }
            current = current.children[charToFind]
        }
        return current.isWordEnd
    }

    startsWithPrefix(prefix) {
        let current = this.root
        for (let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i]
            if (!(charToFind in current.children)) {
                return false
            }
            current = current.children[charToFind]
        }
        return true
        
    }
    display() {
        console.log(this.children);
    }


}
const trie = new Trie()
trie.insert('arun')
trie.insert('ramzi')
trie.insert('nandu')
console.log(trie.contains('ae'));
console.log(trie.startsWithPrefix('nan'));
        

