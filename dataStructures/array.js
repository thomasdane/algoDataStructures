export class ArrayList{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(value) {
        if(!value) return;

        this.data[this.length] = value;
        this.length++;
    }

    pop() {
        const result = this.get(this.length -1)
        this.delete(this.length - 1);
        return result;
    }

    get(index) {
       return this.data[index]; 
    }

    delete(index) {
        if(index > this.length) return;

        for (let i = index; i < this.length; i++) 
        {
            this.data[i] = this.data[i+1];
        }

        this.data[this.length-1] = null;
        this.length--;
    }

    //[a,b,c,d]
    //collapse 1
    //first loop
    //i = 1, length = 4
    //whatever is at 1 becomes what is at 2
    //second last loop, whatever is at 2 becomes 3
    //last loop
    //whatever is at 3, becomes null
    //so final result is [a,c,d,null]
    //then we delete the end
}