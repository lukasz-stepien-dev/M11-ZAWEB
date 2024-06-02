import React from 'react';

const ContentSection = ({ title, text, items }) => {
    return (
        <section>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
            {items && (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default ContentSection;
