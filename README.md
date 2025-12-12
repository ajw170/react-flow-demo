# ReactFlow and DevExtreme Demo

This application demonstrates how to use [ReactFlow](https://reactflow.dev/) and [DevExtreme React](https://js.devexpress.com/React/)
with Vite, specifically for creating interactive node-based diagrams for traffic monitoring systems.

## What Can This Do?

This demo application provides two complete implementations of an interactive diagram builder that allows you to:

- **Create visual flow diagrams** using drag-and-drop nodes
- **Connect logical operators** (AND, OR, NOT) with traffic sensors (Velocity, Occupancy, Volume)
- **Configure sensor parameters** with operators, values, and filtering options
- **Auto-organize diagrams** with automatic layout algorithms
- **Compare two frameworks** - ReactFlow and DevExtreme side-by-side

The application features two separate implementations allowing you to compare the approaches:
- **ReactFlow version** (`/`) - Flexible React-based node graph with custom components
- **DevExtreme version** (`/devextreme`) - Professional diagramming component with built-in tools

For a detailed explanation of all features and capabilities, see **[CAPABILITIES.md](./CAPABILITIES.md)**.

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installing and Running

1. Navigate to the project directory:
   ```bash
   cd reactflow-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser:
   - The terminal will display a local URL (typically `http://localhost:5173`)
   - Press `o + enter` in the terminal to automatically open the browser
   - Or manually navigate to the displayed URL

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the production-ready application
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
reactflow-demo/
├── src/
│   ├── App.tsx                  # ReactFlow implementation
│   ├── DevExtremeMain.tsx       # DevExtreme implementation
│   ├── main.tsx                 # Application entry point with routing
│   ├── nodes/                   # ReactFlow custom node components
│   │   ├── andNode.tsx
│   │   ├── orNode.tsx
│   │   ├── notNode.tsx
│   │   ├── velocityNode.tsx
│   │   ├── occupancyNode.tsx
│   │   └── volumeNode.tsx
│   ├── devExtremeNodes/         # DevExtreme node configuration components
│   └── *.svg                    # Node icons for DevExtreme
├── package.json
└── vite.config.ts
```

## Technology Stack

- **React 18.3+** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **ReactFlow (@xyflow/react)** - Node-based graph library
- **DevExtreme React** - Professional UI component suite
- **Dagre** - Graph layout algorithm
- **React Router** - Client-side routing

## Learn More

- [ReactFlow Documentation](https://reactflow.dev/)
- [DevExtreme React Documentation](https://js.devexpress.com/React/)
- [Vite Documentation](https://vitejs.dev/)

## Features Comparison

| Feature | ReactFlow | DevExtreme |
|---------|-----------|------------|
| Open Source | ✅ MIT License | ❌ Commercial |
| Customization | ⭐⭐⭐⭐⭐ High | ⭐⭐⭐⭐ Moderate |
| Built-in Tools | ⭐⭐⭐ Basic | ⭐⭐⭐⭐⭐ Comprehensive |
| Learning Curve | ⭐⭐⭐ Moderate | ⭐⭐⭐⭐ Steeper |

## Use Cases

This demo is perfect for:
- Traffic management systems requiring visual logic flows
- Visual programming interfaces
- Workflow builders
- Decision tree visualizations
- IoT sensor network configuration

## License

This is a demonstration project. Check individual library licenses:
- ReactFlow: MIT License
- DevExtreme: Commercial license (trial available)