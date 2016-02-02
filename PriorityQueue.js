/**
 * 优先级队列(Priority Queue)
 * 先进先出
 */

// Array 实现
function PriQueue () {
    var arr = [];

    return {
        insert: function(item){
            arr.push(item);
            arr.sort();
        },
        remove: function(){
            return arr.shift();
        },
        peek: function(){
            return arr[0];
        },
        isEmpty: function(){
            return arr.length === 0;
        }
    };
}


var queue = new PriQueue();

queue.insert(3);
queue.insert(1);
queue.insert(2);

while(!queue.isEmpty()){
    console.log(queue.remove());
}
