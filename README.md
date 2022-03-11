# Worksheet
## Jason Hensley, Ethan Averbukh, Adel Hasan
   
## General Approach

Over the course of Friday evening, a weekend meeting, and Monday morning our team worked to create a plan for project completion. This plan consisted of the general idea of what we hoped to accomplish, time frames for specific completion of components, and matching our proposals with project requirements. After discussion and reviewing the workflow of the MERN lab earlier this week, we decided to model our approach after the workflow for that lab. 

[Backend Repository](https://github.com/Channel4NewsTeam-JAE/eCommerce-backend)

### Workflow for Backend
- Create a folder for project
- Create a repo on github
- Set up (npm init, dotenv, express, mongoose, cors)
- Configurations (.env, .gitignore, server.js, connections.js)
- server.js with app.use middleware
- /models folder with schema and model
- /controllers folder with controllers
- Test all routes with Postman
- Deploy back end

### Workflow for Frontend
- Create app with create-react-app
- Create a repo on github
- Set up (react-router)
- Create components
- Fetch data from api
- Deploy front end



## User Stories
1. Who are our users?
		1. Anyone of legal consuming age looking to buy clothes. 
		2. Mens, Womens, Children
2. What do they want?
	1. Casual, Sportswear, and accessories.
3. What will user be able to do?
	1. See clothing items for sale
	2. Browse by clothing type, by gender, by size
	3. Shopping List/ Wish list for users to save their products
	4. Rating system?
	5. Sort by Price, Relevancy, Newest, etc..
4. Apply to newsletter for promotional offers

## React Architecture
[React Architecture](https://imgur.com/a/TsNnwHO)

## Wireframes
[Wireframes](https://imgur.com/a/jP4JbAC)

## MVP/Post MVP

### MVP
#### Backend
- CRUD functionality throughout application
  - At least one example of each operation throughout app
  - CREATE: Create a product listing
  - READ: Viewing any product listing
  - UPDATE: Update a product listing
  - DELETE: Delete product listing
  - Admin page that allows you to update, create product listings
- Deployed on Heroku and Github Pages
- 2 Models
  - Once association
  
#### Frontend
- Built with React
- Leverage backend API
- React Router to handle multiple views
- Communicate RESTfully with back-end to Create, Read, Update, and Destroy resources (fetch or axios)
- Responsive Design
- Components
  - Create/Update/Delete Listing Page
  - Product Listing
  - Header
  - Main
    - Team Page
    - Home Page
    - Cart
      - Checkout
      - Wish List
  - Footer
  - Display card (for products, categories, team info)


### Post MVP
- User Authentication
- 5 Star review system/leave comments
- Review Sellers
- Contact Modal
  - Newsletter Feature
  - List of registered emails


## Time/Priority Matrix
[Time Priority Matrix](https://imgur.com/ivgNhJY)

## Estimated/Actual Time Table MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Schemas/Models | H | 2hr | 0.5hr |
| CRUD | H | 3.5hr | 3hr |
| Express API | H | 4hr | 2hr |
| Server.js | H | 0.5hr | 2hr |
| Seed Data | L | 0.5hr | 1hr |
| App.js | H | 1hr|  1hr |
| Main.js | H | 4hr|  5hr |
| Header | H | 0.5hr | 3hr|
| ProductPage.js | H | 2.5hrs|  8hr |
| Cart.js | H | 2.5hrs|  12hr |
| Team Page | H | 1.5hrs|  2hr |
| Footer | H | 0.5hrs|  1hr |
| Total | N/A | 23hrs|  40hr |


## Estimated/Actual Time Table Post MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| User Auth | L | 2hr | hr |
| User Pages | L | 3.5hr | hr |
| Review System | L | 3hr | hr |
| Contact Modal | L | 2.5hr | hr |
| Total | N/A | 12hrs|  hr |


## Technologies
- Backend
  - Mongoose, MongoDB, Express, Postman
- Frontend
  - React, React-Router, Axios, CORS, dotenv

## Problems and Hurdles

- Backend
  - Many more CRUD operations needed to satisfy all of the front end operations that we wanted to get done. Not enough time in just 4 days.
  
- Frontend
  - Search bar not working: Unable to get api call to trigger in current setup
  - Total Price not disappearing from cart when products disappear
  - Nav menu not disappearing on link click
  - Footer not fixed to the bottom of the page
  - Styling not implemented beyond simple layout
  - 
