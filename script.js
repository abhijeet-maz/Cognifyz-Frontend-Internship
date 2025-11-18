// Task 4: Change Background Color
function changeBackgroundColor() {
    const colors = ['#191970', '#004b49', '#4b0082', '#2f4f4f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Task 5: Fetch Meaningful Posts About India
function fetchPosts() {
    const posts = [
        {
            title: "Incredible India: A Land of Diversity",
            body: "India is known for its rich cultural heritage, languages, and traditions. From the Himalayas in the north to the beaches in the south, India offers unmatched diversity and beauty."
        },
        {
            title: "India's Contribution to Science and Technology",
            body: "India has made significant progress in science and technology, with achievements like ISRO’s Mars Mission and advancements in IT and space research."
        },
        {
            title: "The Spirit of Indian Democracy",
            body: "India is the world’s largest democracy. Every few years, millions participate in elections, showcasing the power of a democratic system driven by the people."
        },
        {
            title: "Yoga and Spirituality from India",
            body: "India is the birthplace of yoga and many spiritual practices that promote mental peace, health, and well-being. It continues to inspire people worldwide."
        },
        {
            title: "Indian Festivals: A Celebration of Unity",
            body: "From Diwali and Holi to Eid and Christmas, Indian festivals celebrate unity in diversity. These events bring people of all religions together in joy and harmony."
        }
    ];

    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.style.marginBottom = '15px';
        postElement.innerHTML = `
            <h3 style="color: #0eafe5;">${post.title}</h3>
            <p>${post.body}</p>
            <hr style="border: 0.5px solid #ccc;">
        `;
        postsContainer.appendChild(postElement);
    });
}
