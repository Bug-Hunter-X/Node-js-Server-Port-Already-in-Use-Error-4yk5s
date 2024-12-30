# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js where a server fails to start because the specified port is already in use.  The provided solution demonstrates how to handle this error gracefully.

## Bug

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If this port is already in use (e.g., by another application), the server will fail to start, resulting in a cryptic error message.

## Solution

The `bugSolution.js` file addresses this issue by including error handling.  It attempts to listen on the specified port, and if it fails, it attempts to use an alternative port. This makes the server more robust and less prone to unexpected crashes.