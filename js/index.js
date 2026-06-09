document.addEventListener("DOMContentLoaded", () => {

    /* ── Fixed header offset ───────────────────────────────────────────────── */
    const siteHeader = document.querySelector(".site-header");
    const applyOffset = () => {
        if (siteHeader) {
            document.body.style.paddingTop = siteHeader.offsetHeight + "px";
        }
    };
    applyOffset();
    window.addEventListener("resize", applyOffset, { passive: true });

    /* ── Top-bar marquee: inject duplicate span only on mobile (<768px) ────── */
    const topBarTrack = document.querySelector(".top-bar-track");
    const topBarText  = document.querySelector(".top-bar-text");
    let cloneInjected = false;

    const handleMarquee = () => {
        if (!topBarTrack || !topBarText) return;
        if (window.innerWidth < 768) {
            if (!cloneInjected) {
                const clone = topBarText.cloneNode(true);
                clone.classList.add("top-bar-clone");
                clone.setAttribute("aria-hidden", "true");
                const gap = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u2022\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
                const spacer = document.createTextNode(gap);
                topBarTrack.appendChild(spacer);
                topBarTrack.appendChild(clone);
                cloneInjected = true;
            }
        } else {
            if (cloneInjected) {
                const clone = topBarTrack.querySelector(".top-bar-clone");
                if (clone) {
                    if (clone.previousSibling && clone.previousSibling.nodeType === 3) {
                        topBarTrack.removeChild(clone.previousSibling);
                    }
                    topBarTrack.removeChild(clone);
                }
                cloneInjected = false;
            }
        }
    };

    handleMarquee();
    window.addEventListener("resize", handleMarquee, { passive: true });

    /* ── Smooth scroll for anchor links ────────────────────────────────────── */
    const getHeaderOffset = () => siteHeader ? siteHeader.offsetHeight : 0;

    const smoothScrollTo = (targetId) => {
        const target = document.getElementById(targetId);
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
        window.scrollTo({ top, behavior: "smooth" });
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;

        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;

        e.preventDefault();

        const runScroll = () => {
            smoothScrollTo(targetId);
            setActive(`#${targetId}`);
        };

        if (mobileMenu && mobileMenu.classList.contains("open")) {
            closeMenu();
            requestAnimationFrame(() => {
                requestAnimationFrame(runScroll);
            });
        } else {
            runScroll();
        }
    });
});

    /* ── Hamburger & mobile menu ───────────────────────────────────────────── */
    const hamburger  = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    const openMenu = () => {
        if (!hamburger || !mobileMenu) return;
        hamburger.classList.add("open");
        mobileMenu.classList.add("open");
        hamburger.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
        if (!hamburger || !mobileMenu) return;
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
    };

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            if (hamburger.classList.contains("open")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => closeMenu());
        });

        /* Close on outside click — only when menu is open */
        document.addEventListener("click", (e) => {
            if (
                mobileMenu.classList.contains("open") &&
                !e.target.closest(".navbar")
            ) {
                closeMenu();
            }
        });

        /* Close on resize to desktop */
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) closeMenu();
        }, { passive: true });
    }

    /* ── Active nav on scroll ──────────────────────────────────────────────── */
    const sections = [
        { id: "home",      href: "#home" },
        { id: "about",     href: "#about" },
        { id: "why-us",    href: "#why-us" },
        { id: "services",  href: "#services" },
        { id: "portfolio", href: "#portfolio" },
        { id: "clients",   href: "#clients" },
        { id: "contact",   href: "#contact" },
    ];

    const desktopLinks = document.querySelectorAll(".nav-links a");
    const mobileLinks  = document.querySelectorAll(".mobile-nav-links a");

    const setActive = (href) => {
        [...desktopLinks, ...mobileLinks].forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === href);
        });
    };

    const onScroll = () => {
        const scrollY = window.pageYOffset;
        const offset  = getHeaderOffset() + 10;
        let current   = sections[0].href;

        for (const sec of sections) {
            const el = document.getElementById(sec.id);
            if (!el) continue;
            if (el.offsetParent === null) continue;
            if (el.getBoundingClientRect().top + window.pageYOffset - offset <= scrollY) {
                current = sec.href;
            }
        }

        setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
});