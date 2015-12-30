/* global Flickity */

/**
 * Flickity.js
 * http://flickity.metafizzy.co/options.html
 *
 * Required markup
 *
 * <div bc-flickity flickity-draggable="true" ...>
 *   <div>
 *   <div>
 *   ...
 * </div>
 *
 */
export function FlickityDirective(
    $timeout
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        scope: {
            flickityAccessibility: '=?',
            flickityAutoPlay: '=?',
            flickityCellAlign: '=?',
            flickityCellSelector: '=?',
            flickityContain: '=?',
            flickityDraggable: '=?',
            flickityFreeScroll: '=?',
            flickityFriction: '=?',
            flickityInitialIndex: '=?',
            flickityLazyLoad: '=?',
            flickityPercentPosition: '=?',
            flickityPrevNextButton: '=?',
            flickityArrowShape: '=?',
            flickityPageDots: '=?',
            flickityResize: '=?',
            flickityRightToLeft: '=?',
            flickitySetGallerySize: '=?',
            flickityWatchCss: '=?',
            flickityWrapAround: '=?',
            flickityImagesLoaded: '=?',
            flickityAsNavFor: '=?',
            flickitySelectedAttraction: '=?',
            flickityFreeScrollFriction: '=?',
        },
        link: linkFunction,
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element) {

        const defaultInitialIndex = 0;
        const defaultFriction = .2;
        const defaultCellAlign = 'center';

        // Define the option object using any user defined options while falling back to defaults
        const flickityOptions = {
            accessibility: angular.isDefined($scope.flickityAccessibility) ?
                $scope.flickityAccessibility : true,
            autoPlay: angular.isDefined($scope.flickityAutoPlay) ?
                $scope.flickityAutoPlay : false,
            cellAlign: angular.isDefined($scope.flickityCellAlign) ?
                $scope.flickityCellAlign : defaultCellAlign,
            cellSelector: angular.isDefined($scope.flickityCellSelector) ?
                $scope.flickityCellSelector : undefined,
            contain: angular.isDefined($scope.flickityContain) ?
                $scope.flickityContain : false,
            draggable: angular.isDefined($scope.flickityDraggable) ?
                $scope.flickityDraggable : true,
            freeScroll: angular.isDefined($scope.flickityFreeScroll) ?
                $scope.flickityFreeScroll : false,
            freeScrollFriction: angular.isDefined($scope.flickityFreeScrollFriction) ?
                $scope.flickityFreeScrollFriction : false,
            selectedAttraction: angular.isDefined($scope.flickitySelectedAttraction) ?
                $scope.flickitySelectedAttraction : true,
            friction: angular.isDefined($scope.flickityFriction) ?
                $scope.flickityFriction : defaultFriction,
            initialIndex: angular.isDefined($scope.flickityInitialIndex) ?
                $scope.flickityInitialIndex : defaultInitialIndex,
            lazyLoad: angular.isDefined($scope.flickityLazyLoad) ?
                $scope.flickityLazyLoad : true,
            percentPosition: angular.isDefined($scope.flickityPercentPosition) ?
                $scope.flickityPercentPosition : true,
            prevNextButtons: angular.isDefined($scope.flickityPrevNextButton) ?
                $scope.flickityPrevNextButton : true,
            pageDots: angular.isDefined($scope.flickityPageDots) ?
                $scope.flickityPageDots : true,
            resize: angular.isDefined($scope.flickityResize) ?
                $scope.flickityResize : true,
            rightToLeft: angular.isDefined($scope.flickityRightToLeft) ?
                $scope.flickityRightToLeft : false,
            setGallerySize: angular.isDefined($scope.flickitySetGallerySize) ?
                $scope.flickitySetGallerySize : true,
            watchCSS: angular.isDefined($scope.flickityWatchCss) ?
                $scope.flickityWatchCss : false,
            wrapAround: angular.isDefined($scope.flickityWrapAround) ?
                $scope.flickityWrapAround : false,
            imagesLoaded: angular.isDefined($scope.flickityImagesLoaded) ?
                $scope.flickityImagesLoaded : true,
            asNavFor: angular.isDefined($scope.flickityAsNavFor) ?
                $scope.flickityAsNavFor : true,
        };

        if (angular.isDefined($scope.flickityArrowShape)) {
            flickityOptions.arrowShape = $scope.flickityArrowShape;
        }


        // Initialize Flickity
        $timeout(() => {
            new Flickity($element[0], flickityOptions);
        });

    }

}
