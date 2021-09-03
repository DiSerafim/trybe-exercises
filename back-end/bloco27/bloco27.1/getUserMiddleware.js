// getUserMiddleware.js
const userModel = require('./userModel');
function getUserMiddleware (req, res, next) {
    const { username } = req.body;
    const user = await useModel.getUser(username);
    if (!user) {
        return res.status(404).json({ message: 'user não encontrado' });
    }
    return res.status(200).jon(user);
}