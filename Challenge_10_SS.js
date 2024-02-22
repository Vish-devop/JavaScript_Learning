//11.a
const nums=[10,20,30];
console.log("Array values are ", nums);
nums[2]=99;
console.log("Array values are ", nums);

nums.forEach(printElement); //using forEach to print array values
function printElement(element)
{
    console.log(element);
}

//11.b
var arr=[1,20,22,24,5];
var arr1=['hi', 'hello', 'good'];
function getLastValue(){
    var lastIndex=arr.length-1;
    var lastIndex1=arr1.length-1;
    console.log("Last value of the 1st array is ", arr[lastIndex]);
    console.log("Last value of the 2nd array is ", arr1[lastIndex1]);
}
getLastValue();

//11.c
function arraySwap(arr){
    [arr[0], arr[4]]=[arr[4], arr[0]];
    [arr1[0], arr1[2]]=[arr1[2], arr1[0]];
    return arr;
    return arr1;
}
console.log(`Array values are ${arr}`);
console.log(`Array values are ${arr1}`);

//11.d
console.log("Printing even numbers from 0 to 10 using for loop");
for(var i=0;i<=10;i++)
{
console.log(i);
i++;
}

//11.e
console.log("Reverse from 5 to 0 using for loop"); 
for(var i=5;i>=0;i--)
{
    console.log(i);
}

//11.f
console.log("Printing even numbers from 0 to 10 using while loop");
var j=0;
while(j<=10)
{
    console.log(j);
    j=j+2;
}
console.log("Reverse from 5 to 0 using while loop");
var j=5;
while(j>=0)
{
    console.log(j);
    j--;
}

//11.g
var number=[1,2,3];
console.log("Increase by one in array");
for(var k=0;k<=2;k++)
{
    number[k]=number[k]+1;
}
console.log(number);

//11.h
console.log("Increase by one using function")
num1=[1,2,3];
num2=[-2,-1,0,99];
function addOne(num1,num2)
{
    for(var k=0;k<=2;k++)
    {num1[k]=num1[k]+1;}
    for(var k=0;k<=3;k++)
    {num2[k]=num2[k]+1;}
}
addOne(num1,num2);
console.log(num1, num2);

//11.i
console.log("11 h solution ");
function addNum(num1,num)
{
    for(let i=0; i<num1.length; i++)
    {num1[i]+=num}
    return num1;
}
console.log("Increasing by 2 ", addNum([1,2,3],2));
console.log("Increasing by 3 ", addNum([1,2,3],3));
console.log("Increasing by 2 ", addNum([-2,-1,0,99],2));


//11.j
console.log("11.j solution");

function addNum(array1,array2)
{
    if(array1.length==array2.length)
    {
        for(let i=0; i<array1.length; i++)
        {array1[i]+=array2[i];}      
        return array1;    
    }
    else
    console.log("Length of both arrays are not matching");
}

console.log(addNum([1,1,2],[1,1,3,]));
console.log(addNum([1,2,3],[4,5,6,]));

//11.k
console.log("Solution for 11.k");
function countPositive(nums)
{
let counter=0;
for(let i=0;i<nums.length;i++)
{
    if(nums[i]>0)
    {counter++;}
}
return counter;
}
console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

//11.l & 11.m
var tempMin=0, tempMax=0;
function minMax(nums)
{
    if(nums.length==0)
    {
        tempMin=null;
        tempMax=null;
    }
    else if(nums.length==1)
    {
        tempMin=nums[0];
        tempMax=nums[0];
    }
    else
    {
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]<tempMin)
            {
            tempMin=nums[i];
            }
            if(nums[i]>tempMax)
            {
            tempMax=nums[i];
            }
        }
    }

return tempMin;
return tempMax;
}
minMax([1,-3,5]);
console.log(tempMin, tempMax);
minMax([-2,3,-5,7,10]);
console.log(tempMin, tempMax);
minMax([]);
console.log(tempMin, tempMax);
minMax([45]);
console.log(tempMin, tempMax);

//11.n
function countWords(words)
{
    var temp=words[0];
    for(var i=0;i<=words.length;i++)
    {
        //for(var j=0;j<=words.length;j++)
        //{
            temp[i]=words[i];
            if(temp[i]!=words[i])
            {
                temp[i++]=words[i]
            }
            else
            {
                temp[i].count++;
            }
        //}
    }
}
var words=['apple','apple', 'grape', 'apple'];
countWords(words);
console.log(countObject);
