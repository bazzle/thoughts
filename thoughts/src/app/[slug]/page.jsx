import Markdown from "markdown-to-jsx"
import getPostMetadata from "../utils/get-post-metadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"

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

export default function thoughtPage(props) {
	const slug = props.params.slug
	const post = getPostContent(slug)
	console.log(post)
	return (
		<main>
			<article>
				<h1>{post.data.title}</h1>
				<div className="content">
					<Markdown>{post.content}</Markdown>
					
				</div>
			</article>
		</main>
	)
}