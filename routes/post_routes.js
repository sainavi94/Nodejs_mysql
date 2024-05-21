
const { createPost } = require('../controler/post_controller');

function postRouter(route) {
    route.post('/post/create', createPost);
}



module.exports = postRouter;