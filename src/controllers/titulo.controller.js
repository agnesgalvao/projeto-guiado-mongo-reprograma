


const mongoose = require('mongoose')
const titulos = require('../model/titulo')




const postNewTitle = async (req, res)=>{

    const titulo = new titulos ({
 _id: new mongoose.Types.ObjectId(),

    nome: req.body.nome,
    genero : req.body.genero,
    descricao : req.body.descricao,
    estudio: req.body.estudio, 

    criadoEm: req.body.criadoEm
    })

const verificacao = await titulos.findOne( {nome:req.body.nome })
if(verificacao){


return res.status(409).json("error: Titulo já cadastrado")


}


try{  const novoTitulo = await titulo.save()
res.status(201).json(novoTitulo)


}catch(err){

       res.status(500).json( {message: err.message})

}




}

const GetAllTitles = async ( req, res)=>{

  const Titulos = await titulos.find().populate('estudio')

  try{ res.status(200).json(Titulos)}catch(err){

    res.status(500).json({message: err.message})

  }


}



const GetAllGhibliTitles = async (req, res)=>{

    const Titulos = await titulos.find().populate('estudio')


    const titulosFiltrados = Titulos.filter( titulo => titulo.estudio.nome == 'ghibli' )

try{ res.status(200).json(titulosFiltrados)}catch(err){
    res.status(500).json({message: err.message})

}

}


const GetAllMarvelTitles = async (req, res)=>{

  const Titulos = await titulos.find().populate('estudio')


  const titulosFiltrados = Titulos.filter( titulo => titulo.estudio.nome == 'marvel' )

try{ res.status(200).json(titulosFiltrados)}catch(err){
  res.status(500).json({message: err.message})

}

}

const GetAllPixarTitles = async (req, res)=>{

  const Titulos = await titulos.find().populate('estudio')


  const titulosFiltrados = Titulos.filter( titulo => titulo.estudio.nome == 'pixar' )

try{ res.status(200).json(titulosFiltrados)}catch(err){
  res.status(500).json({message: err.message})

}

}



const updateTitleById = async (req, res) => {
  try{
      const titulo = await titulos.findById(req.params.id)
      if(titulo == null){
      return res.status(400).json({message: "id invalido"})
      }
      if (req.body.nome != null) {
          titulo.nome = req.body.nome
      }
   
      if (req.body.genero != null) {
        titulo.genero = req.body.genero
      }
      if (req.body.descricao != null) {
        titulo.descricao = req.body.descricao
      }

      if (req.body.estudio != null) {
        titulo.estudio = req.body.estudio
      }
      
      const update = await titulo.save()
      res.json({'menssagem': 'Atualizado!', 'vizualização': update})    

  } catch (err) {
      return res.status(500).json({ message: `Não foi possivel concluir a solicitação erro: ${err.message}` })
  }
}




const deleteTitleById = async(req, res)=>{

  try{
      const title = await titulos.findById(req.params.id)
      if(title == null){
      return res.status(400).json({message: 'id invalido'})
      }
      await title.remove()
      res.json({ message: 'Titulo Deletado com sucesso!'})    
  } catch (err) {
      return res.status(500).json({ message:  `Não foi possivel concluir a solicitação erro: ${err.message}` })
  }






}


module.exports = {

postNewTitle, GetAllTitles,
GetAllGhibliTitles,
GetAllMarvelTitles, GetAllPixarTitles,
deleteTitleById,
updateTitleById
}

