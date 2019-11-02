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