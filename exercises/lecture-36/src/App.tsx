


import React, { useState, useEffect } from 'react';
import Post from './components/Post.tsx';

async function fetchData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/nikolyaelen/nikolaionok/main/db/db.json');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

const App: React.FC = () => {
  const [post, setPost] = useState<any>(null);
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    async function fetchPostData() {
      const postData = await fetchData();
      if (postData) {
        setPost(postData.posts[0]);
        setLikes(parseInt(postData.posts[0].likes));
      }
    }
  
    fetchPostData();
  }, []);

  const likeThis = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <h1>My Blog</h1>
      {post ? (
        <div>
          <Post post={post} likes={likes} onLike={likeThis} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
