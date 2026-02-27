## Project Title: AD 311 Integrating Third-Party APIs
#### By: Amde Wubshet

### API Selection: 
Cats (https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t)

### Application Concept:
You know how sometimes you want to look at cat images (or dogs, or anything you find cute I guess) after a tough day? Well I wanted to use third party APIs to streamline that process so instead of: 
- Going to a search engine (Google, Bing, DuckDuckGo, etc.)
- Typing a keyword 
- Going to images 
- Looking at cat images 
You instead just locally host the application, and get sent a random cat image. The cat image in question is fetched from the third party API Cats. 

### Documentation and Testing: 
- How to Run: Open a terminal in an IDE, run the script using the command *node app.js*.
- Challenges: I didn’t want to return the whole array of the API (things like id, width, height). I’m still pretty new to this stuff so I didn’t know how to return the URL only. Eventually I found out how to target the object within the array, and then target the URL string. 

### Functionality Example:  
![alt text](https://github.com/amdemw206-coder/ThirdPartyAPI_AD311/blob/main/Screenshots/terminal.PNG)
- URL: https://cdn2.thecatapi.com/images/9kk.jpg 