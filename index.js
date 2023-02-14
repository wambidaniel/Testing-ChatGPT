function populateFeaturedJobs() {
    // Fetch the JSON data
    fetch('jobs-data.json')
      .then(response => response.json())
      .then(data => {
        // Get a reference to the container element
        const container = document.getElementById('featured-jobs-container');
  
        // Loop through the job listings and create HTML for each one
        data.featuredJobs.forEach(job => {
          const jobHtml = `
            <div class="job-listing">
              <div class="company-logo">
                <img src="${job.logo}" alt="${job.company} logo">
              </div>
              <div class="job-details">
                <h2>${job.title}</h2>
                <h3>${job.company} - ${job.location}</h3>
                <p>${job.description}</p>
                <div class="job-salary">${job.salary}</div>
              </div>
            </div>
          `;
  
          // Add the job HTML to the container
          container.insertAdjacentHTML('beforeend', jobHtml);
        });
      });
  }
  