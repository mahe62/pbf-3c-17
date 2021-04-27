import GetAPI from '../API/Komen_Get';
import PostAPI from '../API/Komen_Post';
import DeleteAPI from '../API/Komen_Delete';

const getNewsComment = () => GetAPI('comment?_sort=id&_order=desc');
const postNewsComment = (dataYgDikirim) => PostAPI('comment', dataYgDikirim);
const deleteNewsComment = (dataYgDihapus) => DeleteAPI('comment', dataYgDihapus);

const API = {
    getNewsComment,
    postNewsComment,
    deleteNewsComment
}
export default API;