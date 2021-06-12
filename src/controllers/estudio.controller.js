


const estudios = require('../model/estudio')
const mongoose = require('mongoose')





const postNewStudio  = async (req, res)=>{

           const estudio = new estudios ({
        _id: new mongoose.Types.ObjectId(),

           nome: req.body.nome,

           criadoEm: req.body.criadoEm
           })

  const verificacao = await estudios.findOne( {nome:req.body.nome })
 if(verificacao){


    return res.status(409).json("error: Estudio já cadastrado")


 }


    try{  const novoestudio = await estudio.save()
    res.status(201).json(novoestudio)
    
    
    }catch(err){

              res.status(500).json( {message: err.message})

    }




}


const GetAllStudios = async  (req, res)=> {
     
    const Estudios = await estudios.find()

try{  res.status(200).json(Estudios) }catch(err){
    res.status(500).json({message: err.message})
}
  

}



const updateEstudioById = async (req, res) => {
    try{
        const estudio = await estudios.findById(req.params.id)
        if(estudio == null){
        return res.status(400).json({message: "id invalido"})
        }
        if (req.body.nome != null) {
            estudio.nome = req.body.nome
        }
      
        const update = await estudio.save()
        res.json({'menssagem': 'Estudio Atualizado!', 'vizualização': update})    
  
    } catch (err) {
        return res.status(500).json({ message: `Não foi possivel concluir a solicitação erro: ${err.message}` })
    }
  }

const deleteStudioById = async(req, res)=>{

    try{
        const estudio = await estudios.findById(req.params.id)
        if(estudio == null){
        return res.status(400).json({message: 'id invalido'})
        }
        await estudio.remove()
        res.json({ message: 'Estudio Deletado com sucesso!'})    
    } catch (err) {
        return res.status(500).json({ message:  `Não foi possivel concluir a solicitação erro: ${err.message}` })
    }
  
  
  
  
  
  
  }




module.exports = {

    postNewStudio,
    GetAllStudios,
    deleteStudioById,
    updateEstudioById



}