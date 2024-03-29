const deleteCourses = "DELETE FROM courses WHERE id = $1";
const getCourses = "SELECT * FROM courses";
const putCourses = "UPDATE courses SET name = $1, description = $2 WHERE id = $3";
const postCourses = "INSERT INTO courses (name, description) VALUES ($1, $2)";


module.exports = {
    deleteCourses,
    getCourses,
    postCourses,
    putCourses,
}
