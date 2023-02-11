import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'mariazinha@gmail.com',
      idade: 26,
      peso: 75,
      altura: 1.60,
    });
    res.json({ novoAluno });
  }
}

export default new HomeController();
