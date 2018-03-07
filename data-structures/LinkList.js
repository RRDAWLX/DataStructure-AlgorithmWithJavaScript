/**
 * 单链表(LinkList)
 */

/* Link 链表节点 */
function Link (data) {
    this.data = data;
    this.next = null;
}

Link.prototype.displayLink = function(){
    console.log(this.data);
};

/* LinkList 单链表 */
function LinkList () {
    var first = null,       // 链表中的第一个链结点
        size = 0;

    return {
        isEmpty: function(){        // 判断链表是否为空
            return first === null;
        },
        insertFirst: function(data){        // 在表头插入一个结点
            var link = new Link(data);
            link.next = first;
            first = link;
            size++;
        },
        deleteFirst: function(){        // 删除表头结点
            if(first !== null){
                var link = first;
                first = first.next;
                size--;
                return link;
            }
            return null;
        },
        search: function(key){      // 根据指定值查找结点
            var current = first;

            while(current !== null){
                if(current.data === key){
                    console.log('Find it!');
                    return current;
                }
                current = current.next;
            }
            console.log('Can not find such a Link.');
            return null;
        },
        delete: function(key){      // 根据指定值删除结点
            var previous = null,
                current = first;

            while(current !== null){
                if(current.data === key){
                    size--;

                    console.log('Find and delete it!');
                    if(current === first){
                        first = current.next;
                        return current;
                    }else{
                        previous.next = current.next;
                        return current;
                    }
                }

                previous = current;
                current = current.next;
            }
            console.log('Can not delete such a Link.');
            return null;
        },
        displayList: function(){        // 显示整个链表
            console.log('List(first --> last):')
            var current = first;
            while(current !== null){
                current.displayLink();
                current = current.next;
            }
        },
        size: function(){
            return size;
        }
    }
}


// 测试
var list1 = new LinkList();

console.log('Empty? ' + list1.isEmpty());
console.log('-----------------------');

list1.insertFirst(1);
list1.insertFirst(2);
list1.insertFirst(3);
list1.displayList();
console.log('-----------------------');

list1.deleteFirst();
list1.displayList();
console.log('-----------------------');

console.log('search 3: %o', list1.search(3));
console.log('search 2: %o', list1.search(2));
console.log('-----------------------');

console.log('delete 3: %o', list1.delete(3));
console.log('delete 2: %o', list1.delete(2));
