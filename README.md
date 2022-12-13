# Atelier Retail Portal
Project Description

Atelier is a modern fashion e-commerce site front end with over 1 million products built with ReactJS and ExpressJS, following a business requirements document and an backend API provided by the project stakeholders. Working as a team of four engineers, the first phase of our development was becoming acclimated to utilizing project management and ticket management tools, including Git Workflow and Trello. For the consistency of the codebase, we implemented Airbnb Style Guide. We practiced agile methodology and held daily standup to keep track of each member's progress on the sub-components of the product. The site has a clean, minimal and modern design. With end users in mind, it also offers a cohesive user experience, high readability and accessibility. Our team challenged ourselves by learning new technologies, such as CSS framework SASS, within a day of the sprint planning session.

## Table Of Contents

### Technologies used
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

### Features

 #### Product Overview
  <p>Overview, whete the user can view current product images, select different styles, and expand the currently displayed image to full size.</p>

   <img width="800px" src="https://github.com/mphilip9/rfe2209-databases/blob/master/Overview.gif" />


 #### Related Items and Comparison
 <p> The Related Items and Comparison component consists of two sections. One is the related products carousel which displays a list of products related to the main product, the other is the outfit list carousel which displays a list collection of user selected outfits and is unique to each user </p> 
  <img src="https://media.giphy.com/media/DHqp3fXuOinODpXX3J/giphy.gif" width="800px" height="522px" />
   <p> The above gif demonstrates the ability to dynamically render all products related to the main product. When clicking on a specific related product, it will take the user to the overview section to view the details of the product. When clicking on the star icon, a comparsion table modal which compares features and characteristics of the current product with the main product will open. Discounted price will also be reflected if the product is on sale. </p>
   
   <p> The above gif demonstrates the ability to dynamically render the user's outfit list which contains all of the user selected items. To add the current viewing product to the outfit list, just click plus icon. And to remove an item from the list, click 'X' icon. Users cannot add the same item twice to the collection. When a duplicate selection happens, a modal will pop up showing the style has already been added. Discounted price will also be reflected if the product is on sale </p>
   

#### Questions and Answers 
<p> The Questions and Answers component allows asking and answering of questions for the product selected. This component extends the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product. Questions and answers are displayed in order of their user voted 'helpfulness' </p>

   ![A gif demonstrating functionality for Questions and Answers](https://github.com/phodye/RockPaperScissors/blob/main/FEC_QandA_1.gif?raw=true)
    
   <p> The above gif demonstrates the ability to view all of the questions related to the currently selected product. By clicking on the individual questions any associated answers will open in an accordion, with the ability to view more answers in groups of five until all of the available ansewrs are displayed. The first modal displayed is the user input for asking a question related to the currently selected product. Also demonstrated is the ability to answer any of the posted questions. A user can open an answer modal and fill out a form. The form incorporates client side validation before sending the information to the database.</p> 
   
   ![A gif demonstrating functionality for Questions and Answers](https://github.com/phodye/RockPaperScissors/blob/main/FEC_QandA_2.gif?raw=true)
   
   <p> The above gif demonstrates the ability to upload images to be displayed with answers. It also demonstartes the search feature which will filter questions according to user inputs.</p>

  
 #### Ratings and Reviews

<img width="800px" src="https://github.com/mphilip9/rfe2209-databases/blob/master/modal_reviews.gif" />

<img width="800px" src="https://github.com/mphilip9/rfe2209-databases/blob/master/reviews_use.gif" />


### Link to installation



## Installation
  * List all dependencies
  ```javascript
  npm install
  ```
  * Environmental Requirements

## Usage

```javascript
Here we will display each component. Perhaps a recording or gif for the visually inclined

```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
