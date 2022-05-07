import './App.css';
import { ITSchool } from './models/ITSchool';

function renderLessons(lessons) {
  return lessons.map(lesson => (
      <div className="lesson" key={lesson.lessonName + Date.now()}>
        <div className="lessonItem">{lesson.lessonName} : </div>
        <div className="lessonItem">{lesson.topics && lesson.topics.toString()}</div>
      </div>
    )
  );
}

function renderGroup(group, index) {
  return (
    <div>
      <div className="group" key={group.courseName + group.teacherName}>
        <div className="groupItem">Group: {index}</div>
        <div className="groupItem">for course: {group.courseName}</div>
        <div className="groupItem">with teacher: {group.teacherName}</div>
        <div className="groupItem">students: {group.amountOfStudents}</div>
      </div>
      <div className="finishedTopics">
        <span className="topics">Finished topics:</span>
        {renderLessons(group.passedLessons)}
      </div>
    </div>
  );
}

function renderGroups(school, courseName) {
  return school.getLearningGroupByCourseName(courseName).map((group, index )=> renderGroup(group, index));
}

function renderCourse(school, course) {
  return (
    <div className="container" key={course.courseName}>
      <div className="course">
        <div className="courseItem">Course name: {course.courseName}</div>
        <div className="courseItem">total lessons: {course.totalLessons}</div>
        <div className="courseItem">teachers available: {course.availableTeachersAmount}</div>      
      </div>
      {renderGroups(school, course.courseName)}
    </div>
  );
}

function renderCourses(school) {
  return school.availableCourses.map(course => renderCourse(school, course))
}

function renderUpdate(message, school) {
  return (
    <div className="schoolCourses">
      <div className="message">{message}</div>
      <div className="courses">{renderCourses(school)}</div>
    </div>
  );
}

function renderSchool(school) {
  return (
    <div className="school">
      <div className="schoolName">{school.schoolName}</div>
      <div className="description">{school.description}</div>
      <div className="maxCounts"><span>Max groups: </span>{school.maxGroups}</div>
      <div className="maxCounts"><span>Max students: </span>{school.maxStudents }</div>
    </div>
  );
}

function renderSchoolStateMarch(school) {
  school.registerCourse("React", 38, 3);
  school.registerCourse("Vue", 21, 2);
  school.startLearningGroup("React", "Vasya", 15);
  school.startLearningGroup("React", "Petya", 10);
  school.startLearningGroup("Vue", "Sacha", 12);
  return renderUpdate("1st of March: We started 2 courses and 3 new groups!", school);
}

function renderSchoolStateApril(school) {
  school.startLearningGroup("React", "Evgen", 7);
  // This group should not go
  school.startLearningGroup("React", "Petya2", 10);
  // Set done lessons
  school.getLearningGroupByCourseName("React").map(group => {
    group.doneLesson("Create application", ["Problem", "Solution", "Discussion"]);
    group.doneLesson("Routing", ["Responsive Routes", "Memory Routes", "Secured Routes"]);
    group.doneLesson("Managing states", ["Problem", "Solution", "Discussion"]);
    return group;
  });
  return renderUpdate("1st of April: 1 new group and 3 done lessons on React!", school);
}

function renderSchoolStateMay(school) {
  school.endLearningGroup("Vue", "Sacha");
  // Set done lessons
  school.getLearningGroupByCourseName("React").map(group => {
    group.doneLesson("Interaction design", ["Reducers", "Markdown", "Classes"]);
    group.doneLesson("Connecting to Services", ["Problem", "Solution", "Discussion"]);
    return group;
  });
  return renderUpdate("1st of May: Sorry, Vue group was closed...", school);
}

function App() {
  let school = new ITSchool("IT School", "Online IT school", 10, 25);
  return (
    <div className="App">
      <header className="App-header">
        {renderSchool(school)}
      </header>
      <div className="App-body">
        {renderSchoolStateMarch(school)}
        {renderSchoolStateApril(school)}
        {renderSchoolStateMay(school)}
      </div>
    </div>
  );
}

export default App;
