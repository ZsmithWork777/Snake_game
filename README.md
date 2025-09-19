# 🐍 Snake Game – Full-Stack Ruby Web App

A complete **Snake** game engineered in Ruby and deployed as a full-stack web application.  
Built with **Ruby OOP**, **Sinatra**, **Puma**, ERB templates, JavaScript, and CSS.

🎮 **Play Live:** [snake-game1-w030.onrender.com](https://snake-game1-w030.onrender.com)

---

## 📌 Overview
This project takes the classic terminal Snake game and turns it into a **production-ready web app**:

- Backend logic written in Ruby with clear object-oriented design.  
- Frontend built with ERB → HTML, CSS, and JavaScript.  
- Sinatra serves pages and assets.  
- Puma handles HTTP requests in production.  
- Deployed continuously via Render.

---

## 🧩 Architecture

| File | Purpose |
|------|---------|
| `app.rb` | Sinatra entry point (sets `views` & `public_folder`, defines routes) |
| `game.rb` | Connects board, snake, and food; runs the loop |
| `board.rb` | Manages grid, rendering, and wall collisions |
| `snake.rb` | Handles movement, direction, growth, and self-collision |
| `food.rb` | Spawns food at random positions |
| `run.rb` | CLI entry for testing the game loop |
| `test_snake.rb` | Scratch file for experimenting with methods |
| `snake_web/index.erb` | HTML template rendered by ERB |
| `snake_web/style.css` | Styles for the game board and UI |
| `snake_web/script.js` | Listens to keyboard input, draws canvas, fetches quotes |

---

## 🧠 Game Logic

- Arrow keys trigger movement via a `DELTAS` hash (direction → x/y vector).  
- Snake segments stored in an array; new head added each tick.  
- Tail removed unless in growth mode.  
- Collisions handled for walls, food, and self.  
- Food respawns at random coordinates after being eaten.

---

## 🎨 Frontend

- **ERB** templates render Ruby variables into HTML.  
- **HTML + CSS** style the board, score, controls, and API quotes.  
- **JavaScript** updates the canvas in real time and handles API calls.

---

## 🛠️ Backend

- Core entities (`Game`, `Board`, `Snake`, `Food`) modeled with **Ruby OOP**.  
- **Sinatra** serves routes and assets.  
- **Puma** runs the app in production.

---

## 🌐 API Integration

- Uses [ZenQuotes API](https://zenquotes.io) (or [Quotable](https://api.quotable.io/random)) for inspirational quotes.  
- Quote is fetched with `Net::HTTP` in Ruby, returned as JSON, and rendered beside the game.

---

## ⚙️ Setup & Deployment

### Local Development
```bash
git clone https://github.com/ZsmithWork777/Snake_game.git
cd Snake_game
bundle install
ruby app.rb
# visit http://localhost:4567
