import jwt from "jsonwebtoken";

type TokenProps = {
  id: string;
  expiresIn: string;
  email?: string;
};

const JWT_SEC = process.env.JWT_SEC || "";

// token
const verifyToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SEC, (err: any, user: any) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Session expired. Login to continue" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "You are not authenticated!" });
  }
};

const verifyTokenAndAuthorization = (req: any, res: any, next: any) => {
  verifyToken(req, res, () => {
    if (req.user) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "You are not allowed to perform this operation!" });
    }
  });
};

const generateToken = (props: TokenProps) => {
  const token = jwt.sign({ id: props.id, email: props.email }, JWT_SEC, {
    expiresIn: props.expiresIn,
  });

  return token;
};

export { jwt, verifyToken, verifyTokenAndAuthorization, generateToken };
// module.exports = { verifyToken, verifyTokenAndAuthorization, jwt };
