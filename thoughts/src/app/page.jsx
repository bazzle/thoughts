import IndexItem from "./components/index-item";
import getPostMetadata from "./utils/get-post-metadata";

export default function Home() {
	const postMetaData = getPostMetadata('posts');
	return (
		<main className="main">
			<div className="post-index container--narrow">
				{
					postMetaData.map((post, postIndex) => (
						<IndexItem key={postIndex} post={post}/>
					))
				}
			</div>
		</main>
  	);
}
