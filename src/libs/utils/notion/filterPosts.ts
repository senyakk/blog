import { TPosts, TPostStatus, TPostType } from "src/types"

export type FilterPostsOptions = {
  acceptStatus?: TPostStatus[]
  acceptType?: TPostType[]
}

const initialOption: FilterPostsOptions = {
  acceptStatus: ["Public"],
  acceptType: ["Post"],
}
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(
  posts: TPosts,
  options: FilterPostsOptions = initialOption
) {
  const { acceptStatus = ["Public"], acceptType = ["Post"] } = options
  const filteredPosts = posts
    // filter data
    .filter((post) => {
      const postDate = new Date(post?.date?.start_date || post.createdTime)
      if (!post.title || !post.slug || postDate > tomorrow) return false
      return true
    })
    // filter status
    .filter((post) => {
      const postStatus =
        Array.isArray(post.status) && post.status.length > 0
          ? post.status[0]
          : undefined
      return postStatus && acceptStatus.includes(postStatus)
    })
    // filter type
    .filter((post) => {
      const postType =
        Array.isArray(post.type) && post.type.length > 0
          ? post.type[0]
          : undefined
      return postType && acceptType.includes(postType)
    })
  return filteredPosts
}
