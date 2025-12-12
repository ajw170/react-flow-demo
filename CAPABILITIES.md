# What Can This Do?

## Overview

This is a **ReactFlow and DevExtreme Demo Application** that showcases two different approaches to building interactive node-based diagrams for traffic monitoring systems. The application allows users to create visual flow diagrams by connecting logical operators with traffic sensor data.

## Key Features

### 1. **Dual Framework Implementation**
The application demonstrates two different diagramming frameworks:

- **ReactFlow** - A flexible React-based node graph library
- **DevExtreme Diagram** - A comprehensive diagramming component from DevExpress

Both implementations provide similar functionality, allowing you to compare and contrast the two approaches.

### 2. **Interactive Node Diagram Builder**

#### Node Types Available:

**Combinators (Logical Operators):**
- **AND Node** - Logical AND operation (green)
- **OR Node** - Logical OR operation (yellow)
- **NOT Node** - Logical NOT operation (pink, limited to single outgoing connection)

**Specifiers (Traffic Sensors):**
- **Velocity Node** - Measures traffic speed with configurable operators (>, =, <), value input, and suspect value filtering
- **Occupancy Node** - Measures traffic occupancy/density
- **Volume Node** - Measures traffic volume/count

### 3. **ReactFlow Version Features**

Located at the root path (`/`):

- **Drag & Drop Interface**: Drag nodes from the right panel onto the canvas
- **Visual Feedback**: Canvas background changes when dragging elements
- **Connection Logic**: 
  - Connect nodes by dragging from one node's handle to another
  - NOT nodes are restricted to a single outgoing connection
- **Auto-Layout**: "Organize!" button automatically arranges nodes in a top-to-bottom hierarchical layout using the Dagre algorithm
- **Interactive Canvas**:
  - Pan and zoom controls
  - Dot grid background
  - MiniMap for navigation
  - Node selection with visual indication (red border)

### 4. **DevExtreme Version Features**

Located at `/devextreme` path:

- **Toolbox Interface**: Two collapsible toolbox groups:
  - Combinators (displayed as icons)
  - Selectors (displayed as text labels)
- **Custom Shapes**: Each node type has custom SVG graphics
- **Dynamic Properties Panel**: 
  - Right sidebar shows configuration options when a selector node is selected
  - Different options appear based on the selected node type
- **Connection Points**: Predefined connection points at top and bottom of each shape

### 5. **Navigation**

- Easy switching between ReactFlow and DevExtreme implementations via navigation links
- Built with React Router for seamless single-page application experience

## Technical Stack

- **Frontend Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite
- **Diagramming Libraries**:
  - @xyflow/react (ReactFlow) v12.0.0
  - DevExtreme React v24.1.3
- **Layout Algorithm**: Dagre for automatic graph layout
- **Routing**: React Router DOM v6.25+
- **Styling**: CSS with DevExtreme themes

## Use Cases

This application is ideal for:

1. **Traffic Management Systems**: Creating logical flow diagrams for traffic sensor data processing
2. **Visual Programming**: Building visual logic flows using drag-and-drop interfaces
3. **Framework Comparison**: Evaluating ReactFlow vs DevExtreme for node-based diagram needs
4. **Prototyping**: Quickly creating and testing different logical combinations of traffic sensors

## How to Use

### ReactFlow Interface:
1. Start the application and you'll land on the ReactFlow demo
2. Drag combinators (and, or, not) or specifiers (velocity, occupancy, volume) from the right panel
3. Drop them onto the canvas
4. Connect nodes by dragging from the bottom handle (source) of one node to the top handle (target) of another
5. Click "Organize!" to automatically arrange nodes in a clean layout
6. Use the controls in the bottom-left for pan/zoom operations

### DevExtreme Interface:
1. Click "Go To DevExtreme" to switch to the DevExtreme implementation
2. Drag shapes from the toolbox on the left onto the canvas
3. Connect shapes using their connection points
4. Select a selector shape (velocity, occupancy, or volume) to see configuration options in the right panel
5. Configure the selected node's properties as needed

## Interactive Elements

- **Node Dragging**: Reposition nodes on the canvas
- **Connection Creation**: Link nodes to create logical flows
- **Node Selection**: Click nodes to select them (visual feedback with red border in ReactFlow)
- **Auto-Layout**: Automatically organize complex diagrams
- **Dynamic Properties**: Configure sensor nodes with specific operators and values

## Architecture Highlights

- **Component-Based**: Each node type is a separate React component
- **Type-Safe**: Built with TypeScript for better development experience
- **Modular Design**: Easy to add new node types or modify existing ones
- **State Management**: Uses React hooks (useState, useCallback) for efficient state handling
- **Responsive**: Adapts to different screen sizes with flexbox layout

## Development

The application includes:
- **Linting**: ESLint with TypeScript support
- **Type Checking**: Full TypeScript support with strict type checking
- **Hot Reload**: Vite's fast development server with instant updates
- **Build Optimization**: Production-ready builds with Vite

## Comparison: ReactFlow vs DevExtreme

| Feature | ReactFlow | DevExtreme |
|---------|-----------|------------|
| **Ease of Setup** | Straightforward | Requires more configuration |
| **Customization** | Highly flexible React components | Predefined shapes with customization |
| **Auto-Layout** | Requires Dagre integration | Built-in layout features |
| **Learning Curve** | Moderate | Steeper (comprehensive API) |
| **Visual Style** | Custom CSS styling | Professional built-in themes |
| **Properties Panel** | Custom implementation needed | Can leverage built-in tooling |
| **License** | Open source (MIT) | Commercial (trial available) |

## Conclusion

This demo application showcases powerful node-based diagramming capabilities using two popular frameworks. Whether you're building a traffic management system, visual programming tool, or any application requiring interactive node graphs, this demo provides a solid foundation and comparison point for both ReactFlow and DevExtreme approaches.
