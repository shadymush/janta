/**
 * JobDescriptions - Shared job description data for JANTA
 * 
 * Provides rich text descriptions, responsibilities, and requirements
 * for each job title. Used by:
 *   - job-detail.html for rendering job details
 *   - nlp-matching.js for building rich text vectors for NLP matching
 */
const JobDescriptions = (function () {

    const descriptions = {
        'Software Engineer': {
            desc1: 'We are looking for a talented Software Engineer to join our growing team. In this role, you will design and build scalable applications and APIs used by thousands of people daily.',
            desc2: 'You will collaborate with cross-functional teams including designers, product managers, and engineers to deliver outstanding software solutions on time.',
            responsibilities: [
                'Write clean, maintainable, and well-tested code.',
                'Participate in architecture discussions and design reviews.',
                'Troubleshoot and debug production issues.',
                'Mentor junior developers and review pull requests.'
            ],
            requirements: [
                '3+ years of professional software engineering experience.',
                'Proficiency in modern JavaScript (ES6+), React, and Node.js.',
                'Experience with RESTful APIs and GraphQL.',
                'Familiarity with cloud platforms like AWS or Google Cloud.'
            ]
        },
        'Marketing Manager': {
            desc1: 'We are seeking an experienced Marketing Manager to lead our marketing efforts, drive brand awareness, and develop campaigns that resonate with our customers.',
            desc2: 'You will own the full marketing funnel, from strategy to execution, working closely with the sales and product teams to deliver measurable growth.',
            responsibilities: [
                'Develop and execute integrated marketing campaigns.',
                'Manage budgets and track ROI across all channels.',
                'Lead content strategy and brand voice initiatives.',
                'Analyse market trends and competitor positioning.'
            ],
            requirements: [
                '4+ years of marketing experience, preferably in a fast-paced environment.',
                'Strong understanding of digital marketing and social media.',
                'Experience with analytics tools (Google Analytics, HubSpot, etc.).',
                "Bachelor's degree in Marketing, Business, or a related field."
            ]
        },
        'Product Designer': {
            desc1: 'We are looking for a Product Designer who is passionate about creating beautiful, intuitive user experiences. You will own the end-to-end design process from research to pixel-perfect delivery.',
            desc2: 'You will work closely with product managers and engineers to craft designs that delight users and solve real problems.',
            responsibilities: [
                'Conduct user research and synthesize insights into design decisions.',
                'Create wireframes, prototypes, and high-fidelity designs.',
                'Maintain and evolve the design system.',
                'Collaborate with engineering during implementation.'
            ],
            requirements: [
                '3+ years of product design experience.',
                'Expert proficiency in Figma and design systems.',
                'Portfolio demonstrating end-to-end design work.',
                'Strong understanding of UX principles and accessibility.'
            ]
        },
        'Creative Director': {
            desc1: 'We are looking for a visionary Creative Director to lead our creative team and define the visual identity and storytelling for our brand across all channels.',
            desc2: 'You will collaborate with senior leadership, clients, and multidisciplinary teams to deliver world-class creative concepts that drive business results.',
            responsibilities: [
                'Set the creative vision and direction for all brand communications.',
                'Lead, mentor, and inspire a team of designers and copywriters.',
                'Review and approve creative assets before production.',
                'Present creative concepts to clients and stakeholders.'
            ],
            requirements: [
                '8+ years of creative experience, with 3+ in a leadership role.',
                'Strong portfolio of brand, campaign, and digital work.',
                'Excellent presentation and communication skills.',
                'Experience in an agency or large in-house creative team.'
            ]
        },
        'Wordpress Developer': {
            desc1: 'We need a skilled WordPress Developer to build, maintain, and optimise our WordPress-powered websites and custom plugins with a focus on performance and clean code.',
            desc2: 'You will work independently in a remote-first environment and collaborate with the design team to bring compelling web experiences to life.',
            responsibilities: [
                'Develop and maintain WordPress themes and plugins.',
                'Optimise site speed, SEO, and Core Web Vitals.',
                'Integrate third-party APIs and services.',
                'Troubleshoot and fix WordPress issues.'
            ],
            requirements: [
                '2+ years of WordPress development experience.',
                'Proficiency in PHP, JavaScript, HTML, and CSS.',
                'Experience with WooCommerce and popular page builders.',
                'Knowledge of website security best practices.'
            ]
        },
        'Data Analyst': {
            desc1: 'We are seeking a Data Analyst to transform raw data into actionable insights that inform business strategy and drive growth across our organisation.',
            desc2: 'You will build dashboards, run analyses, and work cross-functionally to ensure data-driven decision-making at every level of the company.',
            responsibilities: [
                'Collect, clean, and analyse large datasets from multiple sources.',
                'Build and maintain dashboards and automated reports.',
                'Identify trends, patterns, and business opportunities from data.',
                'Present findings to stakeholders in a clear and compelling manner.'
            ],
            requirements: [
                '2+ years of data analysis experience.',
                'Proficiency in SQL, Excel, and a BI tool (Power BI, Tableau, etc.).',
                'Experience with Python or R for data analysis is a plus.',
                'Strong problem-solving and communication skills.'
            ]
        }
    };

    const defaultDesc = {
        desc1: 'We are looking for a talented professional to join our team. This is an exciting opportunity to make a real impact.',
        desc2: 'You will work with a dedicated team in a dynamic environment, contributing to meaningful projects.',
        responsibilities: [
            'Deliver high-quality work on time.',
            'Collaborate with team members across departments.',
            'Continuously improve processes and workflows.',
            'Participate in team meetings and share ideas.'
        ],
        requirements: [
            'Relevant experience in the field.',
            'Strong communication and teamwork skills.',
            'Self-motivated with a proactive attitude.',
            'Ability to work independently and meet deadlines.'
        ]
    };

    /**
     * Get the description for a job title.
     * @param {string} title - Job title to look up
     * @returns {Object} Description object with desc1, desc2, responsibilities, requirements
     */
    function get(title) {
        return descriptions[title] || defaultDesc;
    }

    return { get, descriptions, defaultDesc };

})();
