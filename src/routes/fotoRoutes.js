import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multerConfig';
import FotoController from '../controllers/FotoController';

const upload = multer(multerConfig);
const router = new Router();

router.post('/', upload.single('foto'), FotoController.store);

export default router;
