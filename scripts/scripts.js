const selectors = {
    main: '.main',
    navBtn: '.nav__list-link,.work__description-link',
    curNavBtn: '.nav__list-link--current',
    anchorNavBtn: '.anchor-nav__list-item',
    currAnchorNavBtn: '.anchor-nav__list-link--current',
    courseInstance: '.course',
    curCourseInstance: '.course--current',
    img: 'div[class*="__media-img"] img',
    contentContainer: '.content-container',
    previewSet: '.preview__backdrop, .preview',
    preview: '.preview',
    previewBackdrop: '.preview__backdrop',
    previewBox: '.preview__box',
    previewIndicator: '.preview__indicator',
    previewImg: '.preview__box-img',
    previewDescription: '.preview__box-description',
    previewControl: '.preview__control',
    previewBackwards: '.preview__control--backwards',
    previewForwards: '.preview__control--forwards',
    previewClose: '.preview__box-close, .preview__backdrop',
    certificateTrigger: '#certificateTrigger',
    certificateList: '#certificateList',
    languageToggle: '.header__logo-lang-bar, .header__logo img',
    projectsSection: '#projectsSection',
}


class HomePageRouter {
    // offset from top of projectsSection divs
    workProjectsDivTop = 0;
    personalProjectsDivTop = 0;
    studyProjectsDivTop = 0;

    // toggle swipe event listener
    swipeLeftEventListenerStatus = 'enabled';
    swipeRightEventListenerStatus = 'enabled';

    init() {
        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.handleNavBtnClick();
        this.handleSectionBtnClick();
        this.handleCourseInstanceClick();
        this.handleImgClick();
        this.handlePreviewControlClick();
        this.handlePreviewCloseClick();
        this.handleCertificateTriggerClick();
        this.handlePreviewImgSwipeLeft();
        this.hanhandlePreviewImgSwipeRight();
        this.handleLanguageToggleClick();
        this.handleScrollInProjectTab();
    }

    handleNavBtnClick() {
        const { navBtn, main, curCourseInstance, curNavBtn, currAnchorNavBtn } = selectors;
        $(navBtn).on('click', (e) => {
            $(curNavBtn).removeClass('nav__list-link--current');
            $(e.target).addClass('nav__list-link--current');
            const mainComponentId = `#${$(e.target).attr('id')}Section`;
            if (mainComponentId === '#coursesSection') {
                $(curCourseInstance).removeClass('course--current');
            }
            if (mainComponentId === '#projectsSection') {
                this.makeAnchorNavCurrent('#workProjects');
                setTimeout( function(){ 
                    this.workProjectsDivTop = $('#workProjectsDiv').offset().top;
                    this.personalProjectsDivTop = $('#personalProjectsDiv').offset().top;
                    this.studyProjectsDivTop = $('#studyProjectsDiv').offset().top;
                }  , 100 );

            }
            $(main).children().filter(':visible').addClass('hidden');
            $(mainComponentId).removeClass('hidden');
        })
    }

    handleScrollInProjectTab() {
        $(document).on('scroll', function (event) {
            if($(projectsSection).is(":visible")) {
                const doc = document.documentElement;
                const currPos = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                console.log(currPos);
                if (currPos <= this.workProjectsDivTop) {
                    console.log(this.workProjectsDivTop);
                    this.makeAnchorNavCurrent('#workProjects');
                } else if ( currPos <= this.personalProjectsDivTop ) {
                    this.makeAnchorNavCurrent('#personalProjectsDiv');
                } else if ( currPos <= this.studyProjectsDivTop ) {
                    this.makeAnchorNavCurrent('#studyProjectsDiv');
                }
            }
        });
    }

    makeAnchorNavCurrent(selector) {
        $('.anchor-nav__list-link--current').removeClass('anchor-nav__list-link--current');
        $(selector).addClass('anchor-nav__list-link--current');
    }


    handleSectionBtnClick() {
        const { anchorNavBtn, currAnchorNavBtn } = selectors;
        $(anchorNavBtn).on('click', (e) => {
            $(currAnchorNavBtn).removeClass('anchor-nav__list-link--current');
            $(e.target).addClass('anchor-nav__list-link--current');
            const projectsDivId = `#${$(e.target).attr('id')}Div`;
            location.hash = projectsDivId;
            location.href = projectsDivId;
        })
    }

    handleCourseInstanceClick() {
        const { courseInstance, curCourseInstance } = selectors;
        $(courseInstance).on('click', (e) => {
            if ($(e.target).parents(courseInstance).hasClass('course--current')) {
                $(e.target).parents(courseInstance).removeClass('course--current');
            } else {
                $(curCourseInstance).removeClass('course--current');
                $(e.target).parents(courseInstance).addClass('course--current');
            }
        })
    }

    handleImgClick() {
        const { img, previewSet, preview } = selectors;

        $(img).on('click', (e) => {
            this.displayPreviewImg($(e.target));
            $('body').css('overflow', 'hidden');

            disableScroll();

            $(previewSet).animate({ 'opacity': '.50' }, 300, 'linear');
            $(preview).animate({ 'opacity': '1' }, 300, 'linear');
            $(previewSet).css('display', 'grid');
        })
    }

    displayPreviewImg($img) {
        const { previewImg, previewDescription, previewBackwards, previewForwards, previewIndicator } = selectors;
        const $imgDiv = $img.parent();
        const $allImagesInAlbum = $img.parents('div[class$="__media"]').find('img');
        const imgWidth = $imgDiv.width();
        const imgHeight = $imgDiv.height();
        const imgSrc = $img.attr('src');
        const imgDescription = $img.attr('alt');

        $(previewImg).attr('src', imgSrc);
        $(previewDescription).text(imgDescription);
        $(previewIndicator).empty();

        $.each($allImagesInAlbum, (i, img) => {
            const currSrc = $(img).attr('src');
            if (currSrc === imgSrc) {
                $(previewIndicator).append(`<span class="preview__indicator-item preview__indicator-item--current" data-src=${currSrc}></span>`)
            } else {
                $(previewIndicator).append(`<span class="preview__indicator-item" data-src=${currSrc}></span>`)
            }
        });

        let maxWidth = 0.90 * $(window).width() - 10;
        let maxHeight = 0.75 * $(window).height() - 30;
        $(previewImg).width(maxWidth);
        $(previewImg).height('auto');

        if ($(window).width() < 600) {
            if (imgWidth <= imgHeight) {
                let previewRatio = maxWidth / imgWidth;
                if (previewRatio * imgHeight <= maxHeight) {
                    $(previewImg).height(previewRatio * imgHeight);
                    $(previewImg).width('auto');
                } else {
                    previewRatio = maxHeight / imgHeight;
                    $(previewImg).width(previewRatio * imgWidth);
                    $(previewImg).height('auto');
                }
            }
        } else {
            if (imgWidth > imgHeight) {
                let previewRatio = maxHeight / imgHeight;
                if (previewRatio * imgWidth <= maxWidth) {
                    $(previewImg).height('auto');
                    $(previewImg).width(previewRatio * imgWidth);
                } else {
                    previewRatio = maxWidth / imgWidth;
                    $(previewImg).width('auto');
                    $(previewImg).height(previewRatio * imgHeight);
                }
            } else {
                $(previewImg).width('auto');
                $(previewImg).height(maxHeight);
            }
        }

        if ($img.parent().next('div[class$="-img"]').find('img').length === 0) {
            this.swipeLeftEventListenerStatus = 'disabled';
            $(previewForwards).addClass('invisible');
        } else {
            this.swipeLeftEventListenerStatus = 'enabled';
            $(previewForwards).removeClass('invisible');
        }
        if ($img.parent().prev('div[class$="-img"]').find('img').length === 0) {
            $(previewBackwards).addClass('invisible');
            this.swipeRightEventListenerStatus = 'disabled';
        } else {
            $(previewBackwards).removeClass('invisible');
            this.swipeRightEventListenerStatus = 'enabled';
        }
    }

    handlePreviewCloseClick() {
        const { previewClose, previewSet } = selectors;
        $(previewClose).on('click', () => {
            enableScroll();
            $(previewSet).animate({ 'opacity': '0' }, 300, 'linear', () => {
                $(previewSet).css('display', 'none');
            });
        })
    }

    handlePreviewControlClick() {
        const { previewControl } = selectors;

        $(previewControl).on('click', (e) => {
            const previewControlClass = $(e.target).parent().attr('class');

            if (previewControlClass.includes('forwards')) {
                this.changePreviewImage('next');
            } else if (previewControlClass.includes('backwards')) {
                this.changePreviewImage('previous');
            }
        })
    }

    handleCertificateTriggerClick() {
        const { certificateTrigger, certificateList } = selectors;
        $(certificateTrigger).on('click', (e) => {

            const listClass = $(certificateList).attr('class')
            if (listClass === 'text-like-list hidden') {
                $(certificateTrigger).attr('data-collaps', '▼')
                $(certificateList).show();
                $(certificateList).addClass('animations-fancy-list');
            } else {
                $(certificateList).find('li').animate({ 'opacity': '0' }, 500, 'linear', () => {
                    $(certificateList).css('display', 'none');
                    $(certificateTrigger).attr('data-collaps', '►')
                    $(certificateList).removeClass('animations-fancy-list');
                });
            }
        })
    }

    handlePreviewImgSwipeLeft() {
        const { previewImg } = selectors;
        $(previewImg).on('swipeleft', (e) => {
            if (this.swipeLeftEventListenerStatus === 'disabled') {
                return;
            } else {
                this.changePreviewImage('next');
            }
        })

    }

    hanhandlePreviewImgSwipeRight() {
        const { previewImg } = selectors;

        $(previewImg).on('swiperight', (e) => {
            if (this.swipeRightEventListenerStatus === 'disabled') {
                return;
            } else {
                this.changePreviewImage('previous');
            }
        })
    }

    changePreviewImage(position) {
        const { previewImg } = selectors;

        const relPath = $(previewImg).attr('src');
        const $thumbnailImg = $('div[class$="-img"]').find(`img[src="${relPath}"]`).not('.preview__box-img');

        let $newPrevImage = '';
        if (position === 'next') {
            $newPrevImage = $thumbnailImg.parent().next('div[class$="-img"]').find('img');
        } else if (position === 'previous') {
            $newPrevImage = $thumbnailImg.parent().prev('div[class$="-img"]').find('img');
        }

        $(previewImg).css('opacity', '0');
        this.displayPreviewImg($newPrevImage);
        $(previewImg).animate({ opacity: '1' }, 600, 'linear');
    }

    handleLanguageToggleClick() {
        const { languageToggle } = selectors;

        $(languageToggle).on('click', (e) => {
            const $languageBar = $(e.target).parents('.header__logo').find('.header__logo-lang-bar');
            if (!$languageBar.is(':visible')) return;

            const currSection = $('.nav__list-link--current').attr('id');

            if ($languageBar.text() === 'EN') {
                switchLanguageTo('DE', currSection);
            } else if ($languageBar.text() === 'DE') {
                switchLanguageTo('EN', currSection);
            }
            this.init();
            $(`#${currSection}`).click();
        })
    }
}

window.HomePageRouter = HomePageRouter;


