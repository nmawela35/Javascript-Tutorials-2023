/* [1, 3, 4, -5, 6].filter(value, index) => {
  if (value >= 0){
    return true;
  }
  else{
    return false;
  }
} */
console.log([1, -3, 5, 6].filter((value, index) =>{

  return value >= 0;
}
));
