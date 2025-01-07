// CSS Imports:

import '@/app/components/misc/input-requirements/InputRequirements.css';

export default function InputRequirements({ id, requirements }) {
    return (
        <p id={id}>
            {requirements.map((req, index) => {
                const reqClass = req.met !== undefined
                    ? req.met
                        ? 'requirement-met'
                        : 'requirement-not-met'
                    : '';
                return (
                    <span
                        key={req.id}
                        id={req.id}
                        className={reqClass}
                    >
                        {index === requirements.length - 1 ? '& ' : ''}
                        {req.text}
                        {index < requirements.length - 1 ? ', ' : ''}
                    </span>
                );
            })}
        </p>
    );
}