# Shortly - URL Shortening Landing Page

A responsive URL shortening landing page built as part of a **Frontend Mentor challenge**. The project combines a modern responsive interface with JavaScript functionality to shorten URLs, store previous results, and copy shortened links.

## 🎯 Frontend Mentor Challenge

This project was built as a challenge from **Frontend Mentor**, using their provided design as a reference to practice real-world front-end development skills.

The goal was to reproduce the design as closely as possible while implementing the required interactive functionality.

## ✨ Features

* 🔗 Shorten URLs using an external API
* 📋 Copy shortened URLs to the clipboard
* 💾 Store shortened links using Local Storage
* ✅ URL validation and error handling
* 📱 Responsive design for desktop and mobile devices
* 🍔 Mobile navigation menu
* 🔄 Display previously shortened links
* ⚡ Smooth scrolling to the URL shortener
* 🎨 Responsive layout based on the Frontend Mentor design

## 🛠️ Technologies Used

* **HTML5** – Semantic page structure
* **CSS3** – Responsive design, layouts, animations, and styling
* **JavaScript (ES6+)** – DOM manipulation, event handling, API requests, and Local Storage
* **REST API** – URL shortening
* **Local Storage** – Persisting shortened links in the browser

## 📂 Project Structure

```text
url-shorten/
│
├── css/
│   └── index.css
│
├── images/
│   ├── bg-boost-desktop.svg
│   ├── bg-boost-mobile.svg
│   ├── bg-shorten-desktop.svg
│   ├── bg-shorten-mobile.svg
│   ├── illustration-working.svg
│   ├── logo.svg
│   └── ...
│
├── scripts/
│   └── index.js
│
├── index.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser.

### Installation

Clone the repository:

```bash
git clone git@github.com:ahmadSmade/url-shorten.git
```

Navigate to the project directory:

```bash
cd url-shorten
```

Open `index.html` in your browser.

For development, you can use **VS Code** with the **Live Server** extension.

## 🔗 URL Shortening

The application sends the entered URL to an external shortening API and displays the generated shortened link.

Users can then:

1. Enter a URL.
2. Validate the URL.
3. Click **Shorten it!**
4. Receive a shortened URL.
5. Copy the shortened URL to the clipboard.
6. Access previously generated links stored in Local Storage.

## 🧠 What I Learned

This project helped me practice several important front-end development concepts:

* Working with the JavaScript DOM
* Handling form input and user events
* Validating URLs
* Making asynchronous API requests using `fetch()`
* Working with promises and `async/await`
* Using the Clipboard API
* Using Local Storage to persist data
* Creating responsive layouts with CSS
* Building mobile navigation
* Implementing CSS animations and transitions
* Organizing a front-end project
* Using Git and GitHub for version control

## 📸 Screenshots

### Desktop

*Add your desktop screenshot here.*

### Mobile

*Add your mobile screenshot here.*

## 🌐 Live Demo

**Coming soon**

## 🎨 Design

This project was created based on a **Frontend Mentor** design challenge.

Frontend Mentor provides professional-looking designs that developers can use to practice turning designs into responsive, functional websites.

## 🔮 Future Improvements

* [ ] Replace the current URL shortening API with a more reliable service
* [ ] Add loading states while shortening URLs
* [ ] Improve API error handling
* [ ] Add a way to delete saved links
* [ ] Improve accessibility
* [ ] Add additional URL management features
* [ ] Deploy the project with GitHub Pages

## 👨‍💻 Author

**Ahmad Alsmade**

Computer Science Graduate | Junior Software Developer

GitHub: [@ahmadSmade](https://github.com/ahmadSmade)

---

⭐ If you found this project useful, consider giving the repository a star!
