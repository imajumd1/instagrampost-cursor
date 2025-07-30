import React from 'react';

const FontSelector = ({ template, selectedFontOption, onFontOptionChange }) => {
  if (!template || !template.fontOptions) {
    return null;
  }

  return (
    <div className="font-selector">
      <h3 className="customization-title">Fonts</h3>
      <div className="font-options-grid">
        {template.fontOptions.map((fontOption, index) => (
          <button
            key={index}
            className={`font-option-button ${selectedFontOption === index ? 'active' : ''}`}
            onClick={() => onFontOptionChange(index)}
          >
            <div className="font-preview">
              <div 
                className="font-sample-main"
                style={{ fontFamily: fontOption.main }}
              >
                Aa
              </div>
              <div 
                className="font-sample-secondary"
                style={{ fontFamily: fontOption.secondary }}
              >
                Bb
              </div>
            </div>
            <span className="font-option-name">{fontOption.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FontSelector;