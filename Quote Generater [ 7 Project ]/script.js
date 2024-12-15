const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author-name");
const newQuoteBtn = document.querySelector(".change-quote");

const api_url =("https://quotes-api-self.vercel.app/quote");

async function getQuote(url) {
    //perfect example of how api works..
    const response = await fetch(url);
    var data = await response.json();
      quoteElement.innerHTML =  data.quote;
      authorElement.innerHTML =  data.author;
}

function twitter(){
window.open(" https://twitter.com/intent/tweet?text=" + quoteElement.innerHTML + "......" + authorElement ,"Tweet Window","height=300,width=600")
}

