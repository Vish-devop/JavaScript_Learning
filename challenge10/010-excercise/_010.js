// 10a.
const nums=[10,20,30]
console.log(`Orignal Array: ${nums}`)
const index = nums.indexOf(30)
if (index!==-1)
{
    nums[index]=99
}
console.log(`New Array: Updated one -> ${nums}`)


// 10.b.
const array = [5,20,22,24,1];
let lastValue;
function getLastValue(array) {
  const lastIndex = array.length - 1; 
  lastValue = array[lastIndex];

  return lastValue;
}
lastValue = getLastValue(array); 
console.log("Last value:", lastValue); 

// 10.c. 

function arraySwap(array)
{
    const last=array.length-1
    const lastValue=array[last]

    const firstValue=array[0]

    array[0]=lastValue
    array[last]=firstValue
    
    return array;
}
console.log(arraySwap(array))
  
// 10.d.
let count=0
const myarray=[]
while(count<10)
{
    myarray.push(count)
    count+=2
}
console.log(myarray)

// 10.e. 
let counter=5
const newArray=[]
while (counter>=0)
{
    newArray.push(counter)
    counter--
}
console.log(newArray)

// 10.f. -> already implemented in 10.d. and 10.e.

// 10.g. + 10.h. 
function addOne(array){
    for (let i=0; i<array.length; i++)
    {
        array[i]+=1
    }
    return array
}
console.log(addOne([1,2,3]))
console.log(addOne([-2,-1,0,99]))

// 10.i. 
function addNum(array,num)
{
    for(let i=0; i<array.length; i++)
    {
        array[i]+=num
    }
    return array
}
console.log(addNum([1,2,3],2))
console.log(addNum([1,2,3],3))
console.log(addNum([-2,-1,0,99],2))

// 10.j.
function addArrays(array1,array2)
{
    if(array1.length!=array2.length)
    {
        throw new Error("Addition can't be possible")
        
    }
    else
    {
        for(let i=0; i<array1.length; i++)
        {
            array1[i]+=array2[i]
        }
        return array1
    }
}
console.log(addArrays([1,1,2],[1,1,3]))
console.log(addArrays([1,2,3],[4,5,6]))

// 10.k.
function countPositive(nums)
{
    let count=0
    for(let i=0; i<nums.length; i++)
    {
        if (nums[i]>0)
        {
            count++
        }
    }
    return count
}
console.log(countPositive([1,-3,5]))
console.log(countPositive([-2,3,-5,7,10]))

// 10.l. + 10.m.
function minMax(nums)
{
    let minEle=0
    let maxEle=0
    for (let i=0; i<nums.length; i++)
    {
        if(nums.length==1)
        {
            minEle=nums[i]
            maxEle=nums[i]
        }
        if(nums.length==0)
        {
            minEle='null'
            maxEle='null'
        }
        if(nums[i]<nums[i+1] && nums[i]<minEle){
            minEle=nums[i]
        }
        else {
            maxEle=nums[i]
        }
    }
    return `min:${minEle}, max:${maxEle}`
}
console.log(minMax([1,-3,5]))
console.log(minMax([-2,3,-5,7,10]))
console.log(minMax([]))
console.log(minMax([3]))

// 10.n.
function countWords(words)
{
    const result={}
    for(let i=0; i<words.length; i++)
    {
        const word=words[i]
    
        if(!result[word])
        {
            result[word]=1
        }
        else{
            result[word]++
        }
    }
    return result
}
console.log(countWords(['appple','grape','apple','apple']))

// 10.o, 10.p, 10.q
function searchElement(arrayString,element)
{
    for (let i=0; i<arrayString.length; i++)
    {
        if (element==arrayString[i]){
            return (i) // if it's present into the array.
            break
        }
    }
    return ('-1')  // if word is not present into the array. 
}
console.log(searchElement(['hello','world','ssearch','search','good'],'searchjjj'))
console.log(searchElement(['hello','world','ssearch','search','good'],'search'))

// 10.r.
function removeEgg(foods,wordToRemove){
    output_array=[]
    for(let i=0; i<foods.length; i++){
        if (wordToRemove!=foods[i]){
            output_array.push(foods[i])
        }   
    }
    return output_array
}
console.log(removeEgg(['egg','apple','egg','egg','ham'],'egg'))

//10.s. 
function removeEgg(foods,wordToRemove,maxRemoval){
    output_array=[]
    removingWordCounter=0
    for(let i=0; i<foods.length; i++){
        if (wordToRemove!=foods[i] || removingWordCounter>=maxRemoval ){
            output_array.push(foods[i])
        }   
        else{
            removingWordCounter++
        }
    }
    return output_array
}
console.log(removeEgg(['egg','apple','egg','egg','ham'],'egg',2))

// 10.t.
function reversingArray(food,wordToRemove,maxRemoval){
    outputArray=[]
    removingWordCounter=0
    food.reverse() //reversed the array.
    for(let i=0; i<food.length; i++){
        if(wordToRemove!==food[i] || removingWordCounter>=maxRemoval){
            outputArray.push(food[i])
        }
        else{
            removingWordCounter++
        }
    }
    return outputArray
}
console.log(reversingArray(['egg','apple','egg','egg','ham'],'egg',2))

//10.u. 
function removeWordFromReversedArray(food,wordToRemove,maxRemoval){
    //reversing the array using splice() -> removing the first element and adding it into the end of the reversed array.
    const reversedArray=[]
    while(food.length>0){
        const element=food.splice(0,1)[0]  //removing the first element
        reversedArray.push(element) //adding that to the end of the reversedArray
    }
    //logic for removing the word.
    const output_array=[]
    removingWordCount=0
    for(let i=0; i<reversedArray.length; i++){
        if(wordToRemove!==reversedArray[i] || removingWordCount>maxRemoval){
            output_array.push(reversedArray[i])
        }
        else{
            removingWordCount++
        }
    }
    return output_array
}
const food=['egg','apple','egg','egg','ham']
console.log(food)
console.log(removeWordFromReversedArray(food,'egg',2))

//10.v. -> Fizz Buzz Problem
function fizzBuzz(){
    for(let i=1; i<=20; i++){
        if(i%3==0){
            console.log("Fizz")
        }
        if(i%5==0){
            console.log("Buzz")
        }
        if(i%3==0 && i%5==0){
            console.log("FuzzBuzz")
        }
        if(i%3!=0 && i%5!=0){
            console.log(i)
        }
    }
}
console.log(fizzBuzz())

//10.w.
function removeDuplicate(array){
    const output_array=[]

    for (let i=0; i<array.length; i++){
        const currentWord=array[i]
        let isDuplicate=false

        //checking whether the element is present inside the output_array
        for(let j=0; j<i; j++){
            if(currentWord===output_array[j]){
                isDuplicate=true
                break
            }
        }
        if(!isDuplicate){
            output_array.push(currentWord)
        }
    }
    return output_array

}
console.log(removeDuplicate(['green','red','blue','red']))