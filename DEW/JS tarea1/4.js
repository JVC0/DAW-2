/*
Parte A
let result = 1, arg1, arg2, res1, res2;  
while (result > 0) { 
    arg1 = Math.random() - 0.5; 
    if (arg1 < 0){
        continue;
    }
    res1 = Math.sqrt(arg1); 
    arg2 = Math.random(); 
    if (arg1 +arg2 === 0){
        break;
    }
    res2 = res1/(arg1 + arg2); 
    result = res1 + res2; 
    console.log(result); 
}   
*/
/*
Parte B
let result = 1, arg1, arg2, res1, res2;  
while (result > 0) { 
    arg1 = Math.random() - 0.5; 
    if (arg1 > 0){
        res1 = Math.sqrt(arg1);
        arg2 = Math.random();
        if (arg1 +arg2 !== 0){
            res2 = res1/(arg1 + arg2); 
            result = res1 + res2; 
            console.log(result); 
        }
    }
}   
*/
/*
Parte C
let result, arg1, arg2, res1, res2;  
while (true) { 
    arg1 = Math.random() - 0.5; 
    if (arg1 < 0){
        continue;
    }
    res1 = Math.sqrt(arg1); 
    arg2 = Math.random(); 
    if (arg1 +arg2 === 0){
        break;
    }
    res2 = res1/(arg1 + arg2); 
    result = res1 + res2; 

    if(result <=0){
        break;
    }
    console.log(result); 
}   
*/