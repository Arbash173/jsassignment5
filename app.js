// |||||||||||||||||||||||||||||||||||||||||||| ARRAYS & LOOP (Ch # 17 - 20) |||||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// var arr=[[1,2],[3,4],[5,6]]

// ***************************************** Question # 02 *****************************************

// var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(matrix[0] + "<br>" + matrix[1] + "<br>" + matrix[2]);

// ***************************************** Question # 03 *****************************************

// for(i=1;i<=10;i++){
//     document.write(i + "<br>");
// }

// ***************************************** Question # 04 *****************************************

// var table = +prompt("Enter a number to show its multiplication table: ")
// var count = +prompt("Enter length of multiplication table: ");
// document.write("Multiplication table of " + table + " Length " + count + "<br>");
// for(var i=1; i<=count; i++){
//     document.write(table + "x" + i + "=" + table*i + "<br>");
// }

// ***************************************** Question # 05 *****************************************

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br/>");
// } document.write("<br>")
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br/>");
// }

// ***************************************** Question # 06 *****************************************

// document.write("Counting: <br> <br>" )
// for(i=1; i<=15; i++){
//     document.write(i + ",")
// }
// document.write("<br> <br> Reverse Counting: <br> <br>" )
// for(i=10; i>=0; i--){
//     document.write(i + ",")
// }
// document.write("<br> <br> Even: <br> <br>" )
// for(i=0; i<=20; i++){
//     if(i%2 === 0){
//         document.write(i + ",");
//     }
// }
// document.write("<br> <br> Odd: <br> <br>" )
// for(i=0; i<=20; i++){
//     if(i%2 === 1){
//         document.write(i + ",");
//     }
// }
// document.write("<br> <br> Series: <br> <br>" )
// for(i=2; i<=20; i++){
//     if(i%2 === 0){
//         document.write(i + "k,");
//     }
// }

// ***************************************** Question # 07 *****************************************

// var a = ["cake","apple pie","cookie","chips","patties"];
// var user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// var flag = "No";
// for(var i=0; i<a.length; i++){
//     if(a[i] === user){
//         flag = "Yes";
//         break;
//     }
// }
// if(flag === "Yes"){
//     document.write(user + " is available at index " + i + " in our bakery")
// }else{
//     document.write("We are sorry." + user +" is not available in our bakery")
// }

// ***************************************** Question # 08 *****************************************

// var arr = [24,53,78,91,12];
// var max = 0;
// for(var i=0; i< arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }   
// }
// document.write("Array items: " + arr + "<br> The largest number is " + max)

// ***************************************** Question # 09 *****************************************

// var arr = [24,53,78,91,12];
// var min = 100;
// for(var i=0; i<arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i];
//     }   
// }
// document.write("Array items: " + arr + "<br> The smallest number is " + min)

// ***************************************** Question # 10 *****************************************

// for(i=1; i<=20; i++){
//     document.write(i*5 + ",")
// }