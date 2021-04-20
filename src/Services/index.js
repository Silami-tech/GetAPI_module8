import GetAPI from "./get";
import PostAPI from "./post";
import DeleteAPI from "./delete";

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

const API = {
    getNewsBlog, 
    postNewsBlog,
    deleteNewsBlog
}

export default API;