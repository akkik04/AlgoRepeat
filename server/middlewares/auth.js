import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const authenticateUser = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw new Error('Token not available');
    }

    const token = authorizationHeader.split(' ')[1];
    if (!token) {
      throw new Error('Token not available');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded._id) {
      throw new Error('Invalid token');
    }

    const user = await User.findById(decoded._id).exec();

    if (!user) {
      throw new Error('User not found');
    }

    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ notice: err.message });
  }
};

export default authenticateUser;
