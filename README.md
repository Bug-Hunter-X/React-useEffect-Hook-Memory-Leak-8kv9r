# React useEffect Hook Memory Leak

This repository demonstrates a common error in React applications: memory leaks caused by improper use of the `useEffect` hook.  Specifically, the example shows a component that starts an interval using `setInterval` but fails to clear the interval when the component unmounts, leading to a memory leak.

The `bug.js` file contains the problematic code. The `bugSolution.js` file shows the corrected version with the added cleanup function to avoid the memory leak.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the count keeps increasing even after unmounting the component (in a real app this would show as a memory leak).

## Solution

The solution involves using the return value of `useEffect` to implement a cleanup function that clears the interval when the component unmounts.
