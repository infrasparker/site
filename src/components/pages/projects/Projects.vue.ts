import Vue from 'vue';

export default Vue.extend({
    name: 'Projects',
    data: () => ({
        projects: 
            [
                {
                    name: 'Smash Bros. Lite',
                    description: 'A basic, 2-player, 2D version of the popular franchise Super Smash Bros, made with Java\'s Swing API. ',
                    image: 'smash.png',
                    link: 'https://github.com/infrasparker/smashBros'
                },
                {
                    name: 'Processing Renderings',
                    description: 'A collection of various renderings using Processing 3 and Python. Includes several '
                        + 'static images and animations, as well as a ray tracing simulation. Also contains a folder '
                        + 'with basic OpenGL implementations, fragment shaders, and vertex shaders.',
                    image: 'processing.png',
                    link: 'https://github.com/infrasparker/Rendering'
                },
                {
                    name: '2D Souls',
                    description: 'Another 2D game simulation, though the intent was to experience moreso than create '
                        + 'a complex game, hence the simplicity. This project is written in C, and uses DMA and pixel '
                        + 'scanning to deliver assets as quickly as possible to the rendering code.',
                        image: 'darksouls.png',
                    link: 'https://github.com/infrasparker/2D-DS3'
                },
                {
                    name: 'D&D Tool',
                    description: 'A desktop application for managing D&D encounters and characters made in .NET WPF.',
                    image: 'dndtool.png',
                    link: 'https://github.com/infrasparker/DndTool2'
                },
                {
                    name: 'Angular 2 Site',
                    description: 'A collection of random experimental pages that do various things, namely simulate '
                        + 'simple gambling machines or randomness states. Mainly to learn how to work with Angular 2.',
                    image: 'slots.jpg',
                    link: 'https://github.com/infrasparker/fundmyaddiction'
                },
                {
                    name: 'Vue Website',
                    description: 'This current website! Similar to a portfolio, but also for experimenting with Vue. '
                        + 'Contains work and project experience, personal information, and contact methods.',
                    image: 'profile.png',
                    link: 'https://github.com/infrasparker/site'
                }
            ]
        }
    )
})