# 💼 Personal Portfolio Website

A modern, responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. Features dynamic theme switching (Dark/Light mode) powered by React's Context API, modular component design, and reusable styling patterns.

---

## 🚀 Live Demo

- **Live Demo:** [https://reactfolio-jade-eta.vercel.app/]
- **GitHub:** [https://github.com/Kalyana-kumar-k/reactfolio]

---

## ✨ Features

- **Responsive Design:** Optimized for all screen sizes (mobile, tablet, and desktop).
- **Global Theme Support:** Dark/Light theme toggling handled globally using React's `useContext` hook and persistent state.
- **Reusable Styling:** Modular UI styled with Tailwind CSS utility classes and custom reusable styles (`@apply` / style abstraction).
- **Interactive Project Showcase:** Live previews and direct source code links for featured projects.
- **Direct Contact Triggers:** One-click links to initiate direct phone calls and draft emails.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **State Management:** React Context API (`useContext`) for global theme state

---

## 📂 Project Structure

```text
public
├──ProjectsImg/   Images
src/
├── assets/          # myinfo
├── components/      # Header, Navbar, Contact, Projects, Skills
|   ├── context/     # ThemeContext and global providers
├── App.jsx          # Root component
└── main.jsx         # App entry point


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
```
