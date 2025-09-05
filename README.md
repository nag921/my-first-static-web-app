# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Task Manager Application

A modern, responsive task management application built with React, TypeScript, Tailwind CSS, and Vite.

## ✨ Features

- **Add Tasks**: Create new tasks with title and optional description
- **Mark Complete**: Toggle task completion status with a simple click
- **Edit Tasks**: Update task titles and descriptions inline
- **Delete Tasks**: Remove tasks you no longer need
- **Filter Tasks**: View all tasks, only active tasks, or completed tasks
- **Task Statistics**: See your progress with completion percentages and counts
- **Persistent Storage**: Tasks are saved to browser localStorage
- **Responsive Design**: Works great on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast build tool and development server
- **SWC** - Fast TypeScript/JavaScript compiler
- **Prettier** - Code formatting
- **ESLint** - Code linting and quality

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd my-first-static-webapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Usage

### Adding Tasks

1. Fill in the task title (required)
2. Optionally add a description
3. Click "Add Task"

### Managing Tasks

- **Complete**: Click the checkbox next to a task to mark it as complete
- **Edit**: Click the edit icon to modify the task title or description
- **Delete**: Click the delete icon to remove a task

### Filtering

Use the filter buttons to view:

- **All Tasks**: Show all tasks regardless of status
- **Active**: Show only incomplete tasks
- **Completed**: Show only completed tasks

### Bulk Actions

- **Clear Completed**: Remove all completed tasks at once (available when you have completed tasks)

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── TaskForm.tsx    # Form for adding new tasks
│   ├── TaskItem.tsx    # Individual task display and editing
│   ├── TaskList.tsx    # List of tasks with empty state
│   ├── TaskStats.tsx   # Statistics and progress overview
│   └── TaskFilter.tsx  # Filter buttons for task visibility
├── hooks/
│   └── useTasks.ts     # Custom hook for task management logic
├── types/
│   └── Task.ts         # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind CSS
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🎨 Styling

This project uses Tailwind CSS for styling with a custom design system:

- **Primary Color**: Blue-based color palette
- **Typography**: System fonts with careful hierarchy
- **Spacing**: Consistent spacing scale
- **Responsive**: Mobile-first responsive design
- **Components**: Reusable component classes for buttons and cards

## 💾 Data Persistence

Tasks are automatically saved to and loaded from browser localStorage. This means:

- Your tasks persist between browser sessions
- No backend server required
- Data is stored locally on your device
- Clearing browser data will remove saved tasks

## 🔧 Configuration

### Tailwind CSS

Configuration is in `tailwind.config.js` with custom color palette and content paths.

### Prettier

Code formatting rules are defined in `.prettierrc`.

### TypeScript

TypeScript configuration is split between:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js tooling settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint && npm run type-check`
5. Format code: `npm run format`
6. Commit your changes: `git commit -m 'Add feature'`
7. Push to the branch: `git push origin feature-name`
8. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern web development best practices
- Inspired by popular task management applications
- Uses the latest React patterns and TypeScript features

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
