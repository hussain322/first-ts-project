import { z } from 'zod';
// Define Zod schema for UserName
const UserNameValidationSchema = z.object({
  firstName: z.string().min(2).max(50),
  middleName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50),
});

// Define Zod schema for Guardian
const GuardianValidationSchema = z.object({
  fatherName: z.string().min(2).max(50),
  fatherOccupation: z.string().min(2).max(50),
  fatherContactNo: z.string().min(10).max(15),
  motherName: z.string().min(2).max(50),
  motherOccupation: z.string().min(2).max(50),
  motherContactNo: z.string().min(10).max(15),
});

// Define Zod schema for LocalGuardian
const LocalGuardianValidationSchema = z.object({
  name: z.string().min(2).max(50),
  occupation: z.string().min(2).max(50),
  contactNo: z.string().min(10).max(15),
  address: z.string().min(5).max(255),
});

// Define Zod schema for Student
const StudentSchema = z.object({
  id: z.string().uuid().optional(),
  name: UserNameValidationSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z
    .string()
    .max(8, { message: 'Date of birth must be in YYYY-MM-DD format' })
    .regex(/^\d{4}-\d{2}-\d{2}$/),

  email: z.string().email(),
  contactNo: z.string().min(10).max(15),
  emergencyContactNo: z.string().min(10).max(15),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
  presentAddress: z.string().min(5).max(255),
  permanentAddress: z.string().min(5).max(255),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImage: z.string().url().optional(),
  isActive: z.enum(['active', 'blocked']),
});

// Export the Zod schema
export const StudentValidationSchema = StudentSchema;
