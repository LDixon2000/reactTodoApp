const deleteTask = async(id) => {
    await fetch(`http://localhost:5001/${id}`, {
        method: 'DELETE'
    })
}
export default deleteTask;