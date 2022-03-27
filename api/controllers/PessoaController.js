const database = require("../models");

class PessoaController {
  static async showMePessoas(req, res) {
    try {
      const allPeople = await database.Pessoas.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async showMeOnePerson(req, res) {
    const { id } = req.params;
    try {
      const onePerson = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(onePerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonCreated = await database.Pessoas.create(newPerson);
      return res.status(200).json(newPersonCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newInfos = req.body;
    try {
      await database.Pessoas.update(newInfos, { where: { id: Number(id) } });
      const updatedPerson = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async destroyPerson(req, res) {
   const { id } = req.params;
    try{
      await database.Pessoas.destroy({ where: { id: Number(id) }})
      return res.status(200).json(`ID ${id} APAGADO `)
    } catch (error){
      return res.status(500).json(error.message);
    }
  }

}

module.exports = PessoaController;
