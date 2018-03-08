/**
 * 快速排序
 * 时间复杂度为 O(N*㏒N)
 * 在1个数组中进行操作
 * 递归
 * 以数组最右侧的元素未基准（pivot），从 left 和 right-1 两端遍历元素，小于基准的元素放在左数组片段中，大于等于基准的元素放在右数组片段中。
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
		rightPoiter = right,		// 第一次--自减后变为right-1
		temp;

	while(true){
		while(arr[++leftPoniter] < pivot);
		while(rightPoiter > 0 && arr[--rightPoiter] > pivot);

		if(leftPoniter < rightPoiter){
			temp = arr[leftPoniter];
			arr[leftPoniter] = arr[rightPoiter];
			arr[rightPoiter] = temp;
		}else{
			break;
		}
	}

	arr[right] = arr[leftPoniter];
	arr[leftPoniter] = pivot;
	return leftPoniter;
}


module.exports = quickSort;
