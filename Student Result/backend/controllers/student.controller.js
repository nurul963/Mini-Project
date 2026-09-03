import Student from '../models/Student.js'
export const createStudent = async (req, resp) => {
    const data = req.body;
    if (data.length > 1) {
        const students = await Student.insertMany(data);
        return resp.status(201).json({
            success: true,
            message: "All Student created successfully",
            data:students
        })
    }
    const student = await Student.create(req.body);
    resp.status(201).json({
        success: true,
        message: "Student created successfully",
        data: student
    })
}
export const getAllStudents = async (req, resp) => {
    const students = await Student.find()
        .populate("classId");
    resp.status(200).json({
        success: true,
        count: students.length,
        data: students
    })
}
export const getStudentById = async (req, resp) => {
    const student = await Student.findById(req.params.id)
        .populate("classId");
    if (!student) {
        return resp.status(404).json({
            success: false,
            message: "Student not found"
        })
    }
    resp.status(200).json({
        success: true,
        data: student
    })
}
export const updateStudent = async (req, resp) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );
    if (!student) {
        return resp.status(404).json({
            success: false,
            message: "Student not found"
        })
    }
    return resp.status(200).json({
        success: true,
        message: "Student updated successfully",
        data: student
    })

}
export const deleteStudent = async (req, resp) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
        return resp.status(404).json({
            success: false,
            message: "Student not found"
        })
    }
    return resp.status(200).json({
        success: true,
        message: "Student deleted successfully",
    })
}