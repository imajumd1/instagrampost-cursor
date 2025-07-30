import React from 'react';

const SizeSelector = ({ template, selectedSizeOption, onSizeOptionChange }) => {
  if (!template || !template.sizeOptions) {
    return null;
  }

  const sizeLabels = {
    small: 'Small',
    medium: 'Medium', 
    large: 'Large'
  };

  return (
    <div className="size-selector">
      <h3 className="customization-title">Text Size</h3>
      <div className="size-options-grid">
        {template.sizeOptions.map((sizeOption) => (
          <button
            key={sizeOption}
            className={`size-option-button ${selectedSizeOption === sizeOption ? 'active' : ''}`}
            onClick={() => onSizeOptionChange(sizeOption)}
          >
            <div className="size-preview">
              <span 
                className="size-sample"
                style={{ 
                  fontSize: sizeOption === 'small' ? '14px' : 
                           sizeOption === 'medium' ? '18px' : '22px' 
                }}
              >
                Aa
              </span>
            </div>
            <span className="size-option-name">{sizeLabels[sizeOption]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;