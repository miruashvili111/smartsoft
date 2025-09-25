# Smartsoft Technical Assignment

## Overview
This project is a technical assignment for **Smartsoft**, built with **React + TypeScript** using strict type safety and modern development approaches.

## Features

### Authentication & Registration
- Login and registration page
- Password validation rules:
  - Must contain uppercase letters
  - Must contain lowercase letters
  - Must include symbols
  - Must include numbers

### Captions Page
- Add new captions
- Edit existing captions
- Delete captions

### Countries Page
- View countries in a table format
- Filter countries by currency (USD, EUR)

## Technical Details
- **Modern routing system** implemented with React Router
- **Custom contexts**:
  - `useAuth`
  - `ThemeProvider`
  - `useSnackbar`
- **Feature-based architecture**:
  - `auth`, `captions`, `countries`
  - Each feature includes API services and validation logic
- **Axios** is fully configured
- Authentication is **token-based**, stored in **localStorage** (no `/me` endpoint available)
- In case of a crash, the app redirects to an **Error Page** where the user can reload
- Internal errors are hidden from the user

## UI & UX
- Built with **MUI (Material UI)**
- **Responsive & Mobile-Friendly** design
- **PWA support will be added** – allowing installation on Desktop and Mobile devices

## Notes
Due to time constraints, not all design patterns were fully implemented, although this can be noticed in certain parts of the architecture.

## Demo
You can view the application at the following link:  
👉 [https://smartsoft.nekalmo.com/](https://smartsoft.nekalmo.com/)
