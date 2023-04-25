class MaxHeap{
    constructor(size){
        this.maxSize=size
        this.arr=new Array(size)
        this.heapSize=0
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    insertKey(value){
        if(this.heapSize===this.maxSize){
            console.log(`overflow`);
            return null
        }
        let i=this.heapSize
        this.arr[i]=value
        this.heapSize++
        while(i!=0 && this.arr[this.parent(i)]<this.arr[i]){
            [this.arr[this.parent(i)],this.arr[i]]=[this.arr[i],this.arr[this.parent(i)]]
            i=this.parent(i)
        }
        
    }
    lChild(i){
        return 2*i+1
    }
    rChild(i){
        return 2*i+2
    }
    maxHeapify(i){
        let l=this.lChild(i)
        let r=this.rChild(i)
        let large=i
        if(l<this.heapSize && this.arr[i]<this.arr[l]){
            large=l
        }
        if(r<this.heapSize && this.arr[i]<this.arr[r] && this.arr[r]>this.arr[l]){
            large=r
        }
        if(large!=i){
            [this.arr[i],this.arr[large]]=[this.arr[large],this.arr[i]]
            this.maxHeapify(large)
        }
    }
    removeMax(){
        if(this.heapSize<=0){
            console.log(`heap is empty`);
            return null
        }
        if(this.heapSize===1){
            console.log(this.arr[0]);
            return this.arr[0]
        }
        let root=this.arr[0]
        this.arr[0]=this.arr[this.heapSize-1]
        this.heapSize--
        this.maxHeapify(0)
        return root
    }
}
const HeapSort = arr => {
    let sorted = []
    let heap1 = new MaxHeap()
    for (let i = 0; i < arr.length; i++) {
        heap1.insertKey(arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
        sorted.push(heap1.removeMax())
    }
    return sorted

}

let arr = [2,0,9,3,4,5,6]

arr = HeapSort(arr)
console.log(arr);