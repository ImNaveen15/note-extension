import React, { useEffect, useState } from "react";

const PasteArea = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
        const saved = localStorage.getItem("noteExtension");
        saved && setValue(saved);
    }, []);
    const handleOnChange = (e) => {
        const { value } = e.target;
        localStorage.setItem("noteExtension", value);
        setValue(value);
    };

    return <textarea onChange={handleOnChange} value={value} />
};

export default PasteArea;