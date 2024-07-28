document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    const assignment = document.getElementById('assignment').files[0].name;

    if (name && className && assignment) {
        const table = document.getElementById('tasksTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const classCell = newRow.insertCell(1);
        const assignmentCell = newRow.insertCell(2);

        nameCell.textContent = name;
        classCell.textContent = className;
        assignmentCell.textContent = assignment;

        document.getElementById('taskForm').reset();
        alert('Task submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});
