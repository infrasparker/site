import Vue from 'vue';

export default Vue.extend({
    name: 'AboutMe',
    data: () => (
        {
            aboutMe: [
                'I am a software engineer currently living in the San Francisco Bay Area.',
                'I love working with new technology to build modern applications and computer systems.',
            ],
            bio: [
                {
                    heading: 'UPenn SAAST',
                    text: 'I started programming when I was a second-year in high school after applying to '
                        + 'University of Pennsylvania\'s Summer Academy in Applied Science and Technology (SAAST) '
                        + 'Program. There, I attended an entry-level college class in Computer Science with around '
                        + '20 students, lead by a PHD student named Peter Michael Osera. He taught us basic and '
                        + 'intermediate level Python, eventually giving us a final project to create a game and '
                        + 'present it. I had enjoyed the program so much and loved coding to such a degree that '
                        + 'I went far beyond the expected curve, programming a small 2D version of Super Smash Bros.'
                },
                {
                    heading: 'High School',
                    text: 'In my senior year of high school, I took AP Computer Science and began to learn Java. '
                        + 'I immediately began migrating my game to the new language, using Java Swing as a base. '
                        + 'I decided to pursue Computer Science as my major in college, giving lessons to my peers and '
                        + 'looking deeper into my personal projects.'
                },
                {
                    heading: 'University',
                    text: 'After receiving an offer from the Georgia Institute of Technology, I began working towards '
                    + 'my BS in Computer Science, with specialization in Systems and Architecture and Media since my '
                    + 'primary interests were software and game design. I took a job in freshman year teaching young '
                    + 'students to program at iD Tech Camps, their final project being to code a game like I once had. '
                    + 'I took 2 internships in subsequent years before graduating, and in my last year was offered a '
                    + 'job in Macys.com San Francisco, where I had planned to move anyway to be together with my '
                    + 'girlfriend who attended college at UC Berkeley.'
                }
            ]
        }
    )
})