# 🐍 Snake Game – Full Stack Ruby Web App

A complete **Snake** game engineered in Ruby and deployed as a full-stack web application.  
Built with **Ruby OOP**, **Sinatra**, **Puma**, ERB templates, JavaScript, and CSS.  

🎮 **Play Live:** [https://snake-game1-w030.onrender.com](https://snake-game1-w030.onrender.com)

---

## 📌 Overview
This project transforms a classic terminal game into a **full-stack product**:
- Backend logic written in Ruby with clear object-oriented design.
- Frontend rendered with ERB → HTML, CSS, and JavaScript.
- Sinatra serves pages and assets.
- Puma handles HTTP requests in production.
- Hosted and continuously deployed with Render.

---

## 🧩 Architecture & Files
| File | Role |
|------|------|
| `app.rb` | Sinatra entry point; sets `views` & `public_folder`, defines routes |
| `game.rb` | Central controller; connects board, snake, and food; runs the loop |
| `board.rb` | Manages grid, rendering, wall collisions |
| `snake.rb` | Handles movement, direction, growth, and self-collision |
| `food.rb` | Spawns food at random positions and ensures no overlap |
| `run.rb` | Terminal entry point for testing the game loop |
| `test_snake.rb` | Playground for testing methods before running full app |
| `snake_web/index.erb` | HTML template rendered via ERB |
| `snake_web/style.css` | Styles for the game board and UI |
| `snake_web/script.js` | Handles keyboard input and draws to the canvas |

---

## 🧠 Game Logic
- Arrow keys trigger movement via a `DELTAS` hash mapping directions → x/y vectors.
- Snake segments stored in an array; new head added each tick.
- Tail removed unless snake is in growth mode.
- Collisions detected with walls, food, or itself.
- Food respawns randomly after being eaten.

---

## 🎨 Frontend
- **ERB** converts Ruby variables into HTML.
- **HTML + CSS** structure and style the board, score, and controls.
- **JavaScript** listens to key events, updates canvas, and syncs with Ruby state.

---

## 🛠️ Backend
- **Ruby OOP** defines core entities: `Game`, `Board`, `Snake`, `Food`.
- **Sinatra** acts as the kitchen 🥘 — serving HTML, JS, and CSS to users.
- **Puma** is the waiter 🦁 — efficiently handling incoming HTTP requests.

---

## ⚙️ Configuration
- `Gemfile` specifies dependencies: `sinatra`, `puma`, `rackup`, `rack`.
- `config.ru` (optional) or start command configures Puma to run Sinatra.
- Render build command: `bundle install`
- Start command: `bundle exec ruby app.rb -p $PORT`

---

## 🚀 Deployment (Render)
1. Push code to [GitHub Repo](https://github.com/ZsmithWork777/Snake_game).
2. Connect repository to [Render](https://render.com).
3. Add a **Web Service**, select Ruby, and set:
   - **Build Command:** `bundle install`
   - **Start Command:** `bundle exec ruby app.rb -p $PORT`
4. Deploy → app runs on [https://snake-game1-w030.onrender.com](https://snake-game1-w030.onrender.com).

---

## 🔗 Live Links
- ▶️ [Play the Game](https://snake-game1-w030.onrender.com)  
- 📂 [Source Code on GitHub](https://github.com/ZsmithWork777/Snake_game)  
- ☁️ [Render Dashboard](https://dashboard.render.com/)

---

## 📌 Highlights
- Full-stack implementation (Ruby → browser).
- Real-time rendering of a grid-based game.
- Clean object-oriented structure.
- Uses math, arrays, and collision detection for gameplay.
- Deployment pipeline from local dev → GitHub → Render.

---

## 🧑‍💻 Author
**Zachary Smith**  
Software Developer | IT Support Specialist  
> Built as part of my **#100DaysOfCode** challenge to learn full-stack development.

---

### Tech Stack
- **Language:** Ruby
- **Framework:** Sinatra
- **Server:** Puma
- **Templating:** ERB
- **Frontend:** HTML, CSS, JavaScript
- **Hosting:** Render
