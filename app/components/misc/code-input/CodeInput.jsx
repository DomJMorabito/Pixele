// CSS Imports:

import '@/app/components/misc/code-input/CodeInput.css';

const CodeInput = ({
    length = 6,
    value = [],
    onChange,
    disabled = false,
    inputRefs
}) => {

    const handleChange = (e, index) => {
        const { value: inputValue } = e.target;

        if (/^\d$/.test(inputValue)) {
            const newCode = [...value];
            newCode[index] = inputValue;
            onChange(newCode);

            if (index < 5 && value) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (value[index]) {
                const newCode = [...value];
                newCode[index] = '';
                onChange(newCode);
            } else if (index > 0) {
                inputRefs.current[index - 1].focus();
                const newCode = [...value];
                newCode[index - 1] = '';
                onChange(newCode);
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
        if (pasteData.every(char => /^\d$/.test(char))) {
            onChange(pasteData);
            pasteData.forEach((num, i) => {
                if (inputRefs.current[i]) {
                    inputRefs.current[i].value = num;
                }
            });
            inputRefs.current[length - 1].focus();
        }
    };

    return (
        <div id="code-inputs" onPaste={handlePaste}>
            {Array(length).fill(0).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={value[index] || ''}
                    ref={element => {
                        inputRefs.current[index] = element;
                    }}
                    onChange={e => handleChange(e, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    className="code-input"
                    disabled={disabled}
                />
            ))}
        </div>
    );
};

export default CodeInput;