import { Router } from 'express';
import { listHouse, getHouse, newHouse, modifyHouse, deleteHouse } from '../controllers/HouseController';
const router = Router();

router.get('/house', listHouse);
router.get('/onehouse', getHouse);
router.post('/house', newHouse);
router.delete('/house', deleteHouse);
router.put('/house', modifyHouse);

export default router;
