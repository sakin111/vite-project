# 🌿 Donezo - Professional Task Management Dashboard



**Donezo** is a premium, high-performance task management application designed for modern teams. It features a sophisticated dashboard, real-time analytics, and a seamless mobile-first user experience.

---

## ✨ Key Features

### 📊 Professional Dashboard
*   **Real-time Stats**: Track Total, Ended, Running, and Pending projects at a glance.
*   **Weekly Analytics**: Custom-built, lightweight SVG bar charts for tracking project activity.
*   **Progress Tracking**: Visual radial progress indicators for project completion rates.

### 🤝 Team Collaboration
*   **User Management**: Monitor team members' tasks and their current status (Completed, In Progress, Pending).
*   **Project Lists**: Organized project tracking with due dates and priority indicators.

### 🚀 Performance & UX
*   **Zero-Jank Navigation**: Complete code-splitting using `React.lazy` and `Suspense` for blazing-fast transitions.
*   **Optimized Data Fetching**: Powered by **TanStack Query** for efficient caching and background updates.
*   **Mobile-First Design**: Fully responsive layout with a dynamic sidebar and fluid grid system.
*   **Premium Aesthetics**: Custom Forest Green theme (`#1C6442`) built with **Shadcn UI** for a high-end feel.

---

## 🛠️ Tech Stack

-   **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
-   **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
-   **API Client**: [Axios](https://axios-http.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Routing**: [React Router](https://reactrouter.com/)

---

## 🏗️ Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or pnpm or bun

### Installation

1.  **Clone the repository**
    ```bash
    git clone [your-repo-link]
    cd vite-project
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**
    Create a `.env` file in the root directory (if required for API keys).

4.  **Run the development server**
    ```bash
    npm run dev
    ```

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Layout/          # Layout & Navigation (Navbar, Sidebar, Footer)
│   ├── ui/              # Shadcn UI reusable components
│   └── modules/         # Feature-specific components
├── Pages/               # Page components (Login, Blogs, About)
├── service/             # API services & React Query hooks
├── lib/                 # Utility functions & Shared contexts
└── router/              # Routing configuration
```

---

## 🛡️ Security

Donezo implements secure JWT-based authentication with request interceptors to ensure all API calls are properly authorized.

---

## 📄 License

This project is privately owned and developed for professional task management.

---

*Developed with ❤️ for productivity.*
