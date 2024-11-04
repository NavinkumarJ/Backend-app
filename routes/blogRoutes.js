const router = require("express").Router();

const BlogControllers = require("../controllers/blogControllers");
router.get("/getAllBlogPost", BlogControllers.getAllBlogPost);
router.get("/getSpecific", BlogControllers.getSpecific);

module.exports = router;