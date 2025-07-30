import React from 'react';

const ShapeSelector = ({ template, selectedShapeOption, onShapeOptionChange }) => {
  if (!template || !template.shapeOptions) {
    return null;
  }

  return (
    <div className="shape-selector">
      <h3 className="customization-title">Text Shapes</h3>
      <div className="shape-options-grid">
        {template.shapeOptions.map((shapeOption, index) => (
          <button
            key={index}
            className={`shape-option-button ${selectedShapeOption === index ? 'active' : ''}`}
            onClick={() => onShapeOptionChange(index)}
          >
            <div className="shape-preview">
              <div 
                className="shape-sample"
                style={{ 
                  borderRadius: shapeOption.borderRadius === 0 ? '0px' :
                              shapeOption.borderRadius <= 15 ? '8px' : '20px',
                  backgroundColor: '#007AFF',
                  width: '40px',
                  height: '24px'
                }}
              />
            </div>
            <span className="shape-option-name">{shapeOption.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShapeSelector;