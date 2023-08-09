const Hero = require('../models/hero')

const controllerHero={
    create : async(req, res)=>{
        try {
            const name = req.body.name
            await Hero.create({
                name: name,
            })
            res.json({msg:'created'})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getHero : async(req,res)=>{
        try {
            const heroes = await Hero.find({})
            res.json(heroes)
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getHeroesByIds : async(req,res) =>{
        try {
            const {id}= req.params
            const hero= await Hero.findById(id)
            res.json(hero)
        } catch (error) {
            return res.status(500).json({msg:error.message})

            
        }
    },
    updateHero: async (req,res) =>{
            try {
                const {id} = req.params
                const name = req.body.name
                await getHero.findByIdAndUpdate(id,
                    {
                    name:name,
                    })
                    res.json({msg:'update'})
            } catch (error) {
                return res.status(500).json({msg:error.message})                                    
            }
        },
    deleteHero: async (req,res) =>{
            try {
                const {id} = req.params
                await Hero.findByIdAndDelete(id)
                res.json({msg:'Delete'})
            } catch (error) {
                return res.status(500).json({msg:error.message})                                         
            }
        }

}
module.exports = controllerHero
