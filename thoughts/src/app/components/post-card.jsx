import Link from "next/link";

export default function PostCard(props){
	const { post } = props;
	return (
		<div className="postCard">
			<h2 className="postCard__title">
				<Link href={post.slug}>{post.title}</Link>
			</h2>
			<p className="postCard__excerpt">{post.excerpt}</p>
		</div>
	)
}