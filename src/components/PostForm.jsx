import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../credenciales';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsList);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No hay posts aún</p>
      )}
    </div>
  );
};

export default PostList;