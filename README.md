## Blog Panel Web Application (MERN stack)

The project has been based on MongoDB, Express, React & Node.js technologies. 

The application contains a set of tools that help to create, edit and delete blog articles. The whole project has been based on the following conception:

There are two types of users: authors and admins. Authors are given their own credentials data by the admins. Both types of users can create blog articles which are saved on the edit stage page. From this point they can edit their started articles further. When an article is ready, the author sends the article to "to get published" stage. At this point one of admins does validate the article and according to the result either sends the article to the blog or sends it back to the edit stage to the author to fix the mistakes.

## How to use the application

Follow this link:
- https://div-craft-cms.herokuapp.com/

If you are a guest and you want to log in, please use following data:
- login: jason.example
- password: example111

---

On the right side you'll find a menu panel, which contains following features:
- Przegląd (dashboard)

  This pannel allows you to review the present data about your blog activity. You can find informations such as: "Twoje wyniki (your summary)", "Aktualności (notifications)" and "Artykuły oczekujące na publikację (The articles ready to get published)".
  
- Moje artykuły (my articles)

  Here you can see the list of your articles that have been already published.
  
- Poczekalnia (waiting room)

  This site contains two bookmarks: the first one is named "Tryb edycji (edit stage)" and stands for articles in working mode. Theese are shown only for you, until you get them done and send them to the second bookmark. 
  
  The second one is named "Do publikacji (to get public)". This one stands for articles that are done but not published yet. At this stage an admin validates the article and either publishes it or sends it back to the edit stage.
  
- Panel kontaktowy (contact panel)

  This panel contains a communicator that allows articles authors and admins to communicate each others.
  
- Panel admina (admin panel)

  A pannel that is avalible only for the admins. It's been made to allow the admins to validate, edit and publish other users' articles.

On the header you can find anchors that send you to:
- Nowy artykuł (new article)

  A pannel that allows you to create new articles.

- Name and Surname (account settings)

  A pannel that allows to to edit user's data.
  
---

The application is in beta mode, so some of its features may not be working yet. Below you'll see a list of features that don't fully work at this moment:
- Przegląd (dashboard) - only to review the data, neighter of buttons are in use for now
- The "Podgląd (review)" and "Komentarze (comments)" buttons don't work on any page.
- Panel kontaktowy (contact panel) - the whole page is to be created
- Name and Surname (account settings) - the whole page is to be created
- Pomoc (help) - the whole page is to be created

I highly recommend you to focus on the New Article Page as this page has all its features fully ready to use.

I hope that visiting my app according to this description was enjoyable to you :)

## Technologies used in this project:

### Basic
- HTML5
- JavaScript (ES6)
- React.js

### Styling
- CSS3
- Flexbox / CSS Grid
- Styled Components
- RWD

### React libraries / ecosystem
- React Hooks
- React Router Dom
- Redux
- PropTypes
- Axios
- Formik
- js-cookie
- FontAwesome
- Passport.js

### Backend
- Node.js
- Express.js
- nodemon
- dotenv
- CORS
- NodeMailer

### Databases
- MongoDB / Mongoose

### Others
- REST API
- NPM
- ESlint
- Stylelint
- Prettier
- Webpack
- Babel
- Cloudinary
- Heroku

## Contact

If you want to reach me please send an email to following address: kontakt@divcraft.pl

Thank you for being here and see you next time :) 
