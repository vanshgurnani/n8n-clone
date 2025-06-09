# Flow-Based Node Editor Frontend

React-based frontend for the Flow-Based Node Editor, built with React Flow and Zustand for state management.

## Directory Structure

```
src/
├── components/        # Reusable components
│   ├── BaseNode.js   # Base node component
│   └── SubmitButton.js
├── nodes/            # Node type implementations
│   ├── inputNode.js
│   ├── llmNode.js
│   ├── outputNode.js
│   └── textNode.js
├── App.js            # Main application component
├── ui.js             # Main node editor UI
├── toolbar.js        # Node type toolbar
├── store.js          # Zustand state management
└── submit.js         # Backend integration
```

## Component Architecture

### BaseNode Component
The foundation for all node types, providing:
- Standard layout and styling
- Handle management for connections
- Content area for node-specific UI

```javascript
<BaseNode
  id={nodeId}
  title="Node Title"
  inputs={[{ id: 'input1', name: 'Input 1' }]}
  outputs={[{ id: 'output1', name: 'Output 1' }]}
>
  {/* Node specific content */}
</BaseNode>
```

### Node Types

1. **Input Node**
   - Purpose: Data entry point
   - Features: Configurable name and type
   - Output: Single data stream

2. **LLM Node**
   - Purpose: Language model integration
   - Inputs: System prompt, User prompt
   - Output: Model response
   - Configuration: Model selection, temperature

3. **Text Node**
   - Purpose: Text manipulation
   - Features: Variable detection
   - Dynamic inputs based on detected variables
   - Output: Processed text

4. **Output Node**
   - Purpose: Data output point
   - Input: Single data stream
   - Configuration: Output type, name

## State Management

Using Zustand for state management:
```javascript
const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  addNode: (node) => set({ nodes: [...get().nodes, node] }),
  // ... other actions
}));
```

## Available Scripts

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Development

### Adding a New Node Type

1. Create new component in `src/nodes/`:
```javascript
export const NewNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="New Node"
      inputs={[...]}
      outputs={[...]}
    >
      {/* Node content */}
    </BaseNode>
  );
};
```

2. Add to node types in `ui.js`:
```javascript
const nodeTypes = {
  // ... existing types
  newNode: NewNode
};
```

3. Add to toolbar in `toolbar.js`

### Styling

- All components use inline styles for simplicity
- Common styles are shared through the BaseNode component
- Node-specific styles are applied in individual components

## Dependencies

- react-flow-renderer: Node graph visualization
- zustand: State management
- react: UI framework
- other utilities as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

See the main README.md for contribution guidelines.
