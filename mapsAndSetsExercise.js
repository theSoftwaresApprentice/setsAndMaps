// qq1  -  [1,2,3,4]
// qq2  -  [ref]
// qq3  -  {[1, 2, 3] => true, [1, 2, 3] => false}
// qq4  - 
const hasDuplicate = (array) => {
    const setConvert = new Set(array);
    return (array.length !== setConvert.length);
}
// qq5  - 
function isVowel(letter){
    return "aeiou".includes(letter);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase();
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap
}