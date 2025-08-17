function firstNonRepeatedChar(str) {
 // Write your code here
	let ans=str[0];
	for(let i=1; i<str.length; i++){
      if(!includes(str[i])){
		  ans+=str[i];
	  }
	}
	return ans[0];
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
