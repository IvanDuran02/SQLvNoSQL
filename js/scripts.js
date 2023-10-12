const handleFastify = async () => {
    // Record the starting time
    const startTime = performance.now()

    let response = await fetch("http://localhost:3000/hello")

    // Record the end time
    const endTime = performance.now()

    // Calculate the time difference in milliseconds
    const fetchTime = endTime - startTime;

    let value = await response.text()
    document.getElementById("fastify").innerHTML = value 
    console.log(`Fetch time was ${fetchTime}ms`)
    
}

const handleGin = async () => {
    // Records the starting time
    const startTime = performance.now()

    let response = await fetch("http://localhost:8080/hello")

    const endTime = performance.now()

    const fetchTime = endTime - startTime;

    let value = await response.text()
    document.getElementById("gin").innerHTML = value
    console.log(response)
    console.log(`Fetch time was ${fetchTime}ms`);
}
