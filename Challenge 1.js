// In this exercise, you're going to decompress a compressed string.
// Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:
// The input
// 3[abc]4[ab]c
// Would be output as
// abcabcabcababababc
// Other rules
// Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa
// One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab
// Characters allowed as input include digits, small English letters and brackets [ ].
// Digits are only to represent amount of repetitions.
// Letters are just letters.
// Brackets are only part of syntax of writing repeated substring.
// Input is always valid, so no need to check its validity.
// Learning objectives
// This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It’s also an opportunity to work on coding with better efficiency.
//97-122 a-z, 48-57 0-9, 91[,93 ]
main("a[]b",1,0);
function main(input, veces, index){
    var j = 0;
    if(veces == 0)
        for(j = index; j < input.length; j++)
            if(isClosedBracket(input[j]))
                return j;
    for (j = 0; j < veces; j++){
        var i = index;
        while(i < input.length){ 
            if(isLetter(input[i]))
                console.log(input[i]);
            else if(isNumber(input[i])){
                var cant = input[i++];
                while(isNumber(input[i])){
                    cant += input[i];
                    i++;
                }
                if(isOpenBracket(input[i])){
                    i++;
                    i = main(input, parseInt(cant), i);
                }
            }
            else if (isOpenBracket(input[i])){
                i = main(input, 0, ++i);
            }
            else if(isClosedBracket(input[i])){
                if(j == veces - 1)
                    return i;
                else 
                    i = Number.MAX_SAFE_INTEGER;
            }
            i++;
        }

    }
}

function isNumber(char){
    return (char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58);
}

function isLetter(char){
    return (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123);
}

function isOpenBracket(char){
    return (char.charCodeAt(0) == 91);
}

function isClosedBracket(char){
    return (char.charCodeAt(0) == 93);
}