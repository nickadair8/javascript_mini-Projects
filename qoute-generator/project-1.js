//vars

let btn = document.querySelector('.new-qoute');
let quote = document.querySelector('.qoute');
let author = document.querySelector('.author')

const qoutes = [
    {   quote: "Success isn’t measured by money or power or social rank. Success is measured by your discipline and inner peace.",
        author: 'Mike Ditka'
    },

    {   quote: "If you can get through doing things that you hate to do, on the other side is greatness.",
        author: 'David Goggins'
    },

    {   quote: "Discipline is the refining fire by which talent becomes ability",
        author: 'Roy Smith'
    },

    {   quote: "I love you Bella",
        author: 'Nick Adair'
    },

]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * qoutes.length);

    quote.innerText = qoutes[random].quote;
    author.innerText = qoutes[random].author;

})