const facts = [
    "I am 20 years old and have a passion for exploring mountains.",
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I speak three languages fluently.",
    "I’m learning to play the guitar in my free time."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
