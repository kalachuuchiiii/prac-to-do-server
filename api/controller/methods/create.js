

exports.create = async(Model, req, res) => {
  
        const info = await new Model({...req.body}).save();
        
              return res.status(200).json({
                      success: true, 
                      info
                    })
}