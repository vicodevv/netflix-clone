const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//create

router.post("/",verify, async(req,res)=>{
    if(req.user.isAdmin ){
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save()
            res.status(200).json(savedMovie)
        } catch (err) {
            res.status(500).json(err)
        }
    } 
    else{
        res.status(403).json("You are not allowed")
    }
})

//update
router.put("/:id",verify, async(req,res)=>{
    if(req.user.isAdmin ){
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
            res.status(200).json(updatedMovie)
        } catch (err) {
            res.status(500).json(err)
        }
    } 
    else{
        res.status(403).json("You are not allowed")
    }
})

//delete
router.delete("/:id",verify, async(req,res)=>{
    if(req.user.isAdmin ){
        try {
           await Movie.findByIdAndDelete(req.params.id)
           res.status(200).json("Movie has been deleted")
        } catch (err) {
            res.status(500).json(err)
        }
    } 
    else{
        res.status(403).json("You are not allowed")
    }
})

//get
router.get("/:id",verify, async(req,res)=>{
        try {
            const movie = await Movie.findById(req.params.id)
            res.status(200).json(movie)
        } catch (err) {
            res.status(500).json(err)
        }
});

module.exports = router