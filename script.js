const random_quote_API_URL = 'https://api.quotable.io/random'

function getRandomQuote() {
return fetch(random_quote_API_URL)
    .then(response =/ response.json())
    .then(data => data.content)
}

async function getNextQuote(){
    const quote = await getRandomQuote()
    console.log(quote)
}

getNextQuote()