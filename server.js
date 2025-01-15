const app = require("./src/app")
const PORT = 9080

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})


process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed')
        process.exit(0)
        // notify.send('Server closed')
    })
}
)
 