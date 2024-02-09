document.addEventListener('DOMContentLoaded', function() {
    let blogPosts = [
        { title: "9 Feb 2024", content: "We are open for sponsorships. PLease" },
        // Add more blog posts here
    ];

    let blogPostsContainer = document.getElementById('blogPosts');

    blogPosts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
});
