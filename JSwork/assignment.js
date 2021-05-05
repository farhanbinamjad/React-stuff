//1
function reverse(number){
    var result = 0
    var num = number
    while(num !=0){
        result = (result * 10) + (num % 10);
        num = parseInt(num/10);
        
    }
    return result
}
//2
function palindrome(str){
    var reg = /[\W_]/g;
    var str = str.toLowerCase().replace(reg,"");
    var str1 = str.split('').reverse().join('') ;
    return str==str1;

}
//3
function allCombo(str){
    if (str.length == 0) return '';
    liststr = new Array();
    for(i = 0; i < str.length; i++){
        for(j= i +1; j<str.length; j++){
            liststr.push(str.slice(i, j));
        }
    }
    return liststr
}

//4
function alphabetical(str){
    return str.split('').sort().join('');
}


//5
function UppCase(str){
    var arr = str.split(' ');
    var ar1 = new Array
    for(i = 0; i < arr.length; i++){
        ar1.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()));
        
    }
    return ar1.join(' ')
}

//6
function longest(str){
    var words = str.split(' ');
    var longest = '';
    for(var word of words){
        if(word.length > longest.length)
        longest = word;
    }
    return longest;
}
//7
function vowelCount(str){
    var count = 0
    var vowel = 'aeiou'
    for(i=0; i <str.length; i++){
        if(vowel.indexOf(str[i]) > -1)
        count++
    }
    return count
}
//8
function isPrime(num)
{
    if(num<2)
    return false;
    for(i=2; i<num; i++)
    {
        if(num%i==0){
            return false;
        }
        else{
            return true;
        }
    }
}
//9
function type(arg){
    return typeof(arg);
}

//10

//11
function lowgreat(arr){
    var max1 =  arr.indexOf(Math.max.apply(Math, arr));
    arr.splice(max1, 1);
    var min1 = arr.indexOf(Math.min.apply(Math,arr));
    arr.splice(min1, 1);
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)]
}
//12
function perfectno(num){
    var res = 0
    for(i=0;i<num; i++){
        if(num%i == 0)
        res += i
    }
    return res ==num
}

//13
function factors(num){
    var result = [];
    for( i=0; i<=num; i++){
        if(num%i==0)
        result.push(i)
    }
    return result
}
//14

//15
/*function bn(){
    var valbn = require("EnterValue of base and exponent");
    var b1 = valbn[0]; 
    var n1 = valbn[1];
    return Math.pow(b1,n1)
}*/

//16

//17
function eachocc(str){
    let occurences = {};
    let Ch;
    for(i=0;i<str.length;i++){
        ch= str[i]
        if(occurences[ch] == undefined){
            occurences[ch] = 1
        }
        else{
            occurences[ch] += 1
        }
    }
    return occurences
}
//18

//19
function largerthanarr(arr, num){
    arr.sort()
    const ind = arr.indexOf(num)
    return arr.slice(ind+1);
}

//20
function randomstr(num){
    var res = ''
    var charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(i = 0; i<num; i++){
        res += charac.charAt(Math.floor(Math.random()* num))
    }
    return res
}

//21

//22

function numocc(str, cha){
    var count = 0
    for(i=0;i<str.length;i++){
        if(str.charAt(i)==cha)
            count+= 1;
    }
    return count
}

//23

function firstuni(str){
    const allocc = eachocc(str)
    for (i=0;i<str.length;i++){
        const char = str[i];
        if(allocc[char]==1){
            return char;
        }
    }
}

//24

//25
function longStr(lst){
    var longest = '';
    for(var word of lst){
        if(word.length > longest.length)
        longest = word;
    }

    return longest; 
}
console.log(longStr(['asdasdsa', 'asdadad']))
//26

//27
//28
//29
function func_name() {
    return arguments.callee.name;
}

