const defaultJobs = [
    {
        title: "Software Engineer",
        company: "Safaricom PLC",
        location: "Nairobi, Kenya",
        salary_max: 200000,
        employment_type: "Remote",
        schedule_type: "Full Time",
        tags: "Mid Level",
        posted_date: new Date("2026-05-20").toISOString()
    },
    {
        title: "Marketing Manager",
        company: "Twiga Foods",
        location: "Nairobi, Kenya",
        salary_max: 150000,
        employment_type: "On-site",
        schedule_type: "Full Time",
        tags: "",
        posted_date: new Date("2026-05-18").toISOString()
    },
    {
        title: "Product Designer",
        company: "KOKO Networks",
        location: "Remote",
        salary_max: 220000,
        employment_type: "Remote",
        schedule_type: "Part Time",
        tags: "Senior",
        posted_date: new Date("2026-05-15").toISOString()
    },
    {
        title: "Creative Director",
        company: "Ogilvy Africa",
        location: "Nairobi, Kenya",
        salary_max: 300000,
        employment_type: "On-site",
        schedule_type: "Full Time",
        tags: "Executive",
        posted_date: new Date("2026-05-12").toISOString()
    },
    {
        title: "Wordpress Developer",
        company: "JANTA Studios",
        location: "Remote",
        salary_max: 100000,
        employment_type: "Remote",
        schedule_type: "Freelance",
        tags: "Junior",
        posted_date: new Date("2026-05-10").toISOString()
    },
    {
        title: "Data Analyst",
        company: "Equity Bank",
        location: "Nairobi, Kenya",
        salary_max: 150000,
        employment_type: "Hybrid",
        schedule_type: "Full Time",
        tags: "Hybrid",
        posted_date: new Date("2026-05-08").toISOString()
    }
];

// Initialize localStorage with default jobs if empty
function getStoredJobs() {
    let stored = localStorage.getItem('janta_jobs');
    if (!stored) {
        localStorage.setItem('janta_jobs', JSON.stringify(defaultJobs));
        return defaultJobs;
    }
    return JSON.parse(stored);
}

function getHighlightIndices() {
    try {
        const params = new URLSearchParams(window.location.search);
        const h = params.get('highlight');
        if (!h) return [];
        return h.split(',').map(s => parseInt(s, 10)).filter(n => !isNaN(n));
    } catch (e) {
        return [];
    }
}

function loadJobs() {
    const jobGrid = document.querySelector('.job-grid');
    if (!jobGrid) return;
    
    try {
        const jobs = getStoredJobs();
        
        // Sort by date descending
        jobs.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date));

        if (jobs.length === 0) {
            jobGrid.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted">No jobs available right now.</p></div>';
            return;
        }

        const pastelColors = ['bg-pastel-peach', 'bg-pastel-mint', 'bg-pastel-purple', 'bg-pastel-blue', 'bg-pastel-pink', 'bg-pastel-gray'];
        let html = '';

        const highlightIndices = getHighlightIndices();

        jobs.forEach((job, index) => {
            const bgColor = pastelColors[index % pastelColors.length];
            const logoNum = (index % 5) + 1;
            
            // Format salary (e.g. 150000 -> 150k)
            const formatSalary = (num) => {
                if (num >= 1000) return (num / 1000) + 'k';
                return num;
            };

            // Format date
            const date = new Date(job.posted_date);
            const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

            const tagsHtml = job.tags ? job.tags.split(',').map(tag => `<span class="job-tag">${tag.trim()}</span>`).join('') : '';

            const isHighlighted = highlightIndices.includes(index);
            const highlightStyle = isHighlighted ? 'box-shadow:0 12px 24px rgba(99,102,241,0.12);transform:translateY(-4px);border:1px solid rgba(99,102,241,0.18);' : '';

            html += `
                <div id="job-card-${index}" class="job-card-dribbble ${bgColor}" style="${highlightStyle}">
                    <div class="job-card-header">
                        <span class="job-date">${formattedDate}</span>
                        <button class="save-btn"><i class="far fa-heart"></i></button>
                    </div>
                    <div class="company-logo-wrap">
                        <img src="img/com-logo-${logoNum}.jpg" alt="Logo">
                    </div>
                    <h3 class="job-title">${job.title}</h3>
                    <div class="company-name">${job.company} &bull; ${job.location}</div>
                    <div class="job-tags">
                        <span class="job-tag">${job.schedule_type}</span>
                        <span class="job-tag">${job.employment_type}</span>
                        ${tagsHtml}
                    </div>
                    <div class="job-card-footer">
                        <div class="salary">Ksh ${formatSalary(job.salary_max)} <span>/mo</span></div>
                        <a href="job-detail.html?id=${index}" class="apply-btn text-decoration-none">Details</a>
                    </div>
                </div>
            `;
        });
        
        jobGrid.innerHTML = html;
        // If a highlight index was requested, scroll to the first one
        if (highlightIndices.length > 0) {
            setTimeout(() => {
                const el = document.getElementById('job-card-' + highlightIndices[0]);
                if (el && el.scrollIntoView) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // briefly pulse background
                    el.style.transition = 'box-shadow 0.35s, transform 0.25s';
                }
            }, 250);
        }
        
    } catch (error) {
        console.error('Error loading jobs:', error);
        jobGrid.innerHTML = '<div class="col-12 text-center py-5"><p class="text-danger"><i class="fa fa-exclamation-circle me-2"></i> Failed to load jobs.</p></div>';
    }
}

document.addEventListener('DOMContentLoaded', loadJobs);
