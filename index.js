//// Integer Reversal

let reverseInt = (num) => {
    let reverse = num.toString().split('').reverse().join('');
    return Math.sign(num) * parseInt(reverse);

}

console.log(reverseInt(20301))

//// Max Character 

let maxChar = (word) => {
    let times = {};
    for(let i = 0; i < word.length; i++){
        if(times[word[i]]){
            times[word[i]] += 1;
        }else {
            times[word[i]] = 1
        }
    }
    return times
}

console.log(maxChar('abbyyhhhkk'));
