function getAllBlogPost(req,res) {
    res.send("Get Route");
}
function getSpecific(req,res) {
    res.send("Specific route");
}

module.exports = {
    getAllBlogPost,
    getSpecific,
}