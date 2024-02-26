const express = require("express");
const {startCore, startgNB} = require("../controllers/controlNW");
const router  = express.Router();
router.get("/", (req,res)=>{
    res.status("Hello world")
})
router.post("/core-network/start", startCore);
router.post("/base-station/start",sartgNB);
module.exports = router;