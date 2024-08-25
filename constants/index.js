export const websiteLinks = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Who we are',
        route: '/who-we-are',
    },
    {
        label: 'Our Programs',
        route: '/our-programs',
        subLinks: [
            {
                label: 'Program 1',
                route: '/our-programs/program-1',
            },
            {
                label: 'Program 2',
                route: '/our-programs/program-2',
            },
            {
                label: 'Program 3',
                route: '/our-programs/program-3',
            },
            {
                label: 'Program 4',
                route: '/our-programs/program-4',
            },

        ],
        
    },
    {
        label: 'Volunteer',
        route: '/volunteer',
    },
    {
        label: 'Events',
        route: '/events',
    },
    {
        label: 'Contacts',
        route: '/contacts',
    },

];


export const events = [
    {
        title: 'Help for language. Voluanteer',
        date: 'April 15 – April 20, 2023',
        description: 'Many children are abandoned by their parents, but when appropriate conditions are created…',
        link: "/",
        imgUrl: "/images/event1.webp"
    },
    {
        title: 'Communities that you can help',
        date: 'April 15 – April 20, 2023',
        description: 'Support for children with disabilities from low-income and disadvantaged families.',
        link: "/",
        imgUrl: "/images/event2.webp"
    },
    {
        title: 'The culture of Africa. Rebirth',
        date: 'April 15 – April 20, 2023',
        description: 'Give your child a chance at a healthy life. Your help will return hope.',
        link: "/",
        imgUrl: "/images/event3.webp"
    },
];

export const programs = [
    {
        title: 'Fighting poverty by improving health.',
        description: 'Many children are abandoned by their parents, but when appropriate conditions are created…',
        link : "/our-programs/fighting-poverty-by-improving-health"
    },
    {
        title: 'Invested in education.',
        description: 'Support for children with disabilities from low-income and disadvantaged families.',
        link : "/our-programs/invested-in-education"
    },
    {
        title: 'The joy of life.',
        description: 'Support for children with disabilities from low-income and disadvantaged families.',
        link : "/our-programs/the-joy-of-life"
    },
    {
        title: 'Together against the elements.',
        description: 'Give your child a chance at a healthy life. Your help will return hope.',
        link : "/our-programs/working-for-a-better-future"
    },
];