const errorMiddleware = (err, req, res, next) => {
console.log("ERROR MIDDLEWARE CALLED !!!")
  const status = err.status || 500;
  const message = err.message || "Backend error";
  const extraDetails = err.extraDetails || "Error from backend";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
