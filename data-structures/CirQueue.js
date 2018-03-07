/**
 * 循环队列(Circular Queue)
 * 先进先出
 */
 
// Array 实现
function CirQueue (s) {
	var maxSize = s || 5,
		arr = new Array(maxSize),
		front = 0,
		end = -1,
		size = 0;
		
	return {
		insert: function(item){			// 入列
			if(size < maxSize){
				if(end == maxSize -1){
					end = -1;
				}
				arr[++end] = item;
				size++;
			}else{
				console.log('Queue is full!');
			}
		},
		remove: function(){			// 出列
			if(size > 0){
				var temp = arr[front++];
				if(front == maxSize){
					front = 0;
				}
				size--;
				return temp;
			}
			console.log('Queue is empty!');
			return undefined;
		},
		peek: function(){		// 查看队头
			return arr[front];
		},
		isEmpty: function(){		// 队列是否为空
			return size === 0;
		},
		isFull: function(){			// 队列是否已满
			return size === maxSize;
		},
		size: function(){			// 队列长度
			return size;
		}
	};
}



var queue = new CirQueue(3);

console.log(queue.remove());

queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.insert(4);

while(!queue.isEmpty()){
	console.log(queue.remove());
}
