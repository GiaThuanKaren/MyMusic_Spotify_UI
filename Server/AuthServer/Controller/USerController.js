const UserController = {
    getUser:function(req,res){
        res.send("User Controller ")
    },
    AddFriend(req,res){
        
        res.send("Add Friend")
    }

}

module.exports = UserController