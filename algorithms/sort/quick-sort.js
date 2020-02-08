/**
 * 快速排序
 * 时间复杂度为 O(N*㏒N)
 * 在1个数组中进行操作
 * 递归
 * 以数组最右侧的元素为基准（pivot），从 left 和 right-1 两端遍历元素，小于基准的元素放在左数组片段中，大于等于基准的元素放在右数组片段中。
 * 调换右数组片段两端的元素，即调换右数组片段最右侧的pivot元素与右数组片段最左侧的元素。
 * 分别对<左数组片段>与<右数组片段除pivot元素以为的部分>调用快速排序。
 */

function quickSort (arr, left, right) {
	if(arguments.length == 1){
		arguments.callee(arr, 0, arr.length - 1);
	}

	if(left < right){	// 数组片段元素要多于1个
		var partition = partitionIt(arr, left, right);
		quickSort(arr, left, partition - 1);
		quickSort(arr, partition + 1, right);
	}

	return arr;
}

function partitionIt(arr, left, right) {
	var pivot = arr[right],
		leftPoniter = left - 1,		// 第一次++自增后变为left
		rightPointer = right,		// 第一次--自减后变为right-1
		temp;

	// 实际上，在会退出循环时，leftPoniter 一定等于 rightPointer，
	// 且 arr[leftPoniter] 一定大于等于 pivot，
	// 当且仅当 leftPoniter = right 时 arr[leftPoniter] = pivot。
	while(true){
		while(leftPoniter < rightPointer && arr[++leftPoniter] <= pivot);
		while(rightPointer > leftPoniter && arr[--rightPointer] >= pivot);

		if(leftPoniter < rightPointer){
			temp = arr[leftPoniter];
			arr[leftPoniter] = arr[rightPointer];
			arr[rightPointer] = temp;
		}else{
			break;
		}
	}

	arr[right] = arr[leftPoniter];
	arr[leftPoniter] = pivot;
	return leftPoniter;
}


module.exports = quickSort;
