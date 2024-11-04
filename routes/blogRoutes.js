const router = require("express").Router();

const BlogControllers = require("../controllers/blogControllers");
router.get("/getAllBlogPost", BlogControllers.getAllBlogPost);

module.exports = router;