const router = require("express").Router(); 
const { create } = require("../controller/methods/create.js");
const { read } = require("../controller/methods/read.js");
const { remove } = require("../controller/methods/delete.js");
const { update } = require("../controller/methods/update.js");
const { filter } = require("../controller/methods/filter.js");
const { Task } = require("../model/taskModel.js");
const { errorCatcher } = require("../errorCatcher/errorCatcher.js");
router.post("/create-task", async(req, res) => {
  try{
        const info = create(Task, req, res);
      }catch(e){
        console.log("task", e)
      }
})
router.patch("/update-task", errorCatcher(async(req, res, next) => {
  await update(Task, req, res);
}))
router.get("/filter-task", errorCatcher(async(req, res, next) => {
  await filter(Task, null, req, res);
}))
router.get("/read-task", errorCatcher(async(req, res, next) => {
   await read(Task, req, res)
}))
router.delete("/delete-task/:id", errorCatcher(async(req, res) => {
  await remove(Task, req, res);
}))

module.exports = router;