import React, { useRef, useEffect } from 'react';

const Canvas = ({ template, textValues, canvasRef }) => {
  const previewRef = useRef(null);

  // Function to wrap text within given width
  const wrapText = (ctx, text, x, y, maxWidth, lineHeight, textAlign = 'left') => {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    const lines = [];

    // Calculate all lines first
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && n > 0) {
        lines.push(line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    // Draw each line with proper alignment
    lines.forEach((line, index) => {
      let drawX = x;
      if (textAlign === 'center') {
        drawX = x + maxWidth / 2;
      } else if (textAlign === 'right') {
        drawX = x + maxWidth;
      }
      
      ctx.fillText(line.trim(), drawX, currentY + (index * lineHeight));
    });

    return currentY + (lines.length * lineHeight);
  };

  const drawCanvas = (canvas, scale = 1) => {
    if (!template || !canvas) return;

    const ctx = canvas.getContext('2d');
    const size = 1080 * scale;
    
    canvas.width = size;
    canvas.height = size;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw background
    if (template.background.startsWith('linear-gradient')) {
      // Parse gradient
      const gradientMatch = template.background.match(/linear-gradient\(([^)]+)\)/);
      if (gradientMatch) {
        const gradientParts = gradientMatch[1].split(',');
        const angle = gradientParts[0].trim();
        
        // Simple gradient implementation (45deg or 135deg)
        let gradient;
        if (angle.includes('45deg')) {
          gradient = ctx.createLinearGradient(0, size, size, 0);
        } else if (angle.includes('135deg')) {
          gradient = ctx.createLinearGradient(0, 0, size, size);
        } else {
          gradient = ctx.createLinearGradient(0, 0, size, 0);
        }

        // Extract colors (simplified parsing)
        const colors = gradientParts.slice(1).map(part => {
          const color = part.trim().split(' ')[0];
          return color;
        });

        if (colors.length >= 2) {
          gradient.addColorStop(0, colors[0]);
          gradient.addColorStop(1, colors[1]);
        }

        ctx.fillStyle = gradient;
      }
    } else {
      ctx.fillStyle = template.background;
    }
    ctx.fillRect(0, 0, size, size);

    // Draw text areas
    template.textAreas.forEach((textArea) => {
      const text = textValues[textArea.id] || textArea.placeholder;
      const scaledX = textArea.x * scale;
      const scaledY = textArea.y * scale;
      const scaledWidth = textArea.width * scale;
      const scaledFontSize = textArea.fontSize * scale;
      const scaledLineHeight = scaledFontSize * (textArea.lineHeight || 1.2);

      ctx.fillStyle = textArea.color;
      ctx.font = `${textArea.fontWeight || 'normal'} ${scaledFontSize}px ${textArea.fontFamily}`;
      ctx.textAlign = textArea.textAlign || 'left';
      ctx.textBaseline = 'top';

      wrapText(ctx, text, scaledX, scaledY, scaledWidth, scaledLineHeight, textArea.textAlign);
    });
  };

  useEffect(() => {
    // Draw preview canvas (scaled down)
    drawCanvas(previewRef.current, 0.3);
    
    // Draw export canvas (full resolution)
    if (canvasRef?.current) {
      drawCanvas(canvasRef.current, 1);
    }
  }, [template, textValues]);

  if (!template) {
    return (
      <div className="canvas-container">
        <div className="canvas-placeholder">
          Select a template to see preview
        </div>
      </div>
    );
  }

  return (
    <div className="canvas-container">
      <canvas
        ref={previewRef}
        className="preview-canvas"
        width={324}
        height={324}
      />
      <div className="canvas-label">Preview</div>
      
      {/* Hidden full-resolution canvas for export */}
      <canvas
        ref={canvasRef}
        style={{ display: 'none' }}
        width={1080}
        height={1080}
      />
    </div>
  );
};

export default Canvas;