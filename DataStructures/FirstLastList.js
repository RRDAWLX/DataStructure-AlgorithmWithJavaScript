/**
 * 双端链表(FirstLastList)
 */
 
/* Link 链表节点 */
function Link (data) {
	this.data = data;
	this.next = null;
}

Link.prototype.displayLink = function(){
	console.log(this.data);
};

/* FirstLastList 双端链表 */
function FirstLastList () {
	var first = null,		// 链表中的第一个链结点
		last = null,		// 链表中的最后一个链结点
		size = 0;
	
	return {
		insertFirst: function(data){		// 在表头插入一个结点
			var link = new Link(data);
			link.next = first;
			first = link;
			if(last === null){
				last = link;
			}
			size++;
		},
		insertLast: function(data){
			var link = new Link(data);
			if(last === null){
				first = last = link;
			}else{
				last.next = link;
				last = link;
			}
			size++;
		},
		deleteFirst: function(){		// 删除表头结点
			var link = null;
			
			if(size > 1){
				link = first;
				first = first.next;
				size--;
			}else if(size == 1){
				link = first;
				first = last = null;
				size--;
			}
			
			return link.data;
		},
		search: function(key){		// 根据指定值查找结点
			var current = first;
			
			while(current !== null){
				if(current.data === key){
					console.log('Find it!');
					return current.data;
				}
				current = current.next;
			}
			console.log('Can not find such a Link.');
			return null;
		},
		delete: function(key){		// 根据指定值删除结点
			var previous = null,
				current = first;
				
			while(current !== null){
				if(current.data === key){
					size--;
					
					console.log('Find and delete it!');
					if(current === first){
						first = current.next;
						return current.data;
					}else{
						previous.next = current.next;
						return current.data;
					}
					
					if(current === last){
						last = previous;
					}
				}

				previous = current;
				current = current.next;
			}
			console.log('Can not delete such a Link.');
			return null;
		},
		displayList: function(){		// 显示整个链表
			console.log('List(first --> last):')
			var current = first;
			while(current !== null){
				current.displayLink();
				current = current.next;
			}
		},
		size: function() {		// 链表长度
			return size;
		},
		isEmpty: function(){		// 判断链表是否为空
			return size === 0;
		}
	}
}


// 测试

var list = new FirstLastList();

list.insertLast(5);
list.insertLast(6);
list.insertLast(7);
list.displayList();

list.insertFirst(4);
list.displayList();

console.log(list.delete(6));
list.displayList();

console.log('Delete till list is empty:');
while(!list.isEmpty()){
	console.log(list.deleteFirst());
}
