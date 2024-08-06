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