import { useState } from "react";

export default function useCounter() {
    const [count, setCounter] = useState(0)

    const increment = () => {
        setCounter(count + 1)
    }

    return {count, increment}
}