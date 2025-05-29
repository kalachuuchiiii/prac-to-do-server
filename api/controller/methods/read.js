exports.read = async(Model, req, res) => {
  
    const info = await Model.find();
    return res.status(200).json({
            success: true, 
            info
          })
}