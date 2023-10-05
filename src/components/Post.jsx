import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function Post({post}) {

    const navigate= useNavigate()
    function handleClick() {
        navigate(`posts/${post.id}`)
    }

    return (
        <article onClick={handleClick}>
			<UserAvatar uid={post.uid} />
            <img src={post.image} alt={post.caption} />
            <h2>{post.caption}</h2>
        </article>    
        );
}