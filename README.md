# Lead Details App

A React-based lead details viewer application featuring component decomposition, responsive light-themed UI, CSS Modules, and accordion-style email history.

## Features

- 📦 **Modular Components** – Clean separation of concerns
- 🎨 **CSS Modules** – Scoped styling for each component
- 💡 **Light Theme** – Pleasant and professional look
- 📱 **Responsive** – Optimized for desktop and mobile
- 🎬 **Animations** – Smooth fade-ins and slide-downs
- ⚛️ **React Features** – Functional components, hooks, props

## Folder Structure

```
lead-details-app/
├── public/
├── src/
│   ├── components/
│   │   ├── LeadDetails.js
│   │   ├── LeadInfoCard.js
│   │   ├── NurturingHistory.js
│   │   └── EmailAccordion.js
│   ├── data/
│   │   └── leadData.js
│   ├── styles/
│   │   └── LeadDetails.module.css
│   └── App.js
├── README.md
└── package.json
```

## How to Run

```bash
npm install
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Demo Data

Static mock data is located in `src/data/leadData.js`, based on the design screenshot.

## Future Improvements

- ✅ Unit Tests with Jest + RTL
- 🚀 GitHub-ready build
- 🌐 API integration for dynamic content

---

Made with ❤️ by Harshal
