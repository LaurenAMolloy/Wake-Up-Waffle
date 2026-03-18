# 🛒 React Shopping Cart SPA

A single-page application built with **React** to demonstrate modern front-end architecture, state management, and routing patterns. This project focuses on clean separation of concerns, strong TypeScript typing, and scalable state handling using React Context and `useReducer`.

---


https://github.com/user-attachments/assets/10b7e38b-4360-4cf8-8241-190a8249a5af



## ✨ Features

- Client-side routing with **React Router**
- Data loading using **React Router loaders**
- Global state management with **useReducer + Context**
- Strongly typed application using **TypeScript**
- Modular, maintainable component structure
- Fully client-side single-page application (SPA)
- integration tests (in progress)

---

## 🧱 Tech Stack

- **React**
- **TypeScript**
- **React Router**
- **Context API**
- **useReducer**
- **localStorage**
- **Testing Library / Jest** (planned)

---

## 📌 Future Improvements

- **User Authentication**
  - Add user accounts with login and registration
  - Enable user-specific cart persistence and preferences

- **Backend Integration**
  - Replace local storage with a dedicated backend service
  - Implement a REST API (or GraphQL) for cart and product data
  - Persist user and cart data using **MongoDB**

- **State Persistence**
  - Sync cart state between sessions and devices
  - Support authenticated and guest users

- **Theming**
  - Add **light mode / dark mode** support
  - Persist theme preference across sessions

---

## 📁 Project Structure

```txt
src/
├── api/            # API logic and shared TypeScript types
├── assets/
├── components/     # Reusable UI components
├── context/        # Cart context, reducer, and provider
├── pages/          # Route-level components
├── types/
├── hooks/          # Custom hooks (e.g. useCart)



- **General Enhancements**
  - Improved accessibility
  - Performance optimizations
  - Expanded test coverage


