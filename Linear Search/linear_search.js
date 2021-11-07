function linearSearch(array, key){
    for(let i = 0; i < array.length; i++){
      if(array[i] === key) {
          return i;
      }
    }
    return -1;
  }
  
  //You can write this using ES6 arrow function

  const linearSearch = (array,key) =>{
    for(let i = 0; i < array.length; i++){
        if(array[i] === key) {
            return i;
        }
      }
      return -1;
  }