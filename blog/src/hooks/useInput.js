import { useState } from "react"

export const useInput = (initializeValue) => {
    const [value , setValue] = useState(initializeValue)
    const bind = {
        value : value,
        onChange: (e) => setValue(e.target.value)

    }
    return [value, bind]
}