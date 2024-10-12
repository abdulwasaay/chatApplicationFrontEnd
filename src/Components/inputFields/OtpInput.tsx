import React, { memo, useRef } from "react";

const OTPInputField = (({ changeHandler, classes = "", length = 4, styles = {}, }: any) => {
    const inputRefs = useRef<any[]>([]);

    if (inputRefs.current.length !== length) {
        inputRefs.current = Array(length)
            .fill(null)
            .map((_, i) => inputRefs.current[i] || React.createRef());
    }

    const enforceSingleDigit = (event: any, idx: number) => {
        const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
        const backKeys = ["Backspace", "Delete"];

        if (backKeys.includes(event.key)) {
            if (event.target.value.length === 0 && idx > 0) {
                inputRefs.current[idx - 1].current.focus();
                event.preventDefault();
            } else if (event.target.value.length === 1) {
                return true;
            }
        }

        if (allowedKeys.includes(event.key)) {
            return true;
        }

        const isDigit = /\d/.test(event.key);
        const isAlreadyOneDigit = event.target.value.length >= 1;

        return isDigit && !isAlreadyOneDigit;
    };

    const handleInput = (input: any, idx: number) => {
        if (input.value.length === 1 && idx < length - 1) {
            inputRefs.current[idx + 1].current.focus(); // Focus next input
        } else if (input.value.length === 0 && idx > 0) {
            inputRefs.current[idx - 1].current.focus(); // Focus previous input
        }
    };

    const validateSingleDigit = (event: any, idx: number) => {
        const input = event.target;
        input.value = input.value.slice(0, 1).replace(/[^0-9]/g, ""); // Only allow a single digit
        handleInput(input, idx);
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {Array.from({ length }).map((_, idx) => (
                <input
                    key={idx}
                    type="number"
                    style={{ ...styles }}
                    max={9}
                    min={0}
                    ref={inputRefs.current[idx]}
                    className={`w-[50px] h-[40px] pl-4 pt-3 pb-4 text-[14px] border-none outline-none ${classes}`}
                    onKeyDown={(event) => enforceSingleDigit(event, idx)}
                    onInput={(event) => validateSingleDigit(event, idx)}
                    onChange={(event)=> changeHandler(event, idx)}
                />
            ))}
        </div>
    )

})

export default memo(OTPInputField)