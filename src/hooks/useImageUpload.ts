import { useState } from 'react';
import instance from 'apis/httpClient';

function useProjectImageUpload() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      // setImageUrl(URL.createObjectURL(selectedFile));

      const formData = new FormData();
      formData.append('image', selectedFile);

      const blob = new Blob([JSON.stringify(selectedFile)], {
        type: 'application/json',
      });

      formData.append('data', blob);

      try {
        const {
          data: { imgUrl },
        } = await instance.post('/project/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImageUrl(imgUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return { imageUrl, handleImageChange };
}

export default useProjectImageUpload;
