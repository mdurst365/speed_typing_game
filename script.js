const random_quote_API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')

function getRandomQuote() {
return fetch(random_quote_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
      const characterSpan = document.createElement('span')
      characterSpan.innerText = character
      quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
}

renderNewQuote()

