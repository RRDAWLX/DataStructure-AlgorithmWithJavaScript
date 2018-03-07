/**
 * 双向链表(Dual Link List)
 */
 

/* Link 链表节点 */
function Link (data) {
	this.data = data;
	this.next = null;
}

Link.prototype.displayLink = function(){
	console.log(this.data);
};

/* DuLink 双向链节点 */
function DuLink (data) {
	var duLink = new Link(data);
	duLink.previous = null;
	return duLink;
}

/* DuLinkList 双向链表 */
function DuLinkList () {
	
}

