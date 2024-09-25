const thumbnails = [
    {
        imgSrc: 'phuc-37',
        title: 'Phuc and brand identify design',
        subTitle: '22-07-2024 9:41',
        like: 210,
        view: 2005
    },
    {
        imgSrc: 'latte-6',
        title: 'Latte design',
        subTitle: '24-07-2024 9:41',
        like: 120,
        view: 1400
    },
    {
        imgSrc: 'rom-56',
        title: 'Rom and brand identify design',
        subTitle: '11-08-2024 9:41',
        like: 180,
        view: 1890
    },
    {
        imgSrc: 'kuva-28',
        title: 'Kuva logo & brand identity design',
        subTitle: '11-08-2024 9:41',
        like: 215,
        view: 2250
    },

    {
        imgSrc: 'kizo-29',
        title: 'Kizo - Branding',
        subTitle: '09-08-2024 9:41',
        like: 120,
        view: 1900
    },
]
for (let i = 6; i <= 21; i++) {
    thumbnails.push({
        imgSrc: `${i}`,
        title: 'thumb ' + i + ' & brand identity design',
        subTitle: '09-08-2024 9:41',
        like: Math.floor(Math.random() * (400 - 100) + 100),
        view: Math.floor(Math.random() * (2500 - 1900) + 1900)
    })
}
export { thumbnails }