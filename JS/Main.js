
// Define the array of objects .

let arrayOfQuotes=[

    {
        'quote' : "Be yourself; everyone else is already taken.",
        'author' : "Oscar Wilde"
    },
    {
        'quote' : "So many books, so little time.",
        'author' : "Frank Zappa"
    },
    {
        'quote' : "Be the change that you wish to see in the world.",
        'author' : "Mahatma Gandhi"
    },
    {
        'quote' : "In three words I can sum up everything I've learned about life is it goes on.",
        'author' : "Robert Frost"
    },
    {
        'quote' : "If you tell the truth, you don't have to remember anything.",
        'author' : "Mark Twain"
    },
    {
        'quote' : "A friend is someone who knows all about you and still loves you.",
        'author' : "Elbert Hubbard"
    },
    {
        'quote' : "Always forgive your enemies; nothing annoys them so much.",
        'author' : "Oscar Wilde"
    }, 
    {
        'quote' : "Without music, life would be a mistake.",
        'author' : "Friedrich Nietzsche"
    },
    {
        'quote' : "It is better to be hated for what you are than to be loved for what you are not.",
        'author' : "Andre Gide"
    },
    {
        'quote' : "It does not do to dwell on dreams and forget to live.",
        'author' : "J.K. Rowling"
    },
];

// ------------------------------------------------------------------------------------------------//

// Define the function to get the random quote from the array of objects .

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    document.getElementById("quoteText").innerHTML=`\"${arrayOfQuotes[randomIndex].quote}\"`;
    document.getElementById("authorName").innerHTML=`--${arrayOfQuotes[randomIndex].author}`;
};