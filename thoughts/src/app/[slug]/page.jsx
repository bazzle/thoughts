import Markdown from "markdown-to-jsx"
import getPostMetadata from "../utils/get-post-metadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"
import { format } from "date-fns"

function getPostContent(slug){
	const file = `./posts/${slug}.md`;
	const content = fs.readFileSync(file,'utf8');
	const matterResult = matter(content);
	return matterResult;
}

export const generateStaticParams = async () => {
	const posts = getPostMetadata('posts');
	return posts.map((post) => ({slug: post.slug}))
}

export async function generateMetadata({params, searchParams}){
	const id = params.slug ? ' . ' + params.slug : ''
	return{
		title: `My thoughts ${id.replaceAll('_', ' ')}`
	}
}

export default function postPage(props) {
	const slug = props.params.slug
	const post = getPostContent(slug)
	const date = post.data.date;
	const formattedDate = format(new Date(post.data.date), 'MMMM dd, yyyy');
	return (
		<main className="main">
			<article>
				<div className="article-hero container">
					<h1 className="article-hero__heading">{post.data.title}</h1>
					<div className="article-hero__metadata text-meta">
						<time dateTime={date}>{formattedDate}</time>
					</div>
				</div>
				<div className="article-main container--narrow">
					<Markdown>{post.content}</Markdown>
				</div>
			</article>
		</main>
	)
}