
setTimeout(function() {
    document.getElementById("ShortTerm").style.display = "none";
    document.getElementById("WinnerList").style.display = "block";
    document.querySelector(".winnerDeclaration").style.display="block";
}, 3000);




// code to create three random numbers
// Your array of numbers
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13];

// Function to get three random numbers from an array
function getRandomNumbers(array, count) {
    var shuffledArray = array.slice(); // Create a copy of the original array
    var randomNumbers = [];

    // Shuffle the array using Fisher-Yates algorithm
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Get the first three elements as random numbers
    randomNumbers = shuffledArray.slice(0, count);

    return randomNumbers;
}

// Get three random numbers from the array
var threeRandomNumbers = getRandomNumbers(numberArray, 3);

// Print or use the three random numbers as needed
//console.log("Three Random Numbers:", threeRandomNumbers);



// Above is the code for creating three random numbers

var imageName1="./img"+threeRandomNumbers[0]+".jpg";
var imageName2="./img"+threeRandomNumbers[1]+".jpg";
var imageName3="./img"+threeRandomNumbers[2]+".jpg";

document.querySelector(".image1").setAttribute("src",imageName1);
document.querySelector(".image1").setAttribute("width","500px");
document.querySelector(".image1").setAttribute("height","100px");

document.querySelector(".image2").setAttribute("src",imageName2);
document.querySelector(".image2").setAttribute("width","500px");
document.querySelector(".image2").setAttribute("height","100px");

document.querySelector(".image3").setAttribute("src",imageName3);
document.querySelector(".image3").setAttribute("width","500px");
document.querySelector(".image3").setAttribute("height","100px");