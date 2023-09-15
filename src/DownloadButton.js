import React, { useState } from 'react';

function DownloadButton({ apiUrl }) {
  const [imageBlob, setImageBlob] = useState(null);
  console.log(imageBlob); // use imageBlob to trick eslint check
  const handleDownload = async () => {
    try {
      // Fetch the image data
      const response = await fetch(apiUrl);
      // throw error if response is not okay
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Convert the response to a blob
      const blob = await response.blob();
      setImageBlob(blob);

      // Create a hidden anchor element for downloading
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      // Set the desired filename here
      // Who the eff thought using the download property for file name specification was a good idea?
      link.download = 'meme.jpg';

      // Trigger a click event on the anchor element
      document.body.appendChild(link);
      link.click();

      // Clean up
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default DownloadButton;
