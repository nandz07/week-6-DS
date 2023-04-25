class MinHeap{
    constructor(size){
        this.arr=new Array(size)
        this.heapSize=0
        this.maxSize=size
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    lChild(i){
        return 2*i+1
    }
    rChild(i){
        return 2*i+2
    }
    minHeapify(i){
        let l=this.lChild(i)
        let r=this.rChild(i)
        let smalest=i
        if(l<this.heapSize && this.arr[i]>this.arr[l]){
            smalest=l
        }if(r<this.heapSize && this.arr[i]>this.arr[r] && this.arr[r]<this.arr[l]){
            smalest=r
        }
        if(smalest!=i){
            [this.arr[i],this.arr[smalest]]=[this.arr[smalest],this.arr[i]]
            this.minHeapify(smalest)
        }
    }
    removeMin(){
        if(this.heapSize<=0){
            return null
        }
        if(this.heapSize===1){
            this.heapSize--
            return this.arr[0]
        }
        let root=this.arr[0]
        this.arr[0]=this.arr[this.heapSize-1]
        this.heapSize--
        this.minHeapify(0)
        return root
    }
    insertKey(x){
        if(this.heapSize===this.maxSize){
            console.log(`overFlow`);
            return null
        }
        let i=this.heapSize;
        this.arr[i]=x
        this.heapSize++
        while(i!=0 && this.arr[this.parent(i)]>this.arr[i]){
            [this.arr[this.parent(i)],this.arr[i]]=[this.arr[i],this.arr[this.parent(i)]]
            i=this.parent(i)
        }
    }
    getMIn(){
        return this.arr[0]
    }
}
let heap=new MinHeap(50)
heap.insertKey(8)
heap.insertKey(10)
heap.insertKey(15)
heap.insertKey(20)
heap.insertKey(22)
heap.insertKey(18)
heap.insertKey(26)
heap.insertKey(30)
heap.insertKey(40)
heap.insertKey(45)
heap.insertKey(13)
console.log(heap);
heap.removeMin()
console.log(heap);