// script.js — External JavaScript File

// ==========================================
// FUNCTION DECLARATIONS
// ==========================================

// Returns "Passed" if grade >= 75, otherwise "Failed"
function getRemark(grade) {
    let remark = (grade >= 75) ? "Passed" : "Failed";
    return remark;
}

// Converts numerical grade to equivalent value
function getEquivalent(grade) {
    let equivalent = "";
    
    if (grade >= 97) {
        equivalent = "1.00";
    } else if (grade >= 94) {
        equivalent = "1.25";
    } else if (grade >= 91) {
        equivalent = "1.50";
    } else if (grade >= 88) {
        equivalent = "1.75";
    } else if (grade >= 85) {
        equivalent = "2.00";
    } else if (grade >= 82) {
        equivalent = "2.25";
    } else if (grade >= 79) {
        equivalent = "2.50";
    } else if (grade >= 76) {
        equivalent = "2.75";
    } else if (grade === 75) {
        equivalent = "3.00";
    } else {
        equivalent = "5.00";
    }
    
    return equivalent;
}

// Determines Academic Leader classification using switch
function getAcademicLeader(equivalent) {
    let leader = "";
    
    switch (equivalent) {
        case "1.00":
        case "1.25":
            leader = "1st Class Academic Leader";
            break;
        case "1.50":
            leader = "2nd Class Academic Leader";
            break;
        case "1.75":
            leader = "3rd Class Academic Leader";
            break;
        default:
            leader = "-";
    }
    
    return leader;
}

// ==========================================
// STUDENT DATA — Using ARRAys
// ==========================================

// Array of student names
let students = [
    "Dela Cruz, Juan",
    "Santos, Maria",
    "Reyes, Jose",
    "Bautista, Ana",
    "Cruz, Carlo"
];

// Array of student grades
let grades = [97, 93, 89, 80, 74];

// ==========================================
// BUILD TABLE USING FOR LOOP
// ==========================================

let output = "<h2>Grade Equivalents</h2>";
output += "<table>";
output += "<tr>";
output += "<th>Student Name</th>";
output += "<th>GRADE</th>";
output += "<th>EQUIVALENT</th>";
output += "<th>REMARK</th>";
output += "<th>ACADEMIC LEADER</th>";
output += "</tr>";

// Loop through each student using for loop
for (let i = 0; i < students.length; i++) {
    let name = students[i];
    let grade = grades[i];
    let equivalent = getEquivalent(grade);
    let remark = getRemark(grade);
    let leader = getAcademicLeader(equivalent);
    
    output += "<tr>";
    output += "<td>" + name + "</td>";
    output += "<td>" + grade + "</td>";
    output += "<td>" + equivalent + "</td>";
    output += "<td>" + remark + "</td>";
    output += "<td>" + leader + "</td>";
    output += "</tr>";
}

output += "</table>";

// Display result in HTML
document.getElementById("result").innerHTML = output;
