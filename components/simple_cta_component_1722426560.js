/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722426560", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-3xl shadow-2xl p-12 border border-white border-opacity-20">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-5xl font-extrabold leading-tight tracking-wide text-white text-opacity-90 drop-shadow-xl">Unlock Cosmic Product Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-light text-white text-opacity-80 text-xl leading-relaxed">Navigate the celestial realm of data-driven analytics to discover otherworldly features and drive interstellar innovation.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 font-semibold rounded-full text-xl px-10 py-4 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm shadow-lg">Embark on Your Cosmic Journey</a>
                </div>
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
