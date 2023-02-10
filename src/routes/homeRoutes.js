// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = new Router();

router.get('/', HomeController.index);

export default router;
