import React from 'react';
import { BlogContext, Layout, Header, BlogInfo } from '../components/Posts';


function Blog() {
  const blogName = "Стилізація за допомогою Tailwind CSS";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Header />
       <BlogInfo/>
      </Layout>
    </BlogContext.Provider>
  );
}

export default Blog;
