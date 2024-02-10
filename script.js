document.addEventListener('DOMContentLoaded', function() {
    let blogPosts = [
        { title: "9 Feb 2024", content: "We have started building the setup. We are also seeking sponsorships and grants to afford going to Florence and attend the conference." },
        // Add more blog posts here
    ];

    let blogPostsContainer = document.getElementById('blogPosts');

    blogPosts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
});
