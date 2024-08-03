export default function PostCard(props){
	const { post } = props;
	return (
		<div className="postCard">
			<p>Item</p>
			<h2 className="postCard__title">{post.title}</h2>
			<p className="postCard__excerpt">{post.excerpt}</p>
		</div>
	)
}