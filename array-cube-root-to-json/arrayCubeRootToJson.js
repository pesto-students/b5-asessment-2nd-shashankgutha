const arrayCubeRootToJson = arr => {
  var output={};
  arr.forEach(function(element){
    output[`'${element}'`]=Math.cbrt(element);
  });
  return output
  };

export { arrayCubeRootToJson };
