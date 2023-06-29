console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;

numbers.forEach(function (element, index, array){
    sum+= element;
});

console.log(sum);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "",
    author: "",
    pages: 0,
    readCount: 0,

    info(){
        let message = this.title + " by " + this.author + ", " + this.pages + " pages, read " + this.readCount + " times.";
        console.log(message);
    }
}

book.title = "The Hobbit";
book.pages = 295;
book.readCount = 2;
book.author = "J.R.R Tolkien";

book.info();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
let reversedWords = [];
let reverseSentence = "";

function reverseString(string){
    console.log(string);
    //Splitting sentence into array of words
    let revString = string.split(" ");

    //Going through array of words
    for(let i = 0; i < revString.length; i++){
        //Splitting each word into array of characters
        let word = revString[i].split("");
        //reversing list of characters
        word.reverse();

        //converting reversed characters back into word
        let revWord = word.join("");

        //adding reversed word to final array
        reversedWords.push(revWord);
    }

    //turning final array back into sentence but reversed
    reverseSentence = reversedWords.join(" ");
    console.log(reverseSentence);
}

reverseString(sentence);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parse(data){
    //splittings csvData into array of data
    let splitData = data.split("\n");

    //getting headers
    let headers = splitData[0].split(",");

    const finalArray = [];

    //going through array of data
    for(let i = 1; i < splitData.length; i++){
        //splitting data based from commas in new array
        const data = splitData[i].split(",");
        console.log(data);

        //creating objects for each data point
        const rowObj = {
        };

        //creating data within object with given header names
        rowObj[headers[0]] = data[0],
        rowObj[headers[1]] = data[1],
        //putting created objects into final array
        finalArray.push(rowObj);

    }



    console.log(finalArray);
}

parse(csvData);