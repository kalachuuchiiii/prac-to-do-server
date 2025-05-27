

exports.create = async(Model, req, res) => {
  try{
        const info = await new Model({...req.body}).save();
        
              return res.status(200).json({
                      success: true, 
                      info
                    })
      }catch(e){
        console.log("create", e)
        return res.status(500).json({
        success: false, 
        message: e.message || 'Internal Server Error'
        });
      }
}