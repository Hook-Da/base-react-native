import createDataContext from './createDataContex';

//const BlogContext = React.createContext();

const blogReducer = (state, action) =>{
    switch(action.type){
        case 'delete_blogpost':
            const newArr = [...state].filter((item) => { return item.id !== action.id;});
            console.log('%c++','background:lime',newArr);
            return [...newArr];
        case 'add_blogpost':
            return [...state, {
                title:action.payload.title,
                content:action.payload.content,
                id:Math.floor(Math.random()*99999)
            }];
        default:
            return state;
    }
}
const addBlogPost = (trigerFunc) => {
    return (title, content,callback) => {
        trigerFunc({ type: 'add_blogpost', payload:{title, content }});
        callback();
    }
};
const deleteBlogPost = (trigerFunc) =>{
    return (id) => {        
        console.log('%c++', 'background:black', id);
        trigerFunc({type: 'delete_blogpost', id});
    }
}
export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost},[
    {title:'Test title',content:'Test content',id:1}
])
/* 
import React, { useReducer } from 'react';
export default (reducer = blogReducer, actions = {addBlogPost}, initialState = []) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        //actions === {addBlogPost: (dispatch) => {return () => {}}}
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider };
} */