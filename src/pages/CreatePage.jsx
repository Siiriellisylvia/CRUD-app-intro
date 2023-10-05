import { useState } from "react";

export default function CreatePage() {

    const [caption, setCaption] = useState("")
    const [image, setImage] = useState("")

    async function createPost(event) {
        event.preventDefault()

        const newPost ={
            caption:caption,
            image:image,
            uid: "ZfPTVEMQKf9vhNiUh0bj"
        }

    const url = "https://potato-meal-planner-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newPost)
    });

    }

    return (
        <section className="page">
            <h1>Create a new post</h1>
            <form onSubmit={createPost}>

                <label>Caption</label>
                <input 
                    type="text" 
                    placeholder="Type a caption"
                    value={caption} 
                    onChange={event=>setCaption(event.target.value)}>
                </input>

                <label>Image</label>
                <input 
                    type="url" 
                    placeholder="Paste an image url"
                    value={image} 
                    onChange={event =>setImage(event.target.value)}>
                </input>

                <button>Save</button> 

            </form>

        </section>
    );
}
