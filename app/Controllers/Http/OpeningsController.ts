import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Opening from 'App/Models/Opening'

export default class OpeningsController {
  public async createOpening({request,response} : HttpContextContract){
    try{
      const openingData = request.only(['name','movements'])
      const opening = new Opening()
      opening.name = openingData.name
      opening.movements = openingData.movements
      await opening.save()
      response.status(202).json({"msg":"Apertura creada con exito"})
  
    }catch(error){
      console.log(error)
      response.status(500).json({"msg":"Error en el servidor"})
    }
  }

  public async getOpeningsNames({response} : HttpContextContract){
    try{
      const openings = await Opening.query().select('name')
      response.status(202)
      return openings.map((opening) => opening.name).sort()
    }catch(error){
      console.log(error)
      response.status(500).json({"msg":"Error en el servidor"})
    }
  }

  public async getAllData({response} : HttpContextContract){
    try{
      const openings = await Opening.all()
      response.status(202)
      return openings
    }catch(error){
      console.log(error)
      response.status(500).json({"msg":"Error en el servidor"})
    }
  }

  public async getOpeningMovesByName({params, response} : HttpContextContract){
    try{
      const openingName = params.openingName.split('%20').join(' ')
      const opening = await Opening.query().where('name',openingName)
      console.log(opening)
      response.status(202)
      return opening[0]
    }catch(error){
      console.log(error)
      response.status(500).json({"msg":"Error en el servidor"})
    }
  }
}
