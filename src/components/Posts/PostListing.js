import React, { Component } from 'react';
import { Link } from 'gatsby'

const PostListing = ({post}) => (
<article>
   <h3>{post.frontmatter.title}</h3>
   <p>
      {post.excerpt}
   </p>
   <div dangerouslySetInnerHTML = {{
      __html: post.html
   }}/>
   </article>
);

export default PostListing;