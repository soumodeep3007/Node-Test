function hello(){
    let a = [1, 2,3,4,5,6];
    let result = a.map((v)=>v*v).filter((v)=>v%2==0).reduce((v,d)=> v+d, 0);
    console.log(result);
}
hello();