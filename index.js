// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
var flag1=a instanceof Array;
var flag2=b instanceof Array;
console.log(flag1+","+flag2);

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0;i<a.length;i++){
	a[i]=a[i]*2;
}
console.log(a);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join());

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(param1,param2){
	if(param1<param2){
		return -1;
	}else if(param1>param2){
		return 1;
	}else{
		return 0;
	}
}
console.log((a.sort(compare)).reverse());

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function max(arr){
	var m={};
	var maxNum=0;
	var maxEle=null;
	for(var i=0;i<arr.length;i++){
		var atemp=arr[i];
		m[atemp]===undefined ? (m[atemp]=1) : (m[atemp]++);
		if(m[atemp]>maxNum){
			maxEle=atemp;
			maxNum=m[atemp];
			
		}
		
	}
	console.log("出现次数最多的是"+maxEle+",次数为"+maxNum);
}
max(a);
