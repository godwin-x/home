fetch('app.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogs;
    const blogList = document.querySelector('ul');
    blogPosts.forEach(blog => {
      const blogItem = document.createElement('li');
      const blogTitle = document.createElement('h3');
      blogTitle.textContent = blog.title;
      const blogDate = document.createElement('p');
      blogDate.textContent = `Posted on ${blog.date}`;
      const blogContent = document.createElement('p');
      blogContent.textContent = blog.content;
      blogItem.appendChild(blogTitle);
      blogItem.appendChild(blogDate);
      blogItem.appendChild(blogContent);
      blogList.appendChild(blogItem);
    });
  })
  .catch(error => {
    console.log(`Error fetching blog data: ${error}`);
  });
