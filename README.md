# Phase-2 Project
## _NYT'S Book Search Replica_

## Features

- Showcase the quickness and flexibility of React's library. 
- Navigate the NYT's extensive book database in order to learn more about specific authors, titles, publishers, etc. 
- Replicate the experience of a forum where users can express their thoughts regarding their favorite books.
- Store and manipulate user data by mimicking the use of a backend server.
- Take advantage of Heroku and Netlify's features to deploy middle-size applications and stop relying on local executions.

This project focuses on highlighting React's incredible tools to create single page applications from scratch. In order to cruise through these features, [NYT's Best Seller API was selected.](https://developer.nytimes.com/docs/books-product/1/overview) The application created on this repository will replicate the experience of a forum. Users will be able to see the current week's best sellers, search for specific books, and discover what others are discussing about.

## Setup

### Requirements

**Deployed versions**
If the user chooses to run this application through the deployed versions, you can acces the [frontend here.](https://phase-2-project-front.herokuapp.com/). If you wish to take a look at the backend, here is a [link.](https://evening-temple-49691.herokuapp.com/books')


**Local environment**
The project relies on npm and node.js capabilities. If an user wishes to run this project locally, they need to [first install these components ](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if they have not already. Once this step is completed, execute the command **npm start** and the application should start working.

**IF FOR SOME REASON THE PACKAGE.JSON FILE DID NOT INCLUDE BOOTSTRAP, REACT-DOM, UUID, OR MOMENT LIBRARIES, FOLLOW THE STEPS ABOVE TO INSTALL THEM LOCALLY**

This application takes advantage of multiple resources from Bootstrap, so in order to function, the user must also install it in the selected folder. Follow these instructions: https://react-bootstrap.github.io/getting-started/introduction/

Furthermore, the application also relies on React's router **(version 5)** capabilities in order to make the navbar function. Execute this command in the selected folder:
```sh
 npm install react-router-dom@5
```

Additionally, the user needs to install [npm's JSON server](https://www.npmjs.com/package/json-server). It is recommended to run this server in a separate folder/repository. Once you have selected this place, run the following command:

```sh
json-server --watch db.json --port 3001
```
You must do a different port such as 3001 because otherwise the React application might clash with the server's setup. If everything works out correctly, you should see a message like this one: 
```  
\{^_^}/ hi!

  Loading db.json
  Oops, db.json doesn't seem to exist
  Creating db.json with some default data

  Done

  Resources
  http://localhost:3001/posts
  http://localhost:3001/comments
  http://localhost:3001/profile

  Home
  http://localhost:3001

  Type s + enter at any time to create a snapshot of the database
  Watching...
  ```
  Now, copy and paste http://localhost:3001/posts in a new tab in order to access the empty database. This is the location where the books' information will be stored.
  
Lastly, the application uses Moment.js and UUID's libraries in order to handle date formatting. Follow this [link to quickly install Moment.js library.](https://momentjs.com/) For UUID, [follow this one.](https://www.npmjs.com/package/uuidv4)


## Usage

**Home page**

This is the default page for the application. In here, you will be able to see the best selling books of the current week. The NYT's API updates this information every Sunday. If users see a book that they want to express their opinions for, they can do so by clicking the **thoughts button.** A popover will appear and ask them to submit some information. 

Firstly, they can select 3 out of 4 categories possible. These categories are intended to facilitate the expression of an user's sentiment towards a book. The options are the following: **Have Read, Will Read, Liked, and Disliked.** An user can only select 3 out 4 because **Liked** and **Disliked** have been designed to be mutually exclusive in this context. An argument could be made that **Have Read** and **Will Read** could also be mutually exclusive, but nothing actually stops any person from reading a book and then having the desire to do so again in the future. Moreover, the sentiments regarding the **Liked** and **Disliked** categories could also be intertwined, but this application has allowed the comment section of the popover to process these complex feelings. 

After making a selection on these categories, users are required to provide a name. This application is not intended to replicate a log-in system, so a regular name will suffice, instead of usernames or emails that can be popular in regular forums. **This is the only required field on the popover, everything else can be left blank. It will only accept letters.**

Lastly, users can express more complex feelings about a book in the comment section. Users can type anything on this section. However, it has a limit of 150 characters. **Once an opinion is submitted, the information will be posted to a JSON-server that mimicks a backend service.**

**NYT's Best Seller Search**

In this section, users can find specific best sellers based on a date, authors, titles, or publishers. In order to submit a date, the following format needs to be followed: **YYYY-MM-DD.** If users choose to look for authors, titles, or publishers, the application will work through partial matches. If a result has been found, a list will be shown. Users are encouraged to interact with any of these books in the same manner that they could have in the home section, which was explained in detail above.

**Discover**

The discover section is meant to be a place to read what other users are talking about. By default, it will show the latest 5 submissions. However, users are welcome to expand the advanced search and look for specific books. In this context, the discover section will not access NYT's API to give you information about a book, but rather to showcase the opinions of others regarding that book, much like in a forum or social media page. Users can also sort their findings alphabetically by title, author, or publisher. If they wish to get rid of these results, they can click the yellow button that will once again display the latest 5 entries.

#### Contributing
Suggestions are welcome in terms of the application's performance or presentation. For direct contact, use the following email address: daniel07escalona@gmail.com. 

#### Authors and Acknowledgment
**Author: Daniel Escalona. Student at [Flatiron School.](https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169833&utm_content=127574232664&utm_term=flatiron&uqaid=513799628630&CjwKCAiA4KaRBhBdEiwAZi1zzgCEBEdI6285I6gmLUyI5Pw_8YNLXh1P1oRIGf8t0fXozErvGMW5FRoCG1MQAvD_BwE&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzgCEBEdI6285I6gmLUyI5Pw_8YNLXh1P1oRIGf8t0fXozErvGMW5FRoCG1MQAvD_BwE)**
**This project would not have been possible without the following resources:**
https://developer.nytimes.com/docs/books-product/1/overview
https://react-bootstrap.github.io/
https://id.heroku.com/login
https://flatironschool.com/courses/coding-bootcamp/

## License

MIT