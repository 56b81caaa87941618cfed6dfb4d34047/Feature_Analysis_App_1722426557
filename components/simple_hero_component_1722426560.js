/* Summary: The hero component contains the following two parts:
- To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
- To the right: There is an image relevant to the app.
*/
        <section id="hero-section" class="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 flex-1 min-h-screen">
                <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 rounded-3xl p-10 shadow-2xl border border-white border-opacity-30">
                        <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-200 text-shadow-lg">Unleash Product Innovation</h1>
                        <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-pink-100 lg:mb-8 md:text-lg lg:text-xl text-shadow">Analyze New Features with Powerful Insights</p>
                            <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-pink-300 rounded-full sm:w-auto hover:bg-pink-400 hover:bg-opacity-30 focus:ring-4 focus:ring-pink-300 transition duration-300 backdrop-filter backdrop-blur-lg">Get Started</a>
                            <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white border border-purple-300 rounded-full sm:w-auto hover:bg-purple-400 hover:bg-opacity-30 focus:ring-4 focus:ring-purple-300 transition duration-300 backdrop-filter backdrop-blur-lg">Learn More</a>
                        <button id="hello-world-button" class="flex-1 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 backdrop-filter backdrop-blur-lg">
                    <img id="hero-image" src="./images/hero.png" alt="hero image" class="rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg">
Vue.component("simple_hero_component_1722426560", {
    template: `
        <section id="hero-section" class="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex-1 min-h-screen">
            <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 rounded-3xl p-10 shadow-2xl border border-white border-opacity-30">
                    
                    <div id="hero-title-container-text" class="flex">
                        <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight md:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-200 text-shadow-lg">Unleash Product Innovation</h1>
                    </div>

                    <div id="hero-subtitle-container" class="flex">
                        <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-pink-100 lg:mb-8 md:text-lg lg:text-xl text-shadow">Analyze New Features with Powerful Insights</p>
                    </div>

                    <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div id="hero-button-1-container" class="flex">
                            <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-pink-300 rounded-full sm:w-auto hover:bg-pink-400 hover:bg-opacity-30 focus:ring-4 focus:ring-pink-300 transition duration-300 backdrop-filter backdrop-blur-lg">Get Started</a>
                        </div>

                        <div id="hero-button-2-container" class="flex">
                            <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white border border-purple-300 rounded-full sm:w-auto hover:bg-purple-400 hover:bg-opacity-30 focus:ring-4 focus:ring-purple-300 transition duration-300 backdrop-filter backdrop-blur-lg">Learn More</a>
                        </div>
                    </div>

                    <div id="hello-world-button-container" class="flex mt-4">
                        <button id="hello-world-button" class="flex-1 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 backdrop-filter backdrop-blur-lg">
                            Hello World
                        </button>
                    </div>
                    
                </div>
                <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img id="hero-image" src="./images/hero.png" alt="hero image" class="rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg">
                </div>
            </div>
        </section>            
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
