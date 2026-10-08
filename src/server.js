import http from "http";
import { calculateSum } from "./app.js";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const result = calculateSum(20, 22);

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "CI/CD Demo Server",
            result: result
        }));

        return;
    }

    res.writeHead(404, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Not Found"
    }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
