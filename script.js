document.addEventListener('DOMContentLoaded', function() {
    let blogPosts = [
        { title: "5 April 2024", content: "Following a series of challenges in our software development, we achieved a notable milestone today by successfully establishing a connection with our nanoVNA. This progress hopefully marks a turning point in our software development efforts. With this breakthrough, we are optimistic about the path ahead, anticipating a smoother development process moving forward. After two days of hard work, the team will be taking a well-deserved break this weekend, recharging for next week. "},
        { title: "4 April 2024", content: "The development of hardware and software is progressing. Long nights and huge amounts of RedBull = impressive results! Looking forward to revealing our project this summer! <img src='images/hax.jpg' class='blogpic' alt='nerds'>"},
        { title: "9 Feb 2024", content: "We have started building the setup. We are also looking for sponsorships and grants to afford going to Florence and attend the conference. <img src='images/olhax.jpg' class='blogpic' alt='nerds'>" },
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
