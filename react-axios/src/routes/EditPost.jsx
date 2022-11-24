import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './NewPost.css';

const EditPost = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const { id } = useParams();

    const getPost = async () => {
        try {
            console.log(id);
            const response = await blogFetch.get(`/posts/${id}`);
            const data = response.data;
            setTitle(data.title);
            setBody(data.body);
        } catch (error) {
            console.log(error)
        }
    };

    const updatePost = async (e) => {
        e.preventDefault();
        const post = { title, body, userId: 1 }

        await blogFetch.put(`/posts/${id}`, {
            body: post,
        });
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className="new_post">
            <h2>Editar post:</h2>
            <form onSubmit={(e) => updatePost(e)}>
                <div className="form_control">
                    <label htmlFor="title">
                        Título
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title || ""}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form_control">
                    <label htmlFor="body">
                        Conteúdo
                    </label>
                    <textarea
                        name="body"
                        id="body"
                        value={body || ""}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Salvar Post" className="btna" />
            </form>

        </div>
    )
}

export default EditPost