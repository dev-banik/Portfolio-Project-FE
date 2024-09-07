import Assets from './assets';
// import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
        slug: 'junior-backend-developer',
        company: 'AKIJ iBOS Limited',
        description: 'Focused on backend development, utilizing ASP.NET Core Web API to create and maintain robust and scalable APIs for various business applications.',
        contract: ContractType.FullTime,
        type: 'Backend Development',
        location: 'Kazi Nazrul Islam Rd, Dhaka',
        period: { from: new Date(2024, 1, 1) }, 
        skills: [
            { slug: 'csharp', logo: '', name: 'C#', color: 'blue', description: 'C# is a modern, object-oriented programming language developed by Microsoft, widely used for developing enterprise-level applications.' },
            { slug: 'dotnet-core', logo: '', name: '.NET Core', color: 'purple', description: '.NET Core is a cross-platform, open-source framework for building modern, cloud-based, and internet-connected applications.' },
            { slug: 'aspnet-core-web-api', logo: '', name: 'ASP.NET Core Web API', color: 'red', description: 'ASP.NET Core Web API is a framework for building RESTful services on the .NET platform.' },
            { slug: 'sql', logo: '', name: 'SQL', color: 'green', description: 'SQL is a standard language for managing and manipulating relational databases.' },
            { slug: 'sql server', logo: '', name: 'SQL Server', color: 'cyan', description: 'SQL is a standard language for managing and manipulating relational databases.' },
            { slug: 'entity-framework', logo: '', name: 'Entity Framework', color: 'orange', description: 'Entity Framework is an ORM framework for .NET, enabling developers to work with databases using .NET objects.' },
            { slug: 'rest-api', logo: '', name: 'REST API', color: 'cyan', description: 'REST API is a software architectural style for creating scalable web services.' },
            { slug: 'microservices', logo: '', name: 'Microservices', color: 'teal', description: 'Microservices is an architectural style that structures an application as a collection of small, independent services.' },
            { slug: 'azure-devops', logo: '', name: 'Azure DevOps', color: 'blue', description: 'Azure DevOps provides developer services for support in planning, collaboration, and delivering software projects.' },
            { slug: 'unit-testing', logo: '', name: 'Unit Testing', color: 'yellow', description: 'Unit Testing involves testing individual components of software to validate that each part works as expected.' },
            { slug: 'integration-testing', logo: '', name: 'Integration Testing', color: 'pink', description: 'Integration Testing is a level of software testing where individual units are combined and tested as a group.' },
            { slug: 'ci-cd-pipelines', logo: '', name: 'CI/CD Pipelines', color: 'purple', description: 'CI/CD Pipelines automate the process of software integration, testing, and deployment.' },
            { slug: 'git', logo: '', name: 'Git', color: 'black', description: 'Git is a distributed version control system used to track changes in source code during software development.' },
            { slug: 'dependency-injection', logo: '', name: 'Dependency Injection', color: 'gray', description: 'Dependency Injection is a design pattern that allows for the separation of concerns in software architecture.' },
            { slug: 'linq', logo: '', name: 'LINQ', color: 'blue', description: 'LINQ (Language Integrated Query) is a component in .NET that adds native data querying capabilities to .NET languages.' },
            { slug: 'swagger', logo: '', name: 'Swagger', color: 'orange', description: 'Swagger is a framework for API development that provides a specification for describing RESTful APIs.' },
            { slug: 'docker', logo: '', name: 'Docker', color: 'cyan', description: 'Docker is a platform that enables developers to package applications into containers, making them portable and efficient.' },
            { slug: 'redis', logo: '', name: 'Redis', color: 'red', description: 'Redis is an open-source, in-memory data structure store used as a database, cache, and message broker.' },
            { slug: 'agile-methodologies', logo: '', name: 'Agile Methodologies', color: 'green', description: 'Agile Methodologies involve iterative development, where requirements and solutions evolve through collaboration.' }
        ],        
        name: 'Junior Software Developer',
        color: 'red',
        links: [
            { to: 'https://ibos.io/', label: 'Website' },
            { to: 'https://www.linkedin.com/company/akijiboslimited/', label: 'LinkedIn', newTab: true }
        ],
        logo: Assets.Unknown,  
        shortDescription: 'Engineered and maintained APIs with ASP.NET Core, leveraging Microservices and Azure DevOps for seamless CI/CD.'
    },    
	{
        slug: 'backend-developer-intern',
        company: 'AKIJ iBOS Limited',
        description: 'Contributed to backend development projects, enhancing customer applications using ASP.NET Core Web API.',
        contract: ContractType.Internship,
        type: 'Software Development',
        location: 'Kazi Nazrul Islam Rd, Dhaka',
        period: { from: new Date(2023, 9, 8), to: new Date(2024, 0, 1) },
        skills: [
            { slug: 'aspnet-core', logo: '', name: 'ASP.NET Core', color: 'red', description: 'A framework for building modern, cloud-based, and internet-connected applications.' },
            { slug: 'csharp', logo: '', name: 'C#', color: 'blue', description: 'A modern, object-oriented programming language developed by Microsoft.' },
            { slug: 'sql', logo: '', name: 'SQL', color: 'green', description: 'A standard language for managing and manipulating relational databases.' },
            { slug: 'restful-api', logo: '', name: 'RESTful API', color: 'cyan', description: 'A software architectural style for creating scalable web services.' },
            { slug: 'azure', logo: '', name: 'Azure', color: 'blue', description: 'A cloud computing service created by Microsoft for building, testing, and managing applications.' },
            { slug: 'devops', logo: '', name: 'DevOps', color: 'purple', description: 'A set of practices that combine software development (Dev) and IT operations (Ops) to improve collaboration and productivity.' }
        ],
        name: 'Backend Developer Intern',
        color: 'blue',
        links: [
            { to: 'https://ibos.io/', label: 'Website' },
            { to: 'https://www.linkedin.com/company/akijiboslimited/', label: 'LinkedIn', newTab: true }
        ],
        logo: Assets.Unknown,
        shortDescription: 'Enhanced applications through backend development using ASP.NET Core Web API.'
    },
    {
        slug: 'node-js-developer',
        company: 'DIGI5 Limited',
        description: 'Developed and maintained web applications for university professor, focusing on backend development using Nest JS and Next JS.',
        contract: ContractType.Contract,
        type: 'Backend Development',
        location: 'Remote',
        period: { from: new Date(2023, 6, 1), to: new Date(2023, 9, 1) },
        skills: [
            { slug: 'laravel', logo: '', name: 'Laravel', color: 'blue', description: 'A PHP framework for building web applications with expressive, elegant syntax.' },
            { slug: 'php', logo: '', name: 'PHP', color: 'purple', description: 'A popular general-purpose scripting language that is especially suited for web development.' },
            { slug: 'mysql', logo: '', name: 'MySQL', color: 'orange', description: 'An open-source relational database management system.' },
            { slug: 'html', logo: '', name: 'HTML', color: 'orange', description: 'The standard markup language for creating web pages and web applications.' },
            { slug: 'css', logo: '', name: 'CSS', color: 'blue', description: 'A style sheet language used for describing the presentation of a document written in HTML or XML.' },
            { slug: 'javascript', logo: '', name: 'JavaScript', color: 'yellow', description: 'A programming language that conforms to the ECMAScript specification. It is widely used for creating interactive effects within web browsers.' },
            { slug: 'git', logo: '', name: 'Git', color: 'orange', description: 'A distributed version control system used to track changes in source code during software development.' },
            { slug: 'restful-api', logo: '', name: 'RESTful API', color: 'cyan', description: 'A software architectural style for creating scalable web services.' },
            { slug: 'mvc', logo: '', name: 'MVC', color: 'purple', description: 'A design pattern used in software engineering for developing user interfaces by dividing an application into three interconnected components.' },
            { slug: 'unit-testing', logo: '', name: 'Unit Testing', color: 'blue', description: 'A software testing technique where individual units or components of a software are tested.' }
        ],
        name: 'Node JS Developer',
        color: 'green',
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Led backend development for university professor projects, leveraging Nest JS and Next JS to create dynamic web applications.'
    }   
    
];

export const title = 'Experience';
