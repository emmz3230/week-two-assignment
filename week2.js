// Using console.log() print out the following statement:

var helpQuote = 'There is no exercise better for the heart than reaching down and lifting people up.';
 console .log(helpQuote);

//  Using console.log() print out the following quote by Mother Teresa:
 var motherTeresa = "Love is not patronizing and charity isn't about pity, it is about love.Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
 console.log(motherTeresa);

//  Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

 var equal = typeof("10")
 console.log(equal)

//  Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
var parseEqual = parseFloat("9.8")
console.log(parseEqual + 0.2)

// Check if 'on' is found in both python and jargon
var check = "python, jargon";
console.log(check.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
var jargon = "I hope this course is not full of jargon.";
console.log(jargon.includes("jargon"))

// Generate a random number between 0 and 100 inclusively.
var randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);

// Generate a random number between 50 and 100 inclusively.
var randomNo =Math.floor(Math.random()*  50 +50)
console.log(randomNo);

// Generate a random number between 0 and 255 inclusively.
var randomBet = Math.floor(Math.random()* 255)
console.log(randomBet)

// Access the 'JavaScript' string characters using a random number
var java = "javascript"
// let index= java[5];
console.log(java.indexOf("j"))

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

var escapeFig =  "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125"
console.log(escapeFig)

// Use substr to slice out the phrase because because because from the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
var subSlice = 'You cannot end a sentence with because because because is a conjunction'
var input = subSlice.slice(-17)
var words = subSlice.slice(0,-40)
console.log(input)
console.log(words)
console.log(words + input)

// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love 
// and some are still looking for their love.' Count the number of
// word love in this sentence

var love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(love.match(/love/gi))

// Use match() to count the number of all because in the 
// following sentence:'You cannot end a sentence with because
// because because is a conjunction'

var matchCount = 'You cannot end a sentence with because because because is a conjunction'
console.log(matchCount.match(/because/gi));

// Clean the following text and find the
// most frequent word (hint, use replace and regular expressions).

var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.match(/%/gi, /@/gi,/$/gi))
var newSentence = sentence.replace("%,", "")
var newerSentence = sentence.replace("@", "")
var newestSentence = sentence .replace("$", "")
// i dont know this one 
console.log(newSentence)
console.log(newerSentence)
console.log(newestSentence)

// Calculate the total annual income of the 
// person by extracting the numbers from 
// the following text. 'He earns 5000 
// euro from salary per month,
// 10000 euro annual bonus, 15000 euro online 
// courses per month.'
var earns = 5000 *12;
var YearlyBonus = 10000;
var coursePer = 15000 *12;
console.log(earns)
console.log(YearlyBonus)
console.log(coursePer)
console.log(earns + YearlyBonus +coursePer)

