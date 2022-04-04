export type SortableKeys = 'title' | 'date'

export type Place = {
    description: string
    title: string
    date: Date
    coordinates: [number, number]
    type: string
    img?: string
}

const places: Record<string, Place[]> = {
    entries: [
        {
            title: 'Pacific Grove, California',
            description:
                'I was born in Pacific Grove, CA in 1994 and have lived most of my life in this beautiful place.',
            date: new Date('1994-04-18'),
            coordinates: [-121.91, 36.6177],
            type: 'life',
            img: '/baby.jpg',
        },
        {
            title: 'Hayama, Japan',
            description:
                "Growing up, I visited my grandmother's home in Hayama, Japan for summer breaks with my sister!",
            date: new Date('2001-06-18'),
            coordinates: [139.5862, 35.272],
            type: 'life',
            img: '/hayama.jpg',
        },
        {
            title: 'Monterey, California',
            description:
                'I became a huge jazz nerd and in highschool I ended up performing at the world famous Monterey Jazz Festival. I wanted a career in music!',
            date: new Date('2010-07-18'),
            coordinates: [-121.8635, 36.5947],
            type: 'music',
            img: '/mjf.jpg',
        },
        {
            title: 'Nanao, Japan',
            description:
                "I even performed in the Monterey Jazz Festival in Noto (Monterey's sister city)!",
            date: new Date('2010-08-18'),
            coordinates: [136.9674, 37.0429],
            type: 'music',
            img: '/nanao.jpg',
        },
        {
            title: 'La Jolla, California',
            description:
                'In the end I decided to pursue my other passion: tech! So I decided to get my BS in Computer Science at the University of California, San Diego.',
            date: new Date('2014-08-10'),
            coordinates: [-117.234, 32.8801],
            type: 'education',
            img: '/ucsd.jpg',
        },
        {
            title: 'Sendai, Japan',
            description:
                'I wanted to practice Japanese and try my hand at robotics so I did research abroad for one year at Tohoku University in Sendai, Japan.',
            date: new Date('2016-09-25'),
            coordinates: [140.8694, 38.2682],
            type: 'education',
            img: '/tohoku.jpg',
        },
        {
            title: 'Mount Asahidake, Japan',
            description:
                'I enjoyed hiking all over Japan. One of my favorite hikes was in Hokkaido in Daisetsuzan National Park!',
            date: new Date('2017-08-10'),
            coordinates: [142.8543, 43.6637],
            type: 'hiking',
            img: '/asahidake.jpg',
        },
        {
            title: 'Mount Fuji, Japan',
            description:
                'Before I returned to California, I knew I wanted to peak Mt. Fuji. I did but I ended up breaking my leg from a slip!',
            date: new Date('2017-08-20'),
            coordinates: [138.7274, 35.3606],
            type: 'hiking',
            img: '/fuji.jpg',
        },
        {
            title: 'San Diego, California',
            description:
                'I graduated from UCSD in 2019 and since then, I have been building the frontend for the Geospatial Expoloitation Product (GXP) at BAE Systems.',
            date: new Date('2019-04-01'),
            coordinates: [-117.0918, 33.0104],
            type: 'work',
            img: '/bae.jpg',
        },
    ],
}

export default places
