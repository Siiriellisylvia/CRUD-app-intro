import UserAvatar from "./UserAvatar";

export default function Post({post}) {

    return (
        <article>
			<UserAvatar uid={post.uid} />
            <img src={post.image} alt={post.caption} />
            <h2>{post.caption}</h2>
        </article>    
        );
}