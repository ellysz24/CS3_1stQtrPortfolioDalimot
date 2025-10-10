

grades = [99,100,97,98,96]
arr = grades
grades[0] = 1000
console.log(arr[0])
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
}

for(let grade of grades) {
    console.log(grades)
}

grades.forEach(print_grades)

function print_grades(grades) {
    console.log(grades)
}


wedwefr3
