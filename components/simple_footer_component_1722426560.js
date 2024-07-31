/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722426560", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-400 to-purple-600">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 backdrop-blur-md bg-white/20 rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9 filter drop-shadow-lg" alt="Landwind Logo" />
                            Feature Insights
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white font-medium">
                        Get valuable insights on new product features with our powerful analysis tools. Track user feedback, compare performance metrics, and make data-driven decisions to drive innovation.
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
