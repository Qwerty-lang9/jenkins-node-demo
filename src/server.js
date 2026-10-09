
import http from "http";
import { calculateSum } from "./app.js";

const server = http.createServer((req, res) => {
    const url = new URL(
        req.url,
        `http://${req.headers.host || "localhost"}`
    );

    res.setHeader("Content-Type", "application/json");

    if (url.pathname === "/health") {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: "UP",
            service: "jenkins-node-demo",
            version: process.env.APP_VERSION || "dev"
        }));
        return;
    }

    if (url.pathname === "/api/add") {
        const a = Number(url.searchParams.get("a"));
        const b = Number(url.searchParams.get("b"));

        if (
            url.searchParams.get("a") === null ||
            url.searchParams.get("b") === null ||
            !Number.isFinite(a) ||
            !Number.isFinite(b)
        ) {
            res.writeHead(400);
            res.end(JSON.stringify({
                message: "Provide valid a and b values"
            }));
            return;
        }

        res.writeHead(200);
        res.end(JSON.stringify({
            result: calculateSum(a, b)
        }));
        return;
    }

    if (url.pathname === "/") {
        res.writeHead(200);
        res.end(JSON.stringify({
            message: "CI/CD Demo Server",
            result: calculateSum(20, 22)
        }));
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({
        message: "Not Found"
    }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

