exports.update = async(Model, req, res) => {
    const upd = req.body?.update
    console.log(upd)
    const info = await Model.findByIdAndUpdate(req?.body?._id, upd, {new:true}); 
    return res.status(200).json({
            success: true, 
            info
          })

}