# Furniture E-commerce Frontend

This is the frontend for a modern, feature-rich furniture e-commerce platform. It provides a seamless shopping experience for customers and a comprehensive dashboard for administrators to manage products, orders, and customers.

This application is built with React and communicates with a backend service via gRPC for high-performance API calls.

## Features

### Customer View

- **Product Catalog:** Browse and search for furniture products.
- **Shopping Cart:** Add products to a cart and manage them.
- **Checkout:** Secure checkout process.
- **User Authentication:** Register, log in, and manage user profiles.
- **Order History:** View past orders and their statuses.
- **Responsive Design:** Fully responsive for browsing on any device.

### Admin Dashboard

- **Dashboard:** At-a-glance view of key e-commerce metrics.
- **Product Management:** Create, update, and delete products.
- **Order Management:** View and manage customer orders.
- **Customer Management:** View and manage the customer list.

## Tech Stack

- **Framework:** [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **API Communication:** [gRPC-web](https://github.com/grpc/grpc-web) with [Protocol Buffers](https://developers.google.com/protocol-buffers)
- **Routing:** [React Router](https://reactrouter.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Styling:** [Bootstrap](https://getbootstrap.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Linting:** [ESLint](https://eslint.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation & Setup

1. **Clone the repository from GitHub:**

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of the project and add any necessary environment variables, such as the backend API endpoint.

   ```env
   VITE_API_BASE_URL=http://localhost:8080
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally to preview it.
