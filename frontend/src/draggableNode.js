// draggableNode.js
import React, { useState } from 'react';

export const DraggableNode = ({ type, label, color }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      style={{ 
        cursor: isDragging ? 'grabbing' : 'grab',
        minWidth: '100px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        backgroundColor: color || '#1C2536',
        justifyContent: 'center',
        padding: '0 16px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease',
        transform: isDragging ? 'scale(1.02)' : 'scale(1)',
        userSelect: 'none'
      }} 
      draggable
    >
      {label}
    </div>
  );
};
  