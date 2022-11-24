import blogFetch from '../axios/config';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Admin.css';

const Admin = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        console.log('Cheguei!');
        try {
            const response = await blogFetch.get(
                "/posts"
            );
            const data = response.data;
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.log(error);
        };
    };
    useEffect(() => {
        getPosts();
    }, []);
    const deletePost = async(id) => {
        await blogFetch.delete(`/posts/${id}`);
        const filteredPosts = posts.filter((post) => post.id !== id)
        setPosts(filteredPosts);
    }

    return (
        <div className="admin">
            <h2>Gerenciar Posts</h2>
            {posts.length === 0 ? (<p>Carregando...</p>) : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h3>{post.title}</h3>
                        <div className="actions">
                            <Link to={`/posts/edit/${post.id}`} className="btn edit_btn">Editar</Link>
                            <button onClick={() => deletePost(post.id)} className="btn delete_btn">Excluir</button>
                        </div>

                        {/* <p>{post.body}</p> 
                        <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>*/}
                    </div>
                ))
            )}
        </div>
    );
};

export default Admin