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
    
     //console.log(elements);
    
    for(var i=0;i<elements.length;i++){
 		  var ori=i;
 		  var j=1;
  		  var compare=i+j;
          var oppchar='';
      	  var char=elements[ori];
          if(char==='{'){
              oppchar='}';
          }
          if(char==='('){
              oppchar=')';
          }
          if(char==='['){
              oppchar=']';
          }
		   while(compare<=elements.length){
           if(oppchar === elements[compare]){
          		//console.log(char);
          		elements.splice(compare, 1);
             	output=true;
             	break;
      		}else{
              output=false;
            }
    		//console.log(i+' compared with '+compare+' '+output)
    		j+=2
    		compare=(i)+j;
  			}
			
      		if(!output){
              break;
            }    		
    }
  });

  return output;
}

export {
  balancedBraces,
};
