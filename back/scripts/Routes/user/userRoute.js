import { creditUser, deleteUser, editUser, getAllUsers,getUserByToken,login,register } from "./userController.js";
import {Router} from "express";
import { verifyAdmin, verifytoken  } from "./verify.js";
 const userRoute=Router()
  userRoute.post('/login',login);
  userRoute.post('/register',register);
  userRoute.get('/all',getAllUsers)
  userRoute.put('/edit/:id',verifytoken,editUser)
  userRoute.delete('/delete/:id',deleteUser);
  userRoute.post('/token',verifytoken,getUserByToken)
  userRoute.post('/credit',creditUser)



  
  export default userRoute