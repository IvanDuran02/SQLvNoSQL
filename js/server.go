package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func getHello(c *gin.Context) {
    c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
    c.IndentedJSON(http.StatusOK, "Hello, world!") 
}

func main() {
    router := gin.Default()
    router.GET("/hello", getHello)

    // server runs on port 8080
    router.Run("localhost:8080")
}
