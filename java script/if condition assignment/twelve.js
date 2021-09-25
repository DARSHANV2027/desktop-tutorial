var A = [2,4,3,5,1,7,6,9,8]
for (var i=1;i<A.length;i++){
    for (var j=0;j<i;j++){
       if (A[i]>A[j]){
          var x = A[i];
          A[i]=A[j];
          A[j]=x;
       }
    }
}
console.log(A)