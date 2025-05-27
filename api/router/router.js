const router = require("express").Router(); 
const { create } = require("../controller/methods/create.js");
const { read } = require("../controller/methods/read.js");
const { remove } = require("../controller/methods/delete.js");
const { update } = require("../controller/methods/update.js");
const { filter } = require("../controller/methods/filter.js");
const { Task } = require("../model/taskModel.js");

router.post("/create-task", async(req, res) => {
  try{
        const info = create(Task, req, res);
      }catch(e){
        console.log("task", e)
      }
})
router.patch("/update-task", async(req, res) => {
  await update(Task, req, res);
})
router.get("/filter-task", async(req, res) => {
  await filter(Task, null, req, res);
})
router.get("/read-task", async(req, res) => {
  
   await read(Task, req, res)
     
})
router.delete("/delete-task/:id", async(req, res) => {
  await remove(Task, req, res);
})

module.exports = router;