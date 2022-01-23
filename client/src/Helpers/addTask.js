const addtask = async(text) => {
    const newTask = { task_author: 'leon', task_text: text };

    const response = await fetch("http://localhost:5001/task/add", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask),
        })
        .catch((error) => {
            window.alert(error);
            return;
        });
    const { insertedId } = await response.json();
    return insertedId;
}

export default addtask;