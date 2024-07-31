/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722426560", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-400 to-purple-600">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16 backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20">
                <hr id="footer-divider" class="my-8 border-pink-300/30 sm:mx-auto">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-4xl font-bold text-white drop-shadow-lg">
                            <img id="footer-logo" src="./images/logo.svg" class="h-10 mr-4 sm:h-12 filter drop-shadow-lg" alt="Landwind Logo" />
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">Feature Insights</span>
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-xl text-center text-white font-medium leading-relaxed backdrop-blur-sm bg-white/5 p-8 rounded-3xl shadow-lg border border-white/10">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-purple-200">Get valuable insights on new product features with our powerful analysis tools. Track user feedback, compare performance metrics, and make data-driven decisions to drive innovation.</span>
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
