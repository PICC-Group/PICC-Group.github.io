document.addEventListener('DOMContentLoaded', function() {
    let blogPosts = [
        { title: "9 Feb 2024", content: "We have started building the setup. We are also looking for sponsorships and grants to afford going to Florence and attend the conference." },
        { title: "8 Feb 2024", content: "We, The PICC Group from Lund University, are happy to announce that we have been selected as one of the 6 finalists in the IEEE AP-S Student design contest."},
        // Add more blog posts here
    ];

    let blogPostsContainer = document.getElementById('blogPosts');

    blogPosts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
});
