# Explore the World Through PhotoLabs!

Welcome to PhotoLabs, a captivating React-based single-page client-side application that immerses users in a world of captivating visuals, allowing them to experience the beauty of photography across various contexts.

## Functional Requirements

- Dive into the application's data layer, seamlessly stored in a PostgreSQL database.
- Engage with the API server powered by a robust Node Express.js application.
- Foster communication between the client and API through HTTP, delivering and receiving data in the versatile JSON format.

## Behavioural Delights

- Embark on a visual journey as a user, exploring a curated selection of photos dynamically loaded from the homepage API.
- Navigate effortlessly through different photo topics, unlocking a diverse spectrum of visual storytelling.
- Immerse yourself in the sheer brilliance of photography by clicking on an image to reveal a larger, more detailed version along with other relevant and visually enthralling photos.
- Express your appreciation by 'liking' a photo seamlessly from any corner of the application where the image is displayed.
- Stay connected to your favorites with a heart icon elegantly adorned with a notification in the navigation bar.
- Traverse the application effortlessly using a well-organized navigation bar, offering distinct topics and a heart icon for your convenience.
- Experience continuity in data interaction as the client-side application skillfully orchestrates API requests, ensuring that your engagement with relevant data persists even after a session restarts.

## Technical Stack

- Crafted with the efficiency of Create React App (CRA), the client application delivers a smooth and responsive user experience.
- Empowered by Express, the API server application stands as a sturdy pillar supporting seamless communication between the client and the data layer.
- During development, two servers collaborated seamlessly:
  - The client-side Webpack development server.
  - The API server, diligently providing a stream of captivating photo data.



## Get Set, Ready, Go!

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
## Peek into the Visual Odyssey

### PhotoLabs Home Page
![PhotoLabs Landing Page](./photos/homepage.png)

### A Flicker of Favourites
Witness the magic as a user savors and stores their favorite photos globally, receiving delightful notification alerts in the navigation bar.
![PhotoLabs: User Can Favorite Photos Across App](./photos/homapge-liked.png)

### Dive into Detail with Modal View
Explore a larger image of a clicked photo in the modal view, dynamically reloading with new visuals as you click on related or similar pictures. Your favorite photos persistently stay stored across the application.
![PhotoLabs Modal Display](./photos/modal-liked.png)

### Discover More with Related Photos
The modal also unveils a collection of related and similar photos, enhancing your visual experience.
![PhotoLabs Modal Loads with Related Photos](./photos/similar.png)

### Tailored Photo Experience by Topic
Engage with a personalized experience by clicking on a specific topic from the navigation bar, revealing a curated list of photos. In the example below, photos against the 'Nature' topic grace the screen.
![PhotoLabs Fetch Photos by Topic](./photos/catagory.png)

## Thank You for Being a Part of the PhotoLabs Experience!

Experience the magic of photography in a whole new light. Explore, engage, and immerse yourself in the captivating world of PhotoLabs!

---

