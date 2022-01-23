 const retrieveTasks = async() => {
     const response = await fetch('http://localhost:5001/task/');

     if (!response.ok) {
         const message = `An error occured: ${response.statusText}`;
         window.alert(message);
         return;
     }

     const retrievedTasks = await response.json();
     console.log(retrievedTasks)
     return retrievedTasks;
 }

 export default retrieveTasks;