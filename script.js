function exportToPDF() {
    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [40, 40, 40, 40],
        
        content: [
            // Header
            {
                text: 'ANDRII BOIKO',
                style: 'header',
                alignment: 'center'
            },
            {
                text: 'Full Stack .NET Developer (Angular, Blazor, Azure, Umbraco)',
                style: 'subheader',
                alignment: 'center',
                margin: [0, 0, 0, 10]
            },
            {
                text: 'Yakuba Kolasa 2v, Kyiv, Ukraine | +380 67 508 1588 | andriiboiko.vn@gmail.com',
                alignment: 'center',
                fontSize: 10,
                color: '#555',
                margin: [0, 0, 0, 5]
            },
            {
                text: 'LinkedIn: linkedin.com/in/andrii-boiko-9908066b | GitHub: github.com/vinil2001',
                alignment: 'center',
                fontSize: 10,
                color: '#667eea',
                margin: [0, 0, 0, 20]
            },
            
            // Professional Summary
            { text: 'PROFESSIONAL SUMMARY', style: 'sectionHeader' },
            {
                text: 'Experienced Full Stack Developer with 6+ years of professional experience in building web applications using .NET, Angular, Blazor, and JavaScript. Strong background in both frontend and backend development, with hands-on experience in enterprise-level systems, CMS platforms, and cloud tools. Proven ability to deliver scalable solutions across diverse domains, including transport, ERP, and finance.',
                style: 'paragraph',
                margin: [0, 0, 0, 15]
            },
            
            // Technical Skills
            { text: 'TECHNICAL SKILLS', style: 'sectionHeader' },
            {
                columns: [
                    {
                        width: '50%',
                        stack: [
                            { text: 'Backend:', style: 'skillTitle' },
                            { text: 'C#, .NET Core, ASP.NET MVC, Web API, Entity Framework, LINQ, MySQL, MSSQL', style: 'skillText' },
                            { text: 'Frontend:', style: 'skillTitle', margin: [0, 8, 0, 0] },
                            { text: 'Angular 2+, AngularJS, Blazor, JavaScript, TypeScript, jQuery, HTML5, CSS3, AJAX', style: 'skillText' }
                        ]
                    },
                    {
                        width: '50%',
                        stack: [
                            { text: 'CMS:', style: 'skillTitle' },
                            { text: 'Umbraco (Full development cycle, migration and customization)', style: 'skillText' },
                            { text: 'Cloud & DevOps:', style: 'skillTitle', margin: [0, 8, 0, 0] },
                            { text: 'Azure CI/CD, Azure DevOps, Azure Blob Storage, Azure Functions, Git, Swagger, Postman', style: 'skillText' }
                        ]
                    }
                ],
                margin: [0, 0, 0, 15]
            },
            
            // Professional Experience
            { text: 'PROFESSIONAL EXPERIENCE', style: 'sectionHeader' },
            
            // Job 1
            {
                columns: [
                    { text: 'Campbell Consulting', style: 'companyName', width: '*' },
                    { text: 'June 2025 – December 2025', style: 'duration', width: 'auto' }
                ]
            },
            { text: 'Bournemouth, England, United Kingdom', style: 'location' },
            { text: 'Project Overview: Helped a UK-based web agency migrate and modernize the Erskine website from Umbraco 8 to Umbraco 13, including full code refactoring, content migration, and infrastructure updates for .NET 8.', style: 'paragraph', margin: [0, 5, 0, 5] },
            { text: 'Tech Stack: ASP.NET MVC, .NET Core (.NET 8), Umbraco CMS, C#, Razor, Umbraco Forms, Umbraco uSync, Azure Blob Storage, Vue.js, Redis, GitHub, ILSpy, MSSQL', style: 'techStack', margin: [0, 0, 0, 12] },
            
            // Job 2
            {
                columns: [
                    { text: 'Xpand Software', style: 'companyName', width: '*' },
                    { text: 'June 2021 – 2025 (4 years)', style: 'duration', width: 'auto' }
                ]
            },
            { text: 'Kyiv, Ukraine', style: 'location' },
            { text: 'Project Overview: Web application for transport companies to manage documents and workflows.', style: 'paragraph', margin: [0, 5, 0, 5] },
            {
                ul: [
                    'Developed new features in a monolithic product using .NET, Umbraco CMS, and Angular',
                    'Created back office tools and custom logic in Umbraco',
                    'Implemented UI enhancements with JavaScript, jQuery, HTML/CSS/LESS',
                    'Used Git for version control, Swagger/Postman for API testing'
                ],
                style: 'list',
                margin: [0, 0, 0, 5]
            },
            { text: 'Tech Stack: .NET, Azure CI/CD, Umbraco, Angular, JavaScript, jQuery, HTML/CSS, Swagger, Git', style: 'techStack', margin: [0, 0, 0, 12] },
            
            // Job 3
            {
                columns: [
                    { text: 'Linkos Group (IsPRO ERP system)', style: 'companyName', width: '*' },
                    { text: 'October 2020 – June 2021', style: 'duration', width: 'auto' }
                ]
            },
            { text: 'Kyiv, Ukraine', style: 'location' },
            { text: 'Project Overview: ERP system with .NET Core backend and Angular frontend.', style: 'paragraph', margin: [0, 5, 0, 5] },
            {
                ul: [
                    'Built and maintained RESTful APIs with .NET Core Web API',
                    'Worked with Angular for integration and front-end support',
                    'Designed SQL Server schemas and queries for ERP data management'
                ],
                style: 'list',
                margin: [0, 0, 0, 5]
            },
            { text: 'Tech Stack: .NET Core, Web API, Angular, WinForms, MSSQL, Entity Framework, SVN', style: 'techStack', margin: [0, 0, 0, 12] },
            
            // Job 4
            {
                columns: [
                    { text: 'Master-1 P.E.', style: 'companyName', width: '*' },
                    { text: 'September 2019 – October 2020', style: 'duration', width: 'auto' }
                ]
            },
            { text: 'Kyiv, Ukraine', style: 'location' },
            { text: 'Project Overview: Finance planning application.', style: 'paragraph', margin: [0, 5, 0, 5] },
            {
                ul: [
                    'Developed ASP.NET MVC web app and handled both frontend (HTML, JS, CSS) and backend (C#, SQL)',
                    'Worked with both MSSQL and MySQL for financial data'
                ],
                style: 'list',
                margin: [0, 0, 0, 5]
            },
            { text: 'Tech Stack: ASP.NET MVC, C#, JavaScript, jQuery, HTML/CSS, AJAX, MSSQL, MySQL', style: 'techStack', margin: [0, 0, 0, 15] },
            
            // Education
            { text: 'EDUCATION', style: 'sectionHeader' },
            { text: 'National Aviation University, Kyiv', style: 'companyName' },
            { text: "Bachelor's Degree in Management and Logistics (2002 – 2006)", style: 'paragraph', margin: [0, 0, 0, 15] },
            
            // Certifications
            { text: 'CERTIFICATIONS & TRAINING', style: 'sectionHeader' },
            {
                ul: [
                    'Mate Academy (Front-end development 2024)',
                    'Angular 7 Workshop Course – INFOPULSE UNIVER, Kyiv (2019)',
                    'JavaScript Course – BIONIC SCHOOL, Kyiv (2017)'
                ],
                style: 'list',
                margin: [0, 0, 0, 15]
            },
            
            // Languages
            { text: 'LANGUAGES', style: 'sectionHeader' },
            { text: 'English: B2 – Comfortable in interviews and professional communication', style: 'paragraph', margin: [0, 0, 0, 15] },
            
            // Additional Info
            { text: 'ADDITIONAL INFORMATION', style: 'sectionHeader' },
            {
                ul: [
                    "Available to start with 1 week's notice",
                    'Open to international projects and relocation/onsite work if needed'
                ],
                style: 'list'
            }
        ],
        
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                color: '#333'
            },
            subheader: {
                fontSize: 12,
                color: '#667eea'
            },
            sectionHeader: {
                fontSize: 12,
                bold: true,
                color: '#667eea',
                margin: [0, 10, 0, 8],
                decoration: 'underline',
                decorationColor: '#667eea'
            },
            companyName: {
                fontSize: 11,
                bold: true,
                color: '#333'
            },
            duration: {
                fontSize: 10,
                color: '#764ba2'
            },
            location: {
                fontSize: 9,
                color: '#666',
                margin: [0, 0, 0, 3]
            },
            paragraph: {
                fontSize: 10,
                color: '#555',
                lineHeight: 1.3
            },
            skillTitle: {
                fontSize: 10,
                bold: true,
                color: '#667eea'
            },
            skillText: {
                fontSize: 9,
                color: '#555'
            },
            techStack: {
                fontSize: 9,
                color: '#667eea',
                italics: true
            },
            list: {
                fontSize: 10,
                color: '#555'
            }
        }
    };
    
    pdfMake.createPdf(docDefinition).download('Andrii_Boiko_Resume.pdf');
}
