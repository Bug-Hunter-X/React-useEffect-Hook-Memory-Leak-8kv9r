```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here.  Should clear the interval when component unmounts.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```