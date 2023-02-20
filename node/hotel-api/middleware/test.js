function test(req, res, next){
    console.log("Test middleware Active")
    next()
}

module.exports = test;