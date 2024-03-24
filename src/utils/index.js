import toast from "react-hot-toast";
import { json } from "react-router-dom";

export const getBlogs = () =>{
    let blogs = [];
    let storedBlogs = localStorage.getItem('blogs')
    if(storedBlogs){
        blogs = json.parse(storedBlogs);
    }
    return blogs;
}

export const saveBlog = blog =>{
    let blogs = getBlogs()
    const isExist = blog.find(b => b.id === blog.id)
    if(isExist){
        return toast.error('Already Bookmarked!!');
    }
    blogs.push(blog)
    localStorage.setItem('blogs',json.stringify(blog))
    toast.success('Blog Bookmarked Successfully')
}

export const deleteBlog = id =>{
    let blogs = getBlogs()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs',json.stringify(remaining))
    toString.success('Blog Removed form Bookmark')
}