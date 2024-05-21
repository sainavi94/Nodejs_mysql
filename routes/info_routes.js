const { createInfo } = require('../controler/info_controller');


function infoRouter(router) {
    router.post('/info/create', createInfo);
}


module.exports = infoRouter;



