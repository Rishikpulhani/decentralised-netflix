import axios from 'axios';

const customUpload = async (file, apiKey) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post('https://lighthouse-service-url/upload', formData, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error uploading file: ' + error.message);
  }
};

export default customUpload;
