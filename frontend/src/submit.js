// submit.js

export const SubmitButton = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit">Submit</button>
        </div>
    );
}

export const submitGraph = async (nodes, edges) => {
  try {
    // Add type information to nodes
    const nodesWithType = nodes.map(node => ({
      ...node,
      type: node.type || 'default' // Ensure each node has a type
    }));

    // Add id to edges if missing
    const edgesWithId = edges.map(edge => ({
      ...edge,
      id: edge.id || `${edge.source}-${edge.target}`
    }));

    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nodes: nodesWithType,
        edges: edgesWithId
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Network response was not ok');
    }

    const data = await response.json();
    
    // Show alert with analysis results
    alert(
      `Graph Analysis Results:\n\n` +
      `Number of Nodes: ${data.num_nodes}\n` +
      `Number of Edges: ${data.num_edges}\n` +
      `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
    );

    return data;
  } catch (error) {
    console.error('Error submitting graph:', error);
    alert(`Error submitting graph: ${error.message}`);
    throw error;
  }
};
