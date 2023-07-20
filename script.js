function calculateGPA() {
    for(var i=0; i<)
}
var semesterCount = 0;
addSemester(); // 7ut semester awl m yfut 3l web page
var calculateButton = document.getElementById("calculate");
//calculateButton is declared and assigned the element with the id "calculate". This variable is used to enable/disable a calculate button based on the number of semesters added.

function addSemester() {
  semesterCount++;
  let semesterContainer = document.getElementById("semester-container"); //b3ayet lal div mn l id tb3a
  let newsemester = document.createElement("div");
  newsemester.id = "semester";
  newsemester.className = "semesterClass";
  newsemester.innerHTML = `<h3>Semester ${semesterCount}</h3><button onclick="addCourse(this.parentNode)">Add Course</button><button onclick="removeSemester(this.parentNode)">Remove Semester</button>`;

  semesterContainer.appendChild(newsemester);

  addCourse(newsemester);
  calculateButton.disabled = false;
}

function addCourse(semesterDiv) {
  var newCourse = document.createElement("div");
  newCourse.className = "course";

  var courseName = document.createElement("input");
  courseName.type = "text";
  newCourse.appendChild(courseName);

  var courseCredit = document.createElement("input");
  courseCredit.type = "number";
  newCourse.appendChild(courseCredit);

  var gradesSelectInput = document.createElement("select");
  var initialOption = document.createElement("option");
  initialOption.text = "Select Grade";
  initialOption.disabled = true;
  initialOption.selected = true;
  gradesSelectInput.appendChild(initialOption);
  var removeCourse = document.createElement("button");

  let crossIcon = document.createElement("i");
  crossIcon.className = "lni lni-cross-circle";
  removeCourse.appendChild(crossIcon);
  removeCourse.onclick = function () {
    removeCourseFunction(newCourse);
  };

  newCourse.appendChild(removeCourse);

  var grades = [
    "A",
    "A+",
    "A-",
    "B",
    "B+",
    "B-",
    "C",
    "C+",
    "C-",
    "D",
    "D+",
    "D-",
  ];

  for (let i = 0; i < grades.length; i++) {
    let option = document.createElement("option");
    option.value = grades[i];
    option.text = grades[i];
    gradesSelectInput.appendChild(option);
  }
  newCourse.appendChild(gradesSelectInput);

  semesterDiv.appendChild(newCourse); //3mlna add lal new course 3l semester div
}

function removeCourseFunction(course) {
  course.remove();
}

//this.parentNode heye zeta l argument semester hon
function removeSemester(semester) {
  semester.remove();
  semesterCount--;
  if (semesterCount === 0) calculateButton.disabled = true;
}
