from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx

app = FastAPI(title="Graph Analysis API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define data models
class Node(BaseModel):
    id: str
    type: str

class Edge(BaseModel):
    source: str
    target: str
    id: str

class GraphData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

class GraphAnalysis(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    """Check if the graph is a Directed Acyclic Graph (DAG)"""
    G = nx.DiGraph()
    
    # Add nodes
    for node in nodes:
        G.add_node(node.id)
    
    # Add edges
    for edge in edges:
        G.add_edge(edge.source, edge.target)
    
    return nx.is_directed_acyclic_graph(G)

@app.post("/analyze", response_model=GraphAnalysis)
async def analyze_graph(data: GraphData):
    try:
        return GraphAnalysis(
            num_nodes=len(data.nodes),
            num_edges=len(data.edges),
            is_dag=is_dag(data.nodes, data.edges)
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def read_root():
    return {"status": "ok", "message": "Graph Analysis API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
