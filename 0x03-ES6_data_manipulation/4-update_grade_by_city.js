export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id); // Find the grade for the student
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A', // Assign grade or 'N/A'
      };
    });
}
