
import React from 'react';

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    cover: string;
  };
  likes: number;
  onLike: () => void; // Додаємо новий пропс для обробки події натискання на кнопку Like
}

const Post: React.FC<PostProps> = ({ post, likes, onLike }) => {
  return (
    <article className='post'>
      <div className='cover-container'>
        <img src={post.cover} alt={post.title} />
      </div>
      <div className='post-footer'>
        <h3>{post.id} {post.title} </h3>
        <p>{post.content}</p>
        <button id='like' onClick={onLike}> {/*використовуємо переданий обробник для події натискання на кнопку */}
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
};

export default Post;
