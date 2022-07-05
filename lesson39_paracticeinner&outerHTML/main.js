var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']



function render(courses) {
    var ulelement = document.querySelector('.courses-list');
    var result = courses.map(function (value) {
        return `<li>${value}</li>`;
    })
    var html = result.join('');
    return ulelement.innerHTML = html; 
};




var coursesList = [
    'PHP',
    'JAVA',
    'PYTHON',
    'JAVASCRIPT'
];




