import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //will call student service
    const result = await StudentServices.createStudentIntoDB(studentData);

    res
      .status(200)
      .json({ message: 'Student created successfully', data: result });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err });
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    //will call student service
    const result = await StudentServices.getStudentsFromDB();

    res
      .status(200)
      .json({ message: 'Students fetched successfully', data: result });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err });
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    //will call student service

    const id = req.params.id;
    const result = await StudentServices.getSingleStudentFromDB(id);

    res
      .status(200)
      .json({ message: 'Student fetched successfully', data: result });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err });
  }
};
export const StudentController = {
  createStudent,
  getStudents,
  getStudent,
};
