import PostCard from "./components/post-card";
import getPostMetadata from "./utils/get-post-metadata";

export default function Home() {
	const postMetaData = getPostMetadata('posts');
	return (
		<main className="main">
			<p>My posts here</p>
			{
				postMetaData.map((post, postIndex) => (
					<PostCard key={postIndex} post={post}/>
				))
			}
		</main>
  	);
}
