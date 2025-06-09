import React from 'react';
import { useStore } from '../store';
import { submitGraph } from '../submit';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  isLoading: state.isLoading,
  setLoading: state.setLoading
});

export const SubmitButton = () => {
  const { nodes, edges, isLoading, setLoading } = useStore(selector, shallow);

  const handleSubmit = async () => {
    if (isLoading) return;
    
    try {
      setLoading(true);
      await submitGraph(nodes, edges);
    } catch (error) {
      // Error is already handled in submitGraph
      console.error('Submit failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={isLoading}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: isLoading ? '#4A5568' : '#1C2536',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        fontSize: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transition: 'background-color 0.2s ease'
      }}
      onMouseOver={(e) => !isLoading && (e.target.style.backgroundColor = '#2C3546')}
      onMouseOut={(e) => !isLoading && (e.target.style.backgroundColor = '#1C2536')}
    >
      {isLoading ? 'Analyzing...' : 'Analyze Graph'}
    </button>
  );
}; 