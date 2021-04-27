import GetAPI from '../API/Blog_Get';
import PostAPI from '../API/Blog_Post';
import DeleteAPI from '../API/Blog_Delete';

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;