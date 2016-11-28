function largestOfFour(arr) {
  var arrLen = arr.length;
  var result =[];
  for(var i=0; i<arrLen; i++){
    var po = arr[i];
    var count = 0;
    console.log("***********************************:");
    for(var j=0; j<po.length; j++){
      var lengleng = po[j];
      if(count < lengleng){
        count = lengleng;
        }
      }
      result.push(count);
      console.log(result);
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
