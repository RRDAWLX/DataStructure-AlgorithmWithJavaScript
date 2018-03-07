/**
 * 栈(Stack)
 * 后进先出
 */

// Array 实现
/*function Stack () {
    var arr = [];

    return {
        push: function(item){       // 入栈
            arr.push(item);
        },
        pop: function(){        // 出栈
            return arr.pop();
        },
        peek: function(){       // 查看栈顶元素
            return arr[arr.length-1];
        },
        isEmpty: function(){        // 判读栈是否为空
            return arr.length === 0;
        }
    };
}*/

// Object 实现
function Stack () {
    var stack = {},
        top = -1;

    return {
        push: function(item){       // 入栈
            stack[++top] = item;
        },
        pop: function(){        // 出栈
            if(top < 0){
                return undefined;
            }else{
                return stack[top--];
            }
        },
        peek: function(){       // 查看栈顶元素
            if(top < 0){
                return undefined;
            }else{
                return stack[top];
            }
        },
        isEmpty: function(){        // 判读栈是否为空
            return top < 0;
        }
    };
}


// test
var stack = new Stack();

console.dir(stack);

console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
console.log(stack.isEmpty());

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
