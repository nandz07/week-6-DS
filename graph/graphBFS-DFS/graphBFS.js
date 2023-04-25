class Graph{
    constructor(){
        this.adjList=new Map()
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    display(){
        for(let v in this.adjList){
            console.log(`${v} => ${[...this.adjList[v]]}`);
        }
    }
    hasEdge(vertex1,vertex2){
        console.log(this.adjList[vertex1].has(vertex2) && 
        this.adjList[vertex2].has(vertex1));
        return(
            this.adjList[vertex1].has(vertex2) && 
            this.adjList[vertex2].has(vertex1)
        )
    }
    removeEdges(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjList[vertex]){
            return null
        }
        for(let adjVert of this.adjList[vertex]){
            this.removeEdges(vertex,adjVert)
        }
        delete this.adjList[vertex]
    }
    bfs(v){
        let queue=[]
        let visited=new Set()
        queue.push(v)
        while(queue.length){
            let curr=queue.shift()
            visited.add(curr)
            for(let adjVert of this.adjList[curr]){
                if(!visited.has(adjVert)){
                    queue.push(adjVert)
                    visited.add(adjVert)
                }
            }
        }
        let temp=''
        visited.forEach(element => {
            temp+=`${element} `
        });
        console.log(temp);
    }
    dfsHelper(v,visited){
        
    }
    dfs(v){
        let visited=new Set()
        visited.add(v)
        this.dfsHelper(v,visited)
    }
}

let g= new Graph()
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addEdge('a','b')
g.addEdge('b','c')
g.addEdge('b','a')
g.addEdge('c','b')
g.addEdge('d','z')
g.addEdge('d','a')

g.display()
g.bfs('z')