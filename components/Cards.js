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
fetch("https://lambda-times-api.herokuapp.com/articles")
.then(stuff=>{
    function cardMaker(stuff){
        const card=document.createElement("div")
        card.setAttribute("class","card")
        
        const headline=document.createElement("div")
        headline.setAttribute("class","headline")
    
        const author=document.createElement("div")
        author.setAttribute("class","author")
        
        const imgContainer=document.createElement("div")
        imgContainer.setAttribute("class","img-container")
    
        const img=document.createElement("img")
        img.setAttribute("src", "yuh")
    
        card.append(headline)
        card.append(author)
        author.append(imgContainer)
        imgContainer.append(img)
        console.log(card)
        return(card)   
    }
})


console.log("this is cardMaker",cardMaker())