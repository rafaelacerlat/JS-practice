  const numbers = [ 1, 4, 5, 8, 9];

  // function getOddNumber (item) {
  //   if (item % 2 != 0) return item
  // }

  const getOddNumber = item => {
    if (item % 2 != 0) return item 
  }
  
  // push method
  const push = (array, item) => {
    return [
      ... array,
      item
    ]
  }
  
  // map method 
  const myMap = (transform, array) => {
    let mappedArr = [];
    for (let i = 0; i < array.length; i++){
      mappedArr = push(mappedArr, transform(array[i]));
    }
    return mappedArr;
  }
  
  const result = myMap(getOddNumber, numbers);


  //filter method
  const myFilter = (transform, array) => {
    let filteredArr = [];
    for (let i = 0; i < array.length; i++){
      if(transform(array[i])){
      filteredArr = push(filteredArr, array[i]);
      }
    }
    return filteredArr;
  }
  
  const result1 = myFilter(getOddNumber, numbers);


  // reduce method
  const getTotal = ( accumulator, item) => accumulator + item 
  
  const myReduce = (reducer, initialValue, array) => {
    let reducedArr = initialValue;
    for (let i = 0; i < array.length; i++){
      reducedArr = reducer(reducedArr, array[i]);
    }
    return reducedArr; 
  }
  
   const result2 = myReduce(getTotal,0,numbers);

  // split method
  const text = 'The month is November';
  
  const mySplit = ( str, delimiter) => {
    let myArr = [];
    let string = '';
    for (let i = 0; i < str.length; i++){
      let s = text[i];
       if(s === delimiter || s === '' && string){
           myArr = push(myArr,string);
           string = '';
        }
        if(s !== delimiter){
           string += s;
        }
     }
     if(string){
        myArr = push( myArr, string);
        string = '';
     }
     return myArr;
  }
    const result3 = mySplit(text, 'e');

  //join method
  const myJoin = (array, separator) => {
    let myStr = '';
    for (let i = 0; i < array.length; i++){
      i < length - 1 ? myStr += array[i] + separator: myStr += array[i]
      // if else in another form 
    }
    return myStr;
  }

  const result4 = myJoin(result3, ' ');
    

   console.log(result);
   console.log(result1);
   console.log(result2);
   console.log(result3);
   console.log(result4);
  