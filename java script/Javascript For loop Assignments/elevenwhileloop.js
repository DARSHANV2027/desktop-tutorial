let num=5466658
let rev=0
let rem
while(num!=0){
  rem=num%10
  rev=rev*10+rem 
  num=Math.floor(num/10)
}
console.log("reverse number="+rev)
