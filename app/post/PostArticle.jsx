import { usePostContext } from "../assets/context";

const PostArticle = () => {
    const {postItem} = usePostContext();

  return (
    <h1>{postItem.title.rendered}</h1>
  )
}

export default PostArticle