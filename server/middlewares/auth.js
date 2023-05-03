import User from "../models/user.js";
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('x-auth');
    const user = await User.findByToken(token);
    if (!user) {
      throw new Error('Token not available');
    }
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ notice: err.message });
  }
};

export default authenticateUser;
