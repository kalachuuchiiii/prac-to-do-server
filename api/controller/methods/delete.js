const mongoose = require("mongoose");

exports.remove = async(Model, req, res) => {
  try{
    const { id } = req.params; 
    if(!id || !mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({
        message: `Task with ID ${id} is not found`, 
        success: false
      })
    }
    const info = await Model.findByIdAndDelete(id);
    return res.status(200).json({
            success: true, 
            info
          })
      }catch(e){
        console.log("delete", e)
        return res.status(500).json({
        success: false, 
        message: e.message || 'Internal Server Error'
        });
      }
}