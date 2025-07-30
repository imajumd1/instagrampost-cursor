import React, { useState } from 'react';

const DownloadButton = ({ canvasRef, disabled }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = async () => {
    if (!canvasRef?.current || disabled) return;

    setIsDownloading(true);
    
    try {
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL('image/png', 1.0);
      
      // Create download link
      const link = document.createElement('a');
      link.download = `instagram-post-${new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-')}.png`;
      link.href = dataURL;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadComplete(true);
      setTimeout(() => {
        setDownloadComplete(false);
      }, 2000);
      
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const getButtonContent = () => {
    if (isDownloading) {
      return (
        <>
          <span className="download-icon">⏳</span>
          Creating...
        </>
      );
    }
    
    if (downloadComplete) {
      return (
        <>
          <span className="download-icon">✅</span>
          Downloaded!
        </>
      );
    }
    
    return (
      <>
        <span className="download-icon">🚀</span>
        Download Your Post
      </>
    );
  };

  return (
    <div className="download-section">
      <button
        className={`download-button ${isDownloading ? 'downloading' : ''} ${downloadComplete ? 'complete' : ''}`}
        onClick={handleDownload}
        disabled={disabled || isDownloading}
      >
        {getButtonContent()}
      </button>
      <div className="download-info">
        1080×1080 • Ready to share
      </div>
    </div>
  );
};

export default DownloadButton;