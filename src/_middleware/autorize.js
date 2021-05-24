
import jwt from 'express-jwt';
import config from '../configs/config.js';
import User from '../models/user.model.js';



function authorize() {
  const secret = config.secret;
  return [
    // authenticate JWT token and attach decoded token to request as req.user
    //    jwt({ secret, algorithms: ['HS256'] }),
    jwt({ secret, algorithms: ['HS256'] }),

    // attach full user record to request object
    async (req, res, next) => {
      // get user with id from token 'sub' (subject) property
      const user = await User.findByPk(req.user.sub);

      // check user still exists
      if (!user)
        return res.status(401).json({ message: 'Unauthorized' });

      // authorization successful
      req.user = user.get();
      next();
    }
  ];
}

export default authorize;
