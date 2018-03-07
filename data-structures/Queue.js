/**
 * 队列(Queue)
 * 先进先出
 */

// Array 实现
/*function Queue () {
    var arr = [];

    return {
        insert: function(item){     // 入列
            arr.push(item);
        },
        remove: function(){     // 出列
            return arr.shift();
        },
        peek: function(){       // 查看队头元素
            return arr[0];
        },
        isEmpty: function(){        // 队列是否为空
            return arr.length === 0;
        },
        size: function(){       // 队列中元素数目
            return arr.length;
        }
    };
}*/


// Object 实现
function Queue () {
    var queue = {},
        front = 0,
        end = -1,
        size = 0;

    return {
        insert: function(item){     // 入列
            queue[++end] = item;
            size++;
        },
        remove: function(){     // 出列
            if(size == 0){
                return undefined;
            }else{
                var frontItem = queue[front++];
                size--;
                return frontItem;
            }
        },
        peek: function(){       // 查看队头元素
            return queue[front];
        },
        isEmpty: function(){        // 队列是否为空
            return size === 0;
        },
        size: function(){       // 队列中元素数目
            return size;
        }
    };
}


// test
var queue = new Queue();

console.log('Is empty? ' + queue.isEmpty());
console.log('size: ' + queue.size());

queue.insert(1);
queue.insert(2);
console.log('size: ' + queue.size());

console.log('peek: ' + queue.peek());
console.log('remove: ' + queue.remove());
console.log('peek: ' + queue.peek());


console.log('Is empty? ' + queue.isEmpty());
console.log('size: ' + queue.size());