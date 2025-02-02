import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

//will call student controller
router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getStudents);
router.get('/:id', StudentController.getStudent);
export const StudentRoutes = router;
