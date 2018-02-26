var allClasses;
allClasses = [
    {
        course: "English 101",
        eLevel: ["Associate's", "Bachelor's", "Master's", "Doctorate"],
        semester: ["Spring", "Fall"],
        degree: ["Computer Science", "Law", "Finance"],
        rating: 5,
        img: "img/liberal_arts.jpg",
        instructor: "Professor A",
        description: "This is an entry level English course.",
        size: 35,
        hasRegistered: false,
        id: 1
    },
    {
        course: "Algorithms",
        eLevel: ["Bachelor's", "Master's"],
        semester: ["Spring", "Fall", "Summer"],
        degree: ["Computer Science"],
        rating: 5,
        img: "img/cs.jpg",
        instructor: "Professor A",
        description: "This is an advanced computer science course.",
        size: 35,
        hasRegistered: false,
        id: 2
    },
    {
        course: "Law 401",
        eLevel: ["Master's", "Doctorate"],
        semester: ["Spring", "Fall"],
        degree: ["Law"],
        rating: 5,
        img: "img/law.jpg",
        instructor: "Professor A",
        description: "This is an advanced law course.",
        size: 35,
        hasRegistered: false,
        id: 3
    },
    {
        course: "Corporate Finance",
        eLevel: ["Bachelor's"],
        semester: ["Spring", "Fall"],
        degree: ["Finance"],
        rating: 5,
        img: "img/finance.jp",
        instructor: "Professor C",
        description: "This is a mid level business course.",
        size: 35,
        hasRegistered: false,
        id: 4
    },
    {
        course: "Advanced Data Structures",
        eLevel: ["Master's", "Doctorate"],
        semester: ["Summer", "Fall"],
        degree: ["Computer Science"],
        rating: 5,
        img: "img/cs.jpg",
        instructor: "Professor E",
        description: "This is an advanced computer science course.",
        size: 35,
        hasRegistered: false, id: 5
    },
    {
        course: "Doctoral Thesis",
        eLevel: ["Doctorate"],
        semester: ["Spring", "Fall", "Summer"],
        degree: ["Computer Science"],
        rating: 5,
        img: "img/cs.jpg",
        instructor: "Professor E",
        description: "This is a thesis course.",
        size: 35,
        hasRegistered: false,
        id: 6
    },
    {
        course: "Master's Thesis",
        eLevel: ["Master's"],
        semester: ["Spring", "Fall", "Summer"],
        degree: ["Computer Science"],
        rating: 5,
        img: "img/cs.jpg",
        instructor: "Professor E",
        description: "This is a thesis course.",
        size: 35,
        hasRegistered: false,
        id: 7
    },
    {
        course: "Doctoral Thesis",
        eLevel: ["Doctorate"],
        semester: ["Spring", "Fall", "Summer"],
        degree: ["Finance"],
        rating: 5,
        img: "img/finance.jp",
        instructor: "Professor D",
        description: "This is a thesis course.",
        size: 35,
        hasRegistered: false,
        id: 8
    },
    {
        course: "Master's Thesis",
        eLevel: ["Master's"],
        semester: ["Spring", "Fall", "Summer"],
        degree: ["Finance"],
        rating: 5,
        img: "img/finance.jp",
        instructor: "Professor D",
        description: "This is a thesis course.",
        size: 35,
        hasRegistered: false,
        id: 9
    },
    {
        course: "Doctoral Thesis",
        eLevel: ["Doctorate"],
        semester: ["Spring", "Fall", "Summer"],
        degree: ["Law"],
        rating: 5,
        img: "img/law.jpg",
        instructor: "Professor C",
        description: "This is a thesis course.",
        size: 35,
        hasRegistered: false,
        id: 10
    },
    {
        course: "Master's Thesis",
        eLevel: ["Master's"],
        semester: ["Spring", "Fall", "Summer"],
        degree: ["Law"],
        rating: 5,
        img: "img/law.jpg",
        instructor: "Professor C",
        description: "This is a thesis course.",
        size: 35,
        hasRegistered: false,
        id: 11
    },
    {
        course: "Advanced Investment Analysis",
        eLevel: ["Master's", "Doctorate"],
        semester: ["Spring", "Fall"],
        degree: ["Finance"],
        rating: 5,
        img: "img/finance.jp",
        instructor: "Professor B",
        description: "This is an advanced business course.",
        size: 35,
        hasRegistered: false,
        id: 12
    },
    {
        course: "Speech",
        eLevel: ["Associate's"],
        semester: ["Summer"],
        degree: ["Finance", "Law", "Computer Science"],
        rating: 5,
        img: "img/liberal_arts.jpg",
        instructor: "Professor A",
        description: "This is an entry level English course.",
        size: 35,
        hasRegistered: false,
        id: 13
    }];
var tempClasses = [];

function submitClassSearch() {
    document.getElementById("jumbo2").style.visibility = "visible";

    var educationLevelElement = document.getElementById("educationLevelSelect");
    var educationValue = educationLevelElement.options[educationLevelElement.selectedIndex].value;
    var semesterElement = document.getElementById("semesterSelect");
    var semesterValue = semesterElement.options[semesterElement.selectedIndex].value;
    var degreeElement = document.getElementById("degreeProgramSelect");
    var degreeValue = degreeElement.options[degreeElement.selectedIndex].value;
    tempClasses = allClasses.slice();
    var classesHtml = document.getElementById("classes");

    filterEducation(tempClasses, educationValue);
    filterSemester(tempClasses, semesterValue);
    filterDegree(tempClasses, degreeValue);

    classesHtml.innerHTML = "";

    for (var classItem = 0; classItem < tempClasses.length; classItem++) {
        //wrapper for all child elements
        var divWrapper = document.createElement('div');
        divWrapper.className = "row mb-2 classRowBorder";
        //create left column and child divs...it will hold image and course name
        var leftColumn = document.createElement('div');
        leftColumn.className = "col";
        var leftColumnRow1 = document.createElement('div');
        leftColumnRow1.className = "row";
        var leftColumnRow2 = document.createElement('div');
        leftColumnRow2.className = "row";

        //create image and link
        var newLink = document.createElement('a');
        newLink.href = "#";
        // newLink.onclick = "registerForClass(" + tempClasses[classItem].id + ")";
        //newLink.onclick = function () { registerForClass(); };
        newLink.onclick = function () {

            for (var c = 0; c < tempClasses.length; c++) {
                if ($(this).attr("id") == tempClasses[c].id) {
                    localStorage.setItem("class", JSON.stringify(tempClasses[c]));
                    window.location = "register.html";
                }
            }
        };
        newLink.className = "linkClick";
        newLink.id = tempClasses[classItem].id.toString();

        newLink.innerHTML += "<img src='" + tempClasses[classItem].img + "' class='img-thumbnail' id='courseImg'>";

        //append image + link, coursename
        leftColumnRow1.appendChild(newLink);
        leftColumnRow2.innerHTML = tempClasses[classItem].course;

        //right column creation and child divs
        var rightColumn = document.createElement('div');
        rightColumn.className = "col";
        var rightColumnRow1 = document.createElement('div');
        rightColumnRow1.className = "row descriptionText";
        var rightColumnRow2 = document.createElement('div');
        rightColumnRow2.className = "row descriptionText";

        rightColumnRow1.innerHTML = "<b>Description: </b>" + tempClasses[classItem].description;
        rightColumnRow2.innerHTML = "<b>Instructor: </b>" + tempClasses[classItem].instructor;
        //append children to columns both left and right
        leftColumn.appendChild(leftColumnRow1);
        leftColumn.appendChild(leftColumnRow2);
        rightColumn.appendChild(rightColumnRow1);
        rightColumn.appendChild(rightColumnRow2);
        divWrapper.appendChild(leftColumn);
        divWrapper.appendChild(rightColumn);

        classesHtml.appendChild(divWrapper);
    }
};


function filterEducation(tempClasses, educationValue) {
    for (var classItem = 0; classItem < tempClasses.length;) {
        var eLevelArray = tempClasses[classItem].eLevel;
        var foundLevel = false;

        for (var levelItem = 0; levelItem < eLevelArray.length; levelItem++) {
            if (eLevelArray[levelItem] === educationValue) {
                foundLevel = true;
                break;
            }
        }

        if (foundLevel === false)
            tempClasses.splice(classItem, 1);
        else
            classItem++
    }
};

function filterSemester(tempClasses, semesterValue) {
    for (var classItem = 0; classItem < tempClasses.length;) {
        var semesterLevelArray = tempClasses[classItem].semester;
        var foundLevel = false;

        for (var levelItem = 0; levelItem < semesterLevelArray.length; levelItem++) {
            if (semesterLevelArray[levelItem] === semesterValue) {
                foundLevel = true;
                break;
            }
        }

        if (foundLevel === false)
            tempClasses.splice(classItem, 1);
        else
            classItem++
    }
};

function filterDegree(tempClasses, degreeValue) {
    for (var classItem = 0; classItem < tempClasses.length;) {
        var degreeLevelArray = tempClasses[classItem].degree;
        var foundLevel = false;

        for (var levelItem = 0; levelItem < degreeLevelArray.length; levelItem++) {
            if (degreeLevelArray[levelItem] === degreeValue) {
                foundLevel = true;
                break;
            }
        }

        if (foundLevel === false)
            tempClasses.splice(classItem, 1);
        else
            classItem++
    }

}

function addToClass() {
    var registerClass = JSON.parse(localStorage.getItem("class"));
    if (registerClass.size < 41 && registerClass.hasRegistered === false) {
        registerClass.size += 1;
        registerClass.hasRegistered = true;
        window.alert("You've succesfully registered!");
    }
    else if (registerClass.size >= 40){
        window.alert("Class is full!");
    }
    else {
        window.alert("You've already registered!")
    }

    localStorage.setItem("class", JSON.stringify(registerClass));
    window.location.reload();
}


$(document).ready(function () {
    if (localStorage.length > 0) {
        var classObj = JSON.parse(localStorage.getItem("class"));
        var classElement = document.getElementById("classInfo");
        var classNameEle = document.createElement('div');
        classNameEle.className = "row";
        var classSizeEle = document.createElement('div');
        classSizeEle.className = "row";

        classSizeEle.innerHTML = "Class size: " + classObj.size + "/40 ";
        classNameEle.innerHTML = "Class name: " + classObj.course;

        classElement.appendChild(classNameEle);
        classElement.appendChild(classSizeEle);
    }
});
/*
    {
        course: "English 101",
        eLevel: ["Associate's", "Bachelor's", "Master's", "Doctorate"],
        semester: ["Spring", "Fall"],
        degree: ["Computer Science", "Law", "Finance"]
    }
 */
