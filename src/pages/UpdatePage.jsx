import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
    const [post, setPost] =useState({})
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState("")
    const params =useParams()
    const navigate = useNavigate()
    const url = `https://potato-meal-planner-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`
    

    useEffect(() => {
        async function getPost() {
            const response = await fetch(url);
            const data = await response.json()
            setPost(data)
            console.log(data);
            setCaption(post.caption)
            setImage(post.image)
        }

        getPost();
    }, [post.caption, post.image, url])


    async function handleSubmit(event) {
        event.preventDefault();
        const postToUpdate = {
            caption:caption,
            image:image,
            uid:post.uid
        }
        
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(postToUpdate)
        });

        if (response.ok) {
            navigate("/")
            } else {
                console.log("Something went wrong")
            }
    }

    async function deletePost() {
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (response.ok) {
            navigate("/")
            } else {
                console.log("Something went wrong")
            }

    }

    return (
        <section className="page">
                    <h1>Update post</h1>
                    <form onSubmit={handleSubmit}>

                        <label>Caption</label>
                        <input 
                            type="text" 
                            required
                            placeholder="Type a caption"
                            value={caption} 
                            onChange={event=> setCaption (event.target.value)}>
                        </input>

                        <label>Image</label>
                        <input 
                            type="url" 
                            required
                            placeholder="Paste an image url"
                            value={image} 
                            onChange={event =>setImage(event.target.value)}>
                        </input>

                        <button>Save</button>
                        <input 
                        type="image"
                        src={image} 
                        alt="placeholder"
                        onChange={event =>setImage(event.target.value)}>
                        </input>

                    </form>
                    <button onClick={deletePost}>Delete</button>
        </section>
    );
}
