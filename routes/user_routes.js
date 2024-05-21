
const { createUser, getAllUsers } = require('../controler/user_controller');

function userRouter(route) {
    route.post('/user/create', createUser);
    route.get('/user/all', getAllUsers);
}




module.exports = userRouter;