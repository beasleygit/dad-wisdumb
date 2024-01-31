import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'app/products')

interface PostData {
  id: string
  date: string
  title: string
  contentHtml: string
  notFound: boolean
}

export function getSortedPostsData(): PostData[] {
  // Get file names under post directory
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Omit<PostData, 'id'>),
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function singlePost(slug: string): Promise<PostData | { notFound: true }> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
  
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Create a new object for the post data, excluding contentHtml if it exists in matterResult.data
    const postData: Omit<PostData, 'contentHtml'> = {
      id: slug,
      ...(matterResult.data as Omit<PostData, 'id' | 'contentHtml'>),
    }

    // Now add contentHtml explicitly
    return {
      ...postData,
      contentHtml,
    }
  } catch (error) {
    console.error((error instanceof Error) ? error.message : 'An error occurred')
    return { notFound: true }
  }
}