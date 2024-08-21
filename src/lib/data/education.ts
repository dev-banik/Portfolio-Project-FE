import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
    {
        degree: 'Bachelor of Science',
        description: 'Computer Science and Engineering',
        location: 'Kuratoli, Dhaka',
        logo: Assets.Unknown,
        name: 'CGPA: 3.80',
        organization: 'American International University Bangladesh',
        period: { from: new Date(2020, 0, 16), to: new Date(2023, 11, 27) },
        shortDescription: '',
        slug: 'dummy-education-item',
        subjects: ['C++', 'C#', 'Python', 'Java', '.NET', 'Next Js', 'Computer Aided Design', 'Data Structure', 
            'Algorithm', 'Database', 'Artificial Intelliengence', 'Machine Learning', 'Operating System']
    },
    {
        degree: 'Higher Secondary School Certificate',
        description: 'Science',
        location: 'Motijheel, Dhaka',
        logo: Assets.Unknown,
        name: 'GPA: 4.25',
        organization: 'Motijheel Govt. Boys College',
        period: { from: new Date(2017, 9, 1), to: new Date(2019, 11, 0) },
        shortDescription: '',
        slug: 'dummy-education-item-2',
        subjects: []
    },
    {
        degree: 'Secondary School Certificate',
        description: 'Science',
        location: 'Banasree, Dhaka',
        logo: Assets.Unknown, 
        name: 'GPA: 5.00',
        organization: 'National Ideal School',
        period:  { from: new Date(2016, 0, 1), to: new Date(2017, 6, 0) },
        shortDescription: '',
        slug: 'dummy-education-item-3',
        subjects: []
    }
];

export const title = 'Education';
