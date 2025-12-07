const initGallery = () => {
    const galleryEl = document.querySelector('.product-gallery .swiper');

    if (!galleryEl) return;

    const updateNavigation = (swiper) => {
        const { prevEl, nextEl } = swiper.navigation;
        const totalSlides = swiper.slides.length;
        const isSingleSlide = totalSlides <= 1;

        if (isSingleSlide) {
            if (prevEl) {
                prevEl.style.display = 'none';
            }
            if (nextEl) {
                nextEl.style.display = 'none';
            }
            return;
        }

        if (prevEl) {
            prevEl.style.display = swiper.realIndex === 0 ? 'none' : '';
        } 

        if (nextEl) {
            nextEl.style.display = swiper.realIndex === totalSlides - 1 ? 'none' : '';
        }
    };

    const gallery = new Swiper(galleryEl, {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        on: {
            init: (swiper) => updateNavigation(swiper),
            slideChange: (swiper) => updateNavigation(swiper)
        }
    });

    if (typeof subscribe !== 'undefined' && PUB_SUB_EVENTS?.variantChange) {
        subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
            const variant = event.data?.variant;
            if (!variant?.featured_media?.id) return;

            const mediaId = variant.featured_media.id;
            const gallerySlide = document.querySelector(`.product-gallery .swiper-slide[data-media-id="${mediaId}"]`);
            const galleryIndex = gallerySlide?.dataset.index;

            if (galleryIndex) {
                gallery.slideTo(parseInt(galleryIndex, 10) - 1);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initGallery);