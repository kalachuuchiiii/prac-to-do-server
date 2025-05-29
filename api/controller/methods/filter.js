exports.filter = async(Model, filter = null, req, res) => {
    const filters = filter || JSON.parse(req.query?.filters) || null;
    if(!filters){
      return res.status(400).json({
      success: false, 
      message: "Missing filter"
      });
    }
    
    if(!Array.isArray(filters)){
      const info = await Model.find(filters).sort({createdAt:-1}).lean();
      return res.status(200).json({
              success: true, 
              info
            })
    }
    
    const info = await Promise.all(filters.map(async(f) => ({
      filter: f, 
      data: await Model.find(f).sort({createdAt:-1}).lean()
    })))
    
        return res.status(200).json({
                success: true, 
                info
              })
}