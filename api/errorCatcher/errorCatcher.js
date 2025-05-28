
exports.errorCatcher = (fn) => async(req, res, next) => {
    try{
          await fn(req, res, next);
        }catch(e){
          console.log(e)
          return res.status(500).json({
            success: false, 
            message: e.message || "Internal Server Error"
          })
        }
  }
