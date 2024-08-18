import Link from "next/link";
import { format } from "date-fns";

export default function IndexItem(props){
	const { post } = props;
	const rawDate = post.date;
	const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');
	return (
		<div className="post-index-item">
			<h2 className="post-index-item__title">
				<Link href={post.slug}>{post.title}</Link>
			</h2>
			<time className="post-index-item__date" dateTime={rawDate}>{formattedDate}</time>
			<div className="post-index-item__excerpt body-text">
				<p>{post.excerpt}</p>
			</div>
		</div>
	)
}