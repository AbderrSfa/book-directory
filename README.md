# 📚 Book Directory

## 🔌 Backend
The backend uses Node.JS and Express.JS to run a server on port 4040. The data is kept in a postgres database running in a docker container.

## 🖼 Frontend
The frontend was made using next.js and react, and styled with tailwindCSS.

## ⚙️ Usage
There is a Makefile in the root directory.
- Run `make` to create the postgres database and install all npm packages for the frontend and backend.
- Go to the api folder and run `npm run start` to start the backend.
- Then, in a different terminal, go to the src folder and run `npm run start` to start the next.js frontend.

You can access the app on localhost:3000

P.S: You need to have docker installed to run the postgres database. Also these books don't actually exist. It's just dummy data.

<p align='center'>
  <img alt="book-directory-gif" src="https://user-images.githubusercontent.com/58333462/196159026-34974e06-d4b9-4d15-83f5-ce94c89e9b47.gif">
</p>
<p align='center'>
  <img width="600" alt="book-directory" src="https://user-images.githubusercontent.com/58333462/196159013-b711ab5b-ba2b-40a8-8dce-6a544aa873cc.png">
</p>
