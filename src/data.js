// data.js

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const fetchVideos = async () => {
  try {
    const videos = [];
    const colRef = collection(db, 'videos');
    const snapshot = await getDocs(colRef);
    snapshot.forEach((doc) => {
      videos.push({ id: doc.id, ...doc.data() });
    });
    return videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

export { fetchVideos };
