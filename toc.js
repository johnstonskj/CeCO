// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="framework/index.html"><strong aria-hidden="true">2.</strong> Tools and Methods</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="framework/organization.html"><strong aria-hidden="true">2.1.</strong> Domains and Views</a></li><li class="chapter-item expanded "><a href="framework/cmaptools.html"><strong aria-hidden="true">2.2.</strong> Conceptual: CmapTools</a></li><li class="chapter-item expanded "><a href="framework/protege.html"><strong aria-hidden="true">2.3.</strong> Detailed: Protégé and OWL</a></li><li class="chapter-item expanded "><a href="framework/owl_guidelines.html"><strong aria-hidden="true">2.4.</strong> OWL Guidelines</a></li></ol></li><li class="chapter-item expanded "><a href="foundation/index.html"><strong aria-hidden="true">3.</strong> Foundation</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="foundation/core/index.html"><strong aria-hidden="true">3.1.</strong> Core</a></li><li class="chapter-item expanded "><a href="foundation/identity/index.html"><strong aria-hidden="true">3.2.</strong> Identity Aspects</a></li><li class="chapter-item expanded "><a href="foundation/structural/index.html"><strong aria-hidden="true">3.3.</strong> Structural Aspects</a></li><li class="chapter-item expanded "><a href="foundation/spatial/index.html"><strong aria-hidden="true">3.4.</strong> Spatial Aspects</a></li><li class="chapter-item expanded "><a href="foundation/temporal/index.html"><strong aria-hidden="true">3.5.</strong> Temporal Aspects</a></li><li class="chapter-item expanded "><a href="foundation/agreements/index.html"><strong aria-hidden="true">3.6.</strong> Agreements</a></li><li class="chapter-item expanded "><a href="foundation/artifacts/index.html"><strong aria-hidden="true">3.7.</strong> Artifacts</a></li></ol></li><li class="chapter-item expanded "><a href="domains/index.html"><strong aria-hidden="true">4.</strong> Domains</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="domains/actors/index.html"><strong aria-hidden="true">4.1.</strong> Actors</a></li><li class="chapter-item expanded "><a href="domains/advertising/index.html"><strong aria-hidden="true">4.2.</strong> Advertising</a></li><li class="chapter-item expanded "><a href="domains/customers/index.html"><strong aria-hidden="true">4.3.</strong> Customers</a></li><li class="chapter-item expanded "><a href="domains/finance/index.html"><strong aria-hidden="true">4.4.</strong> Finance</a></li><li class="chapter-item expanded "><a href="domains/inventory/index.html"><strong aria-hidden="true">4.5.</strong> Inventory</a></li><li class="chapter-item expanded "><a href="domains/legal/index.html"><strong aria-hidden="true">4.6.</strong> Legal</a></li><li class="chapter-item expanded "><a href="domains/offers/index.html"><strong aria-hidden="true">4.7.</strong> Offers</a></li><li class="chapter-item expanded "><a href="domains/products/index.html"><strong aria-hidden="true">4.8.</strong> Products</a></li><li class="chapter-item expanded "><a href="domains/spatial/index.html"><strong aria-hidden="true">4.9.</strong> Spatial</a></li><li class="chapter-item expanded "><a href="domains/manufacturing/index.html"><strong aria-hidden="true">4.10.</strong> Manufacturing</a></li></ol></li><li class="chapter-item expanded "><a href="references/index.html"><strong aria-hidden="true">5.</strong> References</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="references/term_index.html"><strong aria-hidden="true">5.1.</strong> Index</a></li><li class="chapter-item expanded "><a href="references/image_list.html"><strong aria-hidden="true">5.2.</strong> List of Images</a></li><li class="chapter-item expanded "><a href="references/owl_list.html"><strong aria-hidden="true">5.3.</strong> List of OWL Files</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
