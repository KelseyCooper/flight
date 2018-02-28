This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

<span style="display:block;text-align:center">!["The charts in action"](https://media.giphy.com/media/TGKmYe8T7NGQlAWK3N/giphy.gif)</span>

# Flight App

Flight App was made for my friends company Flight Underwear to keep track of their customers data and demographics. Trends and statistics are shown on the front page using ChartJS. Signed in users can add new customers to the database, as well as edit existing ones. 

## Main technologies used

#### Client

- reactJS
- react-redux
- react-chartjs-2
- react-slick
- react-bootstrap
- axios

#### Server

- express
- jsonwebtoken
- knex
- bcrypt

## Snap Shots

!["Color Chart"](https://github.com/Siic19/Flight-App/blob/master/screenshots/Screen%20Shot%202018-02-25%20at%204.56.25%20PM.png?raw=true)

!["Full data sheet"](https://github.com/Siic19/Flight-App/blob/master/screenshots/Screen%20Shot%202018-02-25%20at%204.56.46%20PM.png?raw=true)

!["Add new customer"](https://github.com/Siic19/Flight-App/blob/master/screenshots/Screen%20Shot%202018-02-25%20at%204.57.30%20PM.png?raw=true)

## Installation instructions

clone repo. 

#### DB
create new pg database named flight_back_end

#### Server
npm install
knex migrate:latest (you may need to install knex globably)
knex seed:run
start server usin:g npm run devstart

#### Client
npm install
start client using: npm start

Sign in using email: rexi@tips.com && password: Rexi