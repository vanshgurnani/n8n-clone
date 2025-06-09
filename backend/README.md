# Flow-Based Node Editor Backend

FastAPI backend service for the Flow-Based Node Editor, providing graph analysis and execution capabilities.

## Directory Structure

```
backend/
├── app/
│   ├── models/       # Pydantic models
│   ├── routers/      # API route handlers
│   └── services/     # Business logic
├── tests/           # Test files
├── main.py         # Application entry point
└── requirements.txt # Python dependencies
```

## API Endpoints

### Graph Analysis
- `POST /api/analyze`
  - Validates graph structure
  - Counts nodes and edges
  - Checks for DAG properties
  - Returns analysis results

### Graph Execution
- `POST /api/execute`
  - Executes the flow graph
  - Processes nodes in topological order
  - Returns execution results

## Data Models

### Node
```python
class Node(BaseModel):
    id: str
    type: str
    data: Dict[str, Any]
    position: Dict[str, float]
```

### Edge
```python
class Edge(BaseModel):
    id: str
    source: str
    target: str
    sourceHandle: Optional[str]
    targetHandle: Optional[str]
```

### Graph
```python
class Graph(BaseModel):
    nodes: List[Node]
    edges: List[Edge]
```

## Setup and Installation

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Start the server:
```bash
uvicorn main:app --reload --port 5000
```

## Development

### Adding a New Endpoint

1. Create a new router in `app/routers/`:
```python
from fastapi import APIRouter

router = APIRouter()

@router.post("/new-endpoint")
async def handle_new_endpoint():
    # Implementation
    pass
```

2. Register in `main.py`:
```python
from app.routers import new_router
app.include_router(new_router.router)
```

### Error Handling

The application uses FastAPI's built-in exception handling:

```python
from fastapi import HTTPException

@router.post("/endpoint")
async def handler():
    if error_condition:
        raise HTTPException(
            status_code=400,
            detail="Error message"
        )
```

## Testing

Run tests with pytest:
```bash
pytest
```

Example test:
```python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_analyze_endpoint():
    response = client.post("/api/analyze", json={...})
    assert response.status_code == 200
```

## Dependencies

- fastapi: Web framework
- uvicorn: ASGI server
- pydantic: Data validation
- pytest: Testing framework

## Configuration

Environment variables:
- `PORT`: Server port (default: 5000)
- `HOST`: Server host (default: 0.0.0.0)
- `DEBUG`: Debug mode (default: False)

## Security

- CORS configuration in `main.py`
- Rate limiting on endpoints
- Input validation using Pydantic models

## Contributing

See the main README.md for contribution guidelines. 