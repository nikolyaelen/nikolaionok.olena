import React, { createContext, useContext, useState, useEffect } from 'react';

// Створюємо контекст для посту
const PostContext = createContext<any>(null);


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="layout">
        <Header />
        {children}
      </div>
    );
  };
  

// Компонент Header
const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>My Blog</h1>
    </div>
  );
};

// Компонент PostTitle
const PostTitle: React.FC = () => {
  const post = useContext(PostContext);

  return (
    <div className="post-title">
      <h2>{post.title}</h2>
    </div>
  );
};

// Компонент PostMain
const PostMain: React.FC = () => {
  const post = useContext(PostContext);

  return (
    <div className="post-main">
      <img src={post.cover} alt={post.title} />
      <p>{post.content}</p>
      <p>Likes: {post.likes}</p> 
    </div>
  );
};


// Компонент Post
const Post: React.FC = () => {
    const [post, setPost] = useState<any>(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://raw.githubusercontent.com/nikolyaelen/nikolaionok/main/db/db.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setPost(data.posts[1]); // Передбачається використовувати другий пост зі списку
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    
      fetchData();
    }, []);
  
    if (!post) {
      return <div>Loading...</div>; // Відображаємо заглушку під час завантаження даних
    }
  
    return (
      <PostContext.Provider value={post}>
        <Layout>
          <PostTitle />
          <PostMain />
        </Layout>
      </PostContext.Provider>
    );
  };

export default Post;
