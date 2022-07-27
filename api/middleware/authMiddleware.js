/**
 * This function(middleware) runs before controller
 * check if the sessions object has a user property is attached to it.
 * if yes - then forward to controller, else error.
 */

const protect = async (req, res, next) => {
  try {
    const { user } = await req.session;
    if (!user) {
      return res.status(401).json({ status: "Failed", msg: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(`Middleware Failed with error ${error}`);
  }
};

module.exports = protect;
