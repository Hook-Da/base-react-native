import createDataContext from './createDataContex';

//const BlogContext = React.createContext();

const blogReducer = (state, action) =>{
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title:`Blog post #${state.length++}`}];
        default:
            return state;
    }
}

const addBlogPost = (trigerFunc) => {
    return () => {
        trigerFunc({ type: 'add_blogpost' });
    }
};

export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost},[])