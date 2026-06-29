const fs = require('fs');
const path = 'style.css';
let text = fs.readFileSync(path, 'utf8');
const pattern = /\/\* Technology \*\/[\s\S]*?\.tech-item li\s*\{[\s\S]*?font-size: 0\.9rem;\s*\n\}/g;
const replacement = `/* Technology */
.tech-item {
    background: transparent;
    padding: 1.5rem 0;
    border-radius: 12px;
    text-align: center;
    transition: transform var(--transition-normal);
}

.tech-item:hover {
    transform: translateY(-5px);
}

.tech-item .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.tech-item .icon img {
    width: 45%;
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
}

.tech-item h3 {
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.tech-item ul {
    text-align: center;
    display: inline-block;
    margin: 0 auto;
    padding: 0;
}

.tech-item li {
    margin-bottom: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.9rem;
}
`;
text = text.replace(pattern, replacement);
fs.writeFileSync(path, text);
console.log('updated technology css');