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
        var result = this.data[this.length - 1];
        this.data[this.length - 1] = null;
        this.length--;
        return result;
    }
}