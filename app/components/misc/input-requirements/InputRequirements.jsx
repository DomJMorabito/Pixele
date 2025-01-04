// CSS Imports:

import '@/app/components/misc/input-requirements/InputRequirements.css';

export default function InputRequirements({ id, requirements }) {
    return (
        <p id={id}>
            {requirements.map((req, index) => (
                <span key={req.id} id={req.id}>
                    {index === requirements.length - 1 ? '& ' : ''}
                    {req.text}
                    {index < requirements.length - 1 ? ', ' : ''}
                </span>
            ))}
        </p>
    );
}