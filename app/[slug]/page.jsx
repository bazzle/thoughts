import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/get-post-metadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"
import { format } from "date-fns"
import Link from "next/link"
import Header from "@/components/header"

function getPostContent(slug){
	const file = `./posts/blog-posts/${slug}.md`;
	const content = fs.readFileSync(file,'utf8');
	const matterResult = matter(content);
	return matterResult;
}

export const generateStaticParams = async () => {
	const posts = getPostMetadata('posts');
	return posts.map((post) => ({slug: post.slug}))
}

export async function generateMetadata({params, searchParams}){
	const pageName = getPostContent(params.slug).data.title;
	const pageTitle = `${pageName} - My Thoughts`;
	return{
		title: pageTitle
	}
}

export default function postPage(props) {
	const slug = props.params.slug
	const post = getPostContent(slug)
	const date = post.data.date;
	const formattedDate = format(new Date(post.data.date), 'MMMM dd, yyyy');
	return (
		<>
		<Header isHomePage={false}/>
		<main className="main">
			<article>
				<div className="article-hero container">
					<h1 className="article-hero__heading">{post.data.title}</h1>
					<div className="article-hero__metadata text-meta">
						<time dateTime={date}>{formattedDate}</time>
					</div>
				</div>
				<div className="article-main body-text container--narrow">
					<Markdown>{post.content}</Markdown>
				</div>
				<div className="article__back container--narrow">
					<Link href="/">Back to home</Link>
				</div>
			</article>
		</main>
		</>
	)
}