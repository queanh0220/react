import React from 'react'
import { useParams } from 'react-router-dom';

export const Product = (props) => {
  const params = useParams();
  console.log(props);
  let post = props.posts.find(element=>element.slug === params.id)
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p><a className="link" href={post.link} target="_blank">Continue reading...</a></p>
    </div>
  )
}