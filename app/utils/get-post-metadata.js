import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath){
	const folder = './posts/blog-posts';
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter(file => file.endsWith('.md'));
	// Get file data
	const posts = markdownPosts.map((fileName) => {
		const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
		const matterResult = matter(fileContents)
		return {
			dateRaw : Number(matterResult.data.date.replace(/\D/g, '')),
			title : matterResult.data.title,
			date : matterResult.data.date,
			excerpt : matterResult.data.excerpt,
			tags : matterResult.data.tags,
			slug : fileName.replace('.md','')
		}
	});

	const sortByFirstValue = (arr) => {
		return arr.sort((a, b) => {
			// Assuming the first value is always the property at index 0
			const firstValueA = Object.values(a)[0];
			const firstValueB = Object.values(b)[0];
			// Convert to numbers and compare
			return firstValueA - firstValueB;
		});
	}

	const sortedPosts = sortByFirstValue(posts);

	return sortedPosts
}

