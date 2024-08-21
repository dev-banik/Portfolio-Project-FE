import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
    {
        slug: 'dynamic-todo-react',
        color: '#61dafb',
        description:
            'A dynamic to-do list application built with React. Features include task management, categorization, and persistence using local storage.',
        shortDescription:
            'A React-based to-do list app with task management and local storage integration.',
        links: [{ to: 'https://github.com/YourUsername/dynamic-todo-react', label: 'GitHub' }],
        logo: Assets.ReactJs,
        name: 'Dynamic To-Do List',
        period: {
            from: new Date(2024, 5, 1),
            to: new Date(2024, 7, 1)
        },
        skills: getSkills('react', 'typescript', 'tailwind', 'local-storage'),
        type: 'Web Application'
    },
    {
        slug: 'weather-dashboard-vue',
        color: '#42b883',
        description:
            'A weather dashboard application built with Vue.js. Provides real-time weather information and forecasts based on user input.',
        shortDescription:
            'Vue.js weather dashboard with real-time weather updates and forecasts.',
        links: [{ to: 'https://github.com/YourUsername/weather-dashboard-vue', label: 'GitHub' }],
        logo: Assets.VueJs,
        name: 'Weather Dashboard',
        period: {
            from: new Date(2024, 3, 1),
            to: new Date(2024, 5, 1)
        },
        skills: getSkills('vue', 'javascript', 'axios', 'css'),
        type: 'Web Application'
    },
    {
        slug: 'chat-app-node',
        color: '#68a063',
        description:
            'A real-time chat application built with Node.js and Socket.io. Allows multiple users to chat with each other in real-time.',
        shortDescription:
            'Real-time chat app with Node.js and Socket.io for real-time communication.',
        links: [{ to: 'https://github.com/YourUsername/chat-app-node', label: 'GitHub' }],
        logo: Assets.NodeJs,
        name: 'Real-Time Chat App',
        period: {
            from: new Date(2024, 7, 1),
            to: new Date(2024, 9, 1)
        },
        skills: getSkills('nodejs', 'socket.io', 'express', 'javascript'),
        type: 'Web Application'
    },
    {
        slug: 'ecommerce-platform-django',
        color: '#092e20',
        description:
            'An e-commerce platform built with Django. Features include product listings, user authentication, and shopping cart functionality.',
        shortDescription:
            'Django-based e-commerce platform with product management and user authentication.',
        links: [{ to: 'https://github.com/YourUsername/ecommerce-platform-django', label: 'GitHub' }],
        logo: Assets.Django,
        name: 'E-Commerce Platform',
        period: {
            from: new Date(2024, 1, 1),
            to: new Date(2024, 4, 1)
        },
        skills: getSkills('django', 'python', 'postgresql', 'bootstrap'),
        type: 'Web Application'
    } 
    
    
    
];

export const title = 'Projects';
