import React, {useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

    const [blogPosts, setBlogPosts] = useState([]);

    addBlogPost = () => {
        setBlogPosts([...blogPosts,{title:`Blog post title #${blogPosts.length++}`}]);
    }

    return <BlogContext.Provider value={{data:blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>;
}

export default BlogContext;