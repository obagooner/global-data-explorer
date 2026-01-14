Global Data Explorer 🌍

Interactive Country Data Exploration Web App

A modern, performant, and accessible frontend application that allows users to explore global country data through real-time search and region-based filtering. This project emphasizes clean UX, efficient DOM updates, API integration, and production-ready frontend engineering practices.

🔗 Live Demo
https://obagooner.github.io/global-data-explorer/


📌 Project Overview

Global Data Explorer was built to demonstrate strong frontend fundamentals without relying on frameworks. The goal was to design a responsive, user-friendly interface that consumes a public API, handles asynchronous data states gracefully, and provides meaningful feedback to users.

This project reflects how I approach real-world frontend problems:
clarity, performance, accessibility, and maintainability.


🎯 Problem Statement

Most beginner-level data dashboards:

* Block the UI while loading

* Provide no feedback during API delays

* Handle search and filtering inefficiently

* Lack accessibility considerations

* Break when APIs fail

This project solves those issues by:

* Implementing skeleton loading

* Separating data logic from UI rendering

* Handling errors gracefully

* Designing for both usability and performance


🧩 Core Features


1️⃣ Real-Time Search (Client-Side Filtering)

Users can search for countries instantly by name.
Filtering happens entirely client-side after the initial API fetch.

Why this matters:

* Avoids unnecessary API calls

* Improves responsiveness

* Demonstrates understanding of state management

Implementation highlights:

* Cached dataset stored in memory

* Case-insensitive matching

* Combined with region filtering



2️⃣ Region-Based Filtering

Users can filter countries by geographic region (Africa, Europe, Americas, etc.).

Technical decisions:

* Filter logic is composable with search

* No duplicated rendering logic

* Uses a single applyFilters() pipeline

This reflects scalable filtering logic that can easily be extended.



3️⃣ Skeleton Loading (Perceived Performance)

Instead of showing a blank screen while data loads, the UI displays animated skeleton cards.

Why this matters:

* Shows awareness of perceived performance

* Demonstrates UX maturity beyond “loading spinners”

* Commonly used in production applications

Skeletons are removed automatically once real data is available.



4️⃣ Efficient DOM Rendering

Country cards are rendered using a DocumentFragment before being injected into the DOM.

Why this matters:

* Reduces layout thrashing

* Improves rendering performance with large datasets

* Demonstrates optimization awareness



5️⃣ API Error Handling

If the REST Countries API fails:

* The UI does not break

* Users see a friendly status message

* Errors are logged for debugging

This mirrors real-world resilience expectations.



6️⃣ Accessibility Considerations

* Semantic HTML elements (article, img, h3)

* Descriptive alt text for flags

* Readable contrast and spacing

* Keyboard-friendly inputs

Accessibility was treated as a default, not an afterthought.



🛠 Tech Stack

* HTML5 — semantic structure

* CSS3 — custom properties, responsive layout, animations

* Vanilla JavaScript (ES6+) — async/await, DOM APIs

* REST Countries API — external data source

* GitHub Pages — deployment

No frameworks were used intentionally to demonstrate core competency.



🧠 Architectural Notes

* Single API fetch on page load

* Cached data stored in memory

* UI rendering isolated from data fetching

* Stateless rendering functions

* Clear separation of concerns

This structure allows easy extension (sorting, pagination, charts).


## 📸 Screenshots

### Overview
![Overview](https://github.com/obagooner/global-data-explorer/blob/main/Assets/overview.png?raw=true)

### Search Functionality
![Search](https://github.com/obagooner/global-data-explorer/blob/main/Assets/search.png?raw=true)

### Region Filtering
![Filter](https://github.com/obagooner/global-data-explorer/blob/main/Assets/filter.png?raw=true)



🚀 Local Setup

No build tools or installation required.

git clone https://github.com/obagooner/global-data-explorer.git
cd global-data-explorer
open index.html


📈 What This Project Demonstrates:

* Strong JavaScript fundamentals

* Thoughtful UX design decisions

* API integration without frameworks

* Performance-conscious DOM manipulation

* Clean Git history and documentation

* Production-ready frontend practices

This project is intentionally framework-free to emphasize engineering fundamentals.


🔒 License

This project is licensed under the MIT License.
See the License file for full details.


👤 Author

OluwaSina Asaolu
Frontend Developer
GitHub: https://github.com/obagooner