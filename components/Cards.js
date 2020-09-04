// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(stuff => {
        
       //we want to break up stuff topics 
       // so we can iterate over each object under a topic
       // itererating through topic first, then each object
       stuff.data.articles.javascript.forEach(element => {
           cardMaker(element)
       });
       stuff.data.articles.bootstrap.forEach(element=>
        {
            cardMaker(element)
        })
        stuff.data.articles.node.forEach(element=>
        {
            cardMaker(element)
        })
        stuff.data.articles.jquery.forEach(element=>
        {
            cardMaker(element)
        })
        stuff.data.articles.technology.forEach(element=>
        {
            cardMaker(element)
        })
    });
const entry2 = document.querySelector(".cards-container")

const cardMaker=({authorName,authorPhoto,headline})=>{
    const card = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorBox = document.createElement('div')
    const authorPicBox = document.createElement('div')
    const authorPic = document.createElement('img')
    const authorByLine = document.createElement('span')
    
    entry2.append(card)
    card.append(headlineDiv)
    card.append(authorBox)
    authorBox.append(authorPicBox)
    authorPicBox.append(authorPic)
    authorBox.append(authorByLine)

    card.classList.add("card")
    headlineDiv.classList.add("headline")
    authorBox.classList.add("author")
    authorPicBox.classList.add("img-container")

    headlineDiv.textContent = headline
    authorPic.src = authorPhoto
    authorByLine.textContent = `By ${authorName}` 

    return card 
}


 // console.log(stuff.data)
        // // console.log(stuff.data.articles.javascript.length)
        // const jsArt = (stuff.data.articles.javascript)
        // const bsArt = (stuff.data.articles.bootstrap)
        // // console.log(jsArt)
        // const allData = (stuff.data.articles)
// allData.forEach(article => {
    //         const card = document.createElement("div")
    //         card.setAttribute("class", "card")

    //         const headlineDiv = document.createElement("div")
    //         headlineDiv.setAttribute("class", "headline")
    //         for (let i = 0; i < stuff.data.articles.javascript.length; i++){
    //        // headlineDiv.textContent = stuff.data.articles.javascript[i].headline
    //         console.log(headline)
    //         }
    //         const author = document.createElement("div")
    //         // author.setAttribute("class", "author")

    //         const imgContainer = document.createElement("div")
    //         imgContainer.setAttribute("class", "img-container")

    //         const img = document.createElement("img")
    //         for (let i = 0; i < stuff.data.articles.javascript.length; i++){
    //         const photos=stuff.data.articles.javascript[i].authorPhoto
    //         img.setAttribute("src", photos)
    //         console.log(stuff.data.articles.javascript[i].authorPhoto)


    //         }
            

    //         card.append(headline)
    //         card.append(author)
    //         author.append(imgContainer)
    //         imgContainer.append(img)

    //         const entry2 = document.querySelector(".cards-container")
    //         entry2.append(card)


    //         // console.log(cardMaker(javascript))
    //         // console.log(card)
    //         return (card)

    //     })
    // })