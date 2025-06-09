# Flow-Based Node Editor

A visual programming interface that allows users to create and connect nodes in a flow-based programming environment. The application consists of a React-based frontend for the visual interface and a FastAPI backend for graph analysis.

## Project Structure

```
.
├── frontend/          # React frontend application
├── backend/           # FastAPI backend service
└── README.md         # This file
```

## Quick Start

1. Start the Backend:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 5000
```

2. Start the Frontend:
```bash
cd frontend
npm install
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Features

- **Visual Node Editor**: Drag-and-drop interface for creating node graphs
- **Multiple Node Types**:
  - Input Node: For data input
  - LLM Node: Language Model integration
  - Text Node: Text processing with variable detection
  - Output Node: For final output
- **Dynamic Connections**: Auto-detecting variables and creating connection points
- **Graph Analysis**: Backend validation for node connections and DAG properties
- **Real-time Updates**: Immediate visual feedback for all operations

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm or yarn package manager

## Development Setup

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 5000
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## API Documentation

The backend API documentation is available at:
- Swagger UI: `http://localhost:5000/docs`
- ReDoc: `http://localhost:5000/redoc`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 