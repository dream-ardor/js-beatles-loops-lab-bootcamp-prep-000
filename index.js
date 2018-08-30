function iLoveTheBeatles(n){
  var newArr = [];
  
  do{
    newArr.push("I love the Beatles!");
    n++;
    console.log(n);
    // for(var i = n; i >= 0; i--){
    //     n--;
    //     newArr.push("I love the Beatles!");
    //   }
  }while(n<15);
  
  return newArr;
}

iLoveTheBeatles(55);
