import React from 'react';

const ColorPicker = ({ template, selectedColorScheme, onColorSchemeChange }) => {
  if (!template || !template.colorSchemes) {
    return null;
  }

  return (
    <div className="color-picker">
      <h3 className="customization-title">Colors</h3>
      <div className="color-schemes-grid">
        {template.colorSchemes.map((scheme, index) => (
          <button
            key={index}
            className={`color-scheme-button ${selectedColorScheme === index ? 'active' : ''}`}
            onClick={() => onColorSchemeChange(index)}
            title={scheme.name}
          >
            <div className="color-scheme-preview">
              <div 
                className="color-preview-bg"
                style={{ 
                  background: scheme.background.startsWith('linear-gradient') 
                    ? scheme.background 
                    : scheme.background 
                }}
              />
              <div className="color-preview-text">
                <div 
                  className="primary-color-dot"
                  style={{ backgroundColor: scheme.primary }}
                />
                <div 
                  className="secondary-color-dot"
                  style={{ backgroundColor: scheme.secondary }}
                />
              </div>
            </div>
            <span className="color-scheme-name">{scheme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;