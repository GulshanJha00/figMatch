const express = require("express")
const uploadQuestion = require("../controllers/uploadQuestion")
const getQuestion = require("../controllers/getQuestion")
const deleteQuestion = require("../controllers/deleteQuestion")
const getTarget = require("../controllers/getTarget")
const getSolution = require("../controllers/getSolution")
const checkOrCreateUser = require("../controllers/checkOrCreateUser");
const getUser = require("../controllers/getUser")
const router = express.Router()

//post routes

router.post("/api/upload-question",uploadQuestion)
router.post("/api/get-target",getTarget)
router.post("/api/get-solution",getSolution)
router.post("/api/user/check-or-create", checkOrCreateUser);
router.post("/api/get-user", getUser);



//get routes

router.get("/api/get-question",getQuestion)
router.delete("/api/delete-question/:id",deleteQuestion)



module.exports =  router