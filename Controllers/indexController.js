const indexController={
    index(req,res){
        res.render('index')
    },
    register(req,res){
        res.render("register")
    }
}
module.exports=indexController;