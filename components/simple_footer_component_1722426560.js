/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722426560", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-500 to-purple-700">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16 backdrop-blur-2xl bg-white/10 rounded-3xl shadow-2xl border border-white/30">
                <hr id="footer-divider" class="my-8 border-pink-300/50 sm:mx-auto">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-5xl font-extrabold text-white drop-shadow-xl">
                            <img id="footer-logo" src="./images/logo.svg" class="h-12 mr-4 sm:h-14 filter drop-shadow-xl" alt="Landwind Logo" />
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-purple-200">Feature Insights</span>
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-2xl text-center text-white font-semibold leading-relaxed backdrop-blur-3xl bg-white/20 p-10 rounded-3xl shadow-xl border border-white/30">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-100 to-purple-100">Get valuable insights on new product features with our powerful analysis tools. Track user feedback, compare performance metrics, and make data-driven decisions to drive innovation.</span>
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
