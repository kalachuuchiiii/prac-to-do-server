exports.read = async(Model, req, res) => {
  try{
    const info = await Model.find();
    return res.status(200).json({
            success: true, 
            info
          })
      }catch(e){
        console.log("read", e)
        return res.status(500).json({
        success: false, 
        message: e.message || 'Internal Server Error'
        });
      }
}