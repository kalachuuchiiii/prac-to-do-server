exports.update = async(Model, req, res) => {
  try{
    const upd = req.body?.update
    const info = await Model.findByIdAndUpdate(req?.body?._id, upd, {new:true}); 
    return res.status(200).json({
            success: true, 
            info
          })
      }catch(e){
        console.log("update", e)
        return res.status(500).json({
        success: false, 
        message: e.message || 'Internal Server Error'
        });
      }
}