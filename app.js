console.log("This is project 2");
async function getData() {
    url = 'students.txt';
    const response = await fetch('students.txt');
    const details = await response.json();
    function idIterator(details) {
        let nextIndex = -1;
        document.getElementById('prev').disabled = true;
        return {
            next: function () {
                if (nextIndex + 1 == details.length - 1) {
                    document.getElementById('next').disabled = true;
                }
                if (nextIndex != 1 && nextIndex != -1) {
                    document.getElementById('prev').disabled = false;
                }
                return nextIndex < details.length ? { value: details[++nextIndex], done: false } : { done: true };
            },
            prev: function () {
                if (nextIndex + 1 != details.length - 1) {
                    document.getElementById('next').disabled = false;
                }
                if (nextIndex == 1) {
                    document.getElementById('prev').disabled = true;
                }
                return nextIndex > 0 ? { value: details[--nextIndex], done: false } : { done: true };
            }
        };
    }
    const students = idIterator(details);
    let next = document.getElementById('next');
    next.addEventListener('click', nextID);
    async function nextID() {
        const currentStudent = (await students.next()).value;
        let image = document.getElementById('image');
        let detail = document.getElementById('detail');
        if (currentStudent != undefined) {
            image.innerHTML = `<img src='${currentStudent.image}' style="max-width:100%;height:auto;">`;
            detail.innerHTML = `<ul class="list-group" style="list-style:none; display : flex; flex-wrap : wrap; text-align : left;">
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">Name</b>${currentStudent.name}</li>
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">Course</b>${currentStudent.course}</li>
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">Year</b>${currentStudent.year}</li>
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">Specialisation</b>${currentStudent.specialisation}</li>
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">College</b>${currentStudent.college}</li>
          </ul>`
        }
    }
    let prev = document.getElementById('prev');
    prev.addEventListener('click', prevID);
    async function prevID() {
        const currentStudent = (await students.prev()).value;
        let image = document.getElementById('image');
        let detail = document.getElementById('detail');
        if (currentStudent != undefined) {
            image.innerHTML = `<img src='${currentStudent.image}' style="max-width:100%;height:auto;">`;
            detail.innerHTML = `<ul class="list-group" style="list-style:none; display : flex; flex-wrap : wrap; text-align : left;">
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">Name</b>${currentStudent.name}</li>
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">Course</b>${currentStudent.course}</li>
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">Year</b>${currentStudent.year}</li>
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">Specialisation</b>${currentStudent.specialisation}</li>
            <li class="list-group-item" style="display : table-row;"><b style="display : table-cell; padding-right : 1em;">College</b>${currentStudent.college}</li>
          </ul>`
        }
    }
    nextID();
}
getData();