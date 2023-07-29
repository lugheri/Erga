import { Router } from 'express';
import UserController from '../controllers/UserController';

export default (routes: Router) => {
  routes.get('/getUser/:userId',UserController.getUser)
 
}