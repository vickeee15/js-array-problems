function primefactor(num){
    const arr=new Array();
    for(let i=2;i<=num;i++){
        if((num%i)==0){
            arr.push(i);
            num /= i;
        }
    } return arr;
}
console.log("Prime factors:"+primefactor(200));