const jwt = require('jsonwebtoken');
const SECRET = "sometext";



const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing or malformed" });
    }

    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized access", error: error.message });
  }
};
// const authenticate = (req, res, next) => {
//   try {
//     let token = req.headers.authorization;
//     //today
    
   
//     token = token.split(" ")[1];
//     const user = jwt.verify(token, SECRET);
//     req.user = user; 
//     req.role = user.role;
//     next();
//   } catch (err) {
//     console.log(err);
//     return res.json({ message: "Invalid Token" });
//   }
// };

const authorize = (role) => {
  return (req, res, next) => {
    if (role === req.role) {
      next();
    } else {
      return res.json({ message: "Unauthorized access" });
    }
  };
};

module.exports = { authenticate, authorize };
