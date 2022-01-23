const retrieveTask = async(id) => {
    const response = await fetch(`http://localhost:5001/task/${id}`);

    if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const retrievedTask = await response.json();
    console.log(retrievedTask)
    return retrievedTask;
}

export default retrieveTask;