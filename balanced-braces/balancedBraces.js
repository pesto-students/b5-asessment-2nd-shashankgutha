
function balancedBraces(...args) {
  var output=true;
  var brackets=['[',']','(',')','{','}'];
  args.forEach(function(element){
    var rawelements=element.split("");
    var elements=[];
    rawelements.filter(function(e){
    	if(brackets.includes(e)){
        	elements.push(e);
        }
    });
    elements.forEach(function(char,i){
      if(i<(element.length/2)){
        var oppchar='';
        if(char==='{'){
			oppchar='}'
        }
        if(char==='('){
			oppchar=')'
        }
        if(char==='['){
			oppchar=']'
        }
        //console.log(elements[elements.length-(i+1)]+' '+i+' '+char);
        if(oppchar === elements[(i+1)]){
          console.log(char);
          elements.splice((i+1), 1);
      	}else if(oppchar === elements[elements.length-1]){
          console.log(char);
          elements.splice(elements.length-1, 1);
        }else{
          output=false;
        }
      }
      
    });
    
  });

  return output;
}

export {
  balancedBraces,
};
