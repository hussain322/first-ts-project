import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

//post request
router.post('/create-student', StudentController.createStudent);

//get request
router.get('/', StudentController.getAllStudents);

//get single student
router.get('/:studentId', StudentController.getSingleStudent);

export const StudentRoutes = router;
