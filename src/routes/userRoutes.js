import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista 1 usuário

router.post('/', userController.store); // Cria usuário
router.put('/', loginRequired, userController.update); // Atualiza usuário
router.delete('/', loginRequired, userController.delete); // Deleta usuário

export default router;
