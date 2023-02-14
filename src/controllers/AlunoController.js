import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json({ alunos });
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      const { id, nome, email } = aluno;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ msg: 'Algo deu errado.' });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) { return res.status(400).json({ errors: ['Faltando ID'] }); }

      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) { return res.status(404).json({ errors: ['Aluno não existe'] }); }

      const { id, nome, email } = aluno;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ msg: 'Algo deu errado' });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) { return res.status(400).json({ errors: ['Faltando ID'] }); }

      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) { return res.status(404).json({ errors: ['Aluno não existe'] }); }

      await aluno.destroy();
      return res.json('Aluno exclúido.');
    } catch (e) {
      return res.status(400).json({ msg: 'Algo deu errado' });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) { return res.status(400).json({ errors: ['Faltando ID'] }); }

      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) { return res.status(404).json({ errors: ['Aluno não existe'] }); }

      const alunoAtualizado = await aluno.update(req.body);
      const { id, nome, email } = alunoAtualizado;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ msg: 'Algo deu errado' });
    }
  }
}

export default new AlunoController();
