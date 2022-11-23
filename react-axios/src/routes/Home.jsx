import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import blogFetch from "../axios/config";
import './Home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = async() => {
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
        }
    }
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div className="home">
            <h2>Últimos Posts</h2>
            {posts.length === 0 ? (<p>Carregando...</p>) : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
                    </div>
                ))
            )}
        </div>
    )
}

export default Home