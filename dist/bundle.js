/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\r\n    line-height: 1.15;\r\n    font-family: Open Sans;\r\n    font-size: 1rem;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    text-decoration: none;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    line-height: 1.625;\r\n    color: var(--dl-color-secondary-400);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    border-width: 0;\r\n    border-style: solid;\r\n}\r\n\r\np,\r\nli,\r\nul,\r\npre,\r\ndiv,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbutton {\r\n    background-color: transparent;\r\n}\r\n\r\nbutton,\r\nselect {\r\n    font-family: inherit;\r\n    font-size: 100%;\r\n    line-height: 1.15;\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    text-transform: none;\r\n}\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n    appearance: button;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n\r\nbutton:-moz-focus,\r\n[type=\"button\"]:-moz-focus,\r\n[type=\"reset\"]:-moz-focus,\r\n[type=\"submit\"]:-moz-focus {\r\n    outline: 1px dotted Button Text;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: inherit;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    display: block;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth\r\n}\r\n\r\n.primary-pink-button-button {\r\n    color: var(--dl-color-gray-white);\r\n    outline: none;\r\n    background: linear-gradient(310deg, #7928ca, #ff0080);\r\n    box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);\r\n    transition: all .15s ease-in;\r\n    padding-top: var(--dl-space-space-triplequarterunit);\r\n    border-width: 0px;\r\n    padding-left: var(--dl-space-space-unitandahalfunit);\r\n    border-radius: 1.875rem;\r\n    padding-right: var(--dl-space-space-unitandahalfunit);\r\n    padding-bottom: var(--dl-space-space-triplequarterunit);\r\n}\r\n\r\n.primary-pink-button-button:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.02);\r\n}\r\n\r\n/* Start Header */\r\n\r\n.header {\r\n    top: 0px;\r\n    left: auto;\r\n    right: auto;\r\n    width: 100%;\r\n    bottom: auto;\r\n    z-index: 3;\r\n    position: fixed;\r\n    max-width: 1320px;\r\n    padding-left: var(--dl-space-space-unitandahalfunit);\r\n    padding-right: var(--dl-space-space-unitandahalfunit);\r\n}\r\n\r\n.header-nav {\r\n    min-width: 100%;\r\n    min-height: 60px;\r\n    display: inline-flex;\r\n    box-shadow: 0 .25rem .375rem -.0625rem hsla(0, 0%, 8%, .12), 0 .125rem .25rem -.0625rem hsla(0, 0%, 8%, .07) !important;\r\n    margin-top: var(--dl-space-space-unit);\r\n    padding-top: var(--dl-space-space-halfunit);\r\n    padding-left: var(--dl-space-space-unitandahalfunit);\r\n    border-radius: var(--dl-radius-radius-radius40);\r\n    padding-right: var(--dl-space-space-unitandahalfunit);\r\n    padding-bottom: var(--dl-space-space-halfunit);\r\n    backdrop-filter: saturate(200%) blur(30px);\r\n    background-color: hsla(0, 0%, 100%, .8) !important;\r\n    margin-left: 8%;\r\n}\r\n\r\n.header-container {\r\n    color: var(--dl-color-gray-black);\r\n    min-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.logo-link {\r\n    margin-left: var(--dl-space-space-unit);\r\n    margin-right: var(--dl-space-space-unit);\r\n}\r\n\r\n.header-menu {\r\n    list-style: none;\r\n    display: flex;\r\n}\r\n\r\n.logo {\r\n    width: 100px;\r\n    object-fit: cover;\r\n    height: 17px \r\n}\r\n\r\n.header-navlink {\r\n    margin-top: var(--dl-space-space-halfunit);\r\n    transition: 0.3s;\r\n    margin-left: var(--dl-space-space-unit);\r\n    margin-right: var(--dl-space-space-unit);\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n    text-decoration: none;\r\n}\r\n\r\n.header-navlink:hover {\r\n    color: var(--dl-color-gray-500);\r\n}\r\n\r\n.header-button {\r\n    display: inline-flex;\r\n}\r\n\r\n.header-burger-menu {\r\n    display: none;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header-icon {\r\n    min-width: 24px;\r\n    min-height: 24px;\r\n    margin-left: var(--dl-space-space-unit);\r\n}\r\n\r\n.header-mobile-menu {\r\n    top: 0px;\r\n    left: 0px;\r\n    min-width: 100%;\r\n    min-height: 100vh;\r\n    display: none;\r\n    padding: var(--dl-space-space-unitandahalfunit);\r\n    z-index: 100;\r\n    position: absolute;\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.header-top {\r\n    min-width: 100%;\r\n    display: flex;\r\n    padding: var(--dl-space-space-unit);\r\n    align-items: center;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.header-close-menu {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n}\r\n\r\n.header-icon2 {\r\n    min-width: 24px;\r\n    min-height: 24px;\r\n}\r\n\r\n.header-mid {\r\n    min-width: 100%;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    padding-left: var(--dl-space-space-unit);\r\n    padding-right: var(--dl-space-space-unit);\r\n    flex-direction: column;\r\n}\r\n\r\n.header-menu-mobile {\r\n    list-style: none;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    margin-bottom: var(--dl-space-space-unit);\r\n    flex-direction: column;\r\n}\r\n\r\n.header-navlink-mobile {\r\n    transition: 0.3s;\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n    text-decoration: none;\r\n}\r\n\r\n.header-navlink-mobile:hover {\r\n    color: var(--dl-color-gray-500);\r\n}\r\n\r\n.header-bot {\r\n    display: flex;\r\n    margin-top: auto;\r\n    flex-direction: column;\r\n}\r\n\r\n@media(max-width: 991px) {\r\n    .header-nav {\r\n        max-width: 960px;\r\n        margin-left: 4px;\r\n    }\r\n\r\n    .header-menu {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media(max-width: 1450px) {\r\n    .header-nav {\r\n        max-width: 960px;\r\n        margin-left: 4px;\r\n    }\r\n\r\n    .header-menu {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media(max-width: 767px) {\r\n    .header-nav {\r\n        margin-left: 4px;\r\n    }\r\n    .header-burger-menu {\r\n        display: flex;\r\n    }\r\n}\r\n\r\n\r\n.outline-gray-button-button {\r\n    color: var(--dl-color-secondary-200);\r\n    outline: none;\r\n    transition: all .15s ease-in;\r\n    padding-top: var(--dl-space-space-triplequarterunit);\r\n    border-color: var(--dl-color-secondary-200);\r\n    padding-left: var(--dl-space-space-unitandahalfunit);\r\n    border-radius: 1.875rem;\r\n    padding-right: var(--dl-space-space-unitandahalfunit);\r\n    padding-bottom: var(--dl-space-space-triplequarterunit);\r\n}\r\n\r\n.outline-gray-button-button:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.02);\r\n}\r\n\r\n/* End Header */\r\n\r\n/* Start Feature */\r\n\r\n.feature-card-container {\r\n    width: 25%;\r\n    display: flex;\r\n    /* margin-top: var(--dl-space-space-triplequarterunit); */\r\n    align-items: center;\r\n    padding-left: var(--dl-space-space-triplequarterunit);\r\n    padding-right: var(--dl-space-space-triplequarterunit);\r\n    flex-direction: column;\r\n}\r\n\r\n.feature-card-image {\r\n    height: 30px;\r\n    object-fit: cover;\r\n    margin-bottom: var(--dl-space-space-unitandahalfunit);\r\n}\r\n\r\n.feature-card-title {\r\n    color: var(--dl-color-secondary-600);\r\n    margin-top: var(--dl-space-space-halfunit);\r\n    text-align: center;\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n}\r\n\r\n.feature-card-desc {\r\n    text-align: center;\r\n    margin-bottom: var(--dl-space-space-unit);\r\n}\r\n\r\n@media(max-width: 767px) {\r\n    .feature-card-container {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media(max-width: 479px) {\r\n    .feature-card-container {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.outline-black-button-button {\r\n    color: var(--dl-color-secondary-700);\r\n    cursor: pointer;\r\n    outline: none;\r\n    min-width: 150px;\r\n    transition: 0.3s;\r\n    padding-top: var(--dl-space-space-triplequarterunit);\r\n    padding-left: var(--dl-space-space-fourunits);\r\n    border-radius: var(--dl-radius-radius-radius75);\r\n    padding-right: var(--dl-space-space-fourunits);\r\n    padding-bottom: var(--dl-space-space-triplequarterunit);\r\n}\r\n\r\n.outline-black-button-button:hover {\r\n    transform: scale(1.02);\r\n}\r\n\r\n\r\n\r\n.list-item-container {\r\n    flex: 0 0 auto;\r\n    display: flex;\r\n    padding: 1rem;\r\n    max-width: 500px;\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n}\r\n\r\n.list-item-text {\r\n    color: var(--dl-color-secondary-600);\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n}\r\n\r\n/* End Feature */\r\n\r\n/* Start Footer */\r\n\r\n.footer {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-image: linear-gradient(310deg, #141727, #3a416f);\r\n}\r\n\r\n.footer-container {\r\n    color: var(--dl-color-gray-white);\r\n    width: 100%;\r\n    display: flex;\r\n    padding: var(--dl-space-space-tripleunit);\r\n    z-index: 1;\r\n    max-width: 1320px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.footer-info {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n}\r\n\r\n.footer-text {\r\n    color: var(--dl-color-gray-800);\r\n    font-weight: 700;\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n    transition: 0.3s;\r\n}\r\n\r\n.footer-text:hover {\r\n    font-weight: 800;\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n    color: var(--dl-color-gray-white);\r\n    cursor: pointer;\r\n}\r\n\r\n.footer-links {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.footer-company, .footer-pages, .footer-products {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    margin-right: 53px;\r\n}\r\n\r\n\r\n@media(max-width: 991px) {\r\n    .footer-container {\r\n        padding: var(--dl-space-space-doubleunit);\r\n    }\r\n}\r\n\r\n@media(max-width: 767px) {\r\n    .footer-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .footer-info {\r\n        align-items: center;\r\n        margin-bottom: var(--dl-space-space-doubleunit);\r\n    }\r\n\r\n    .footer-pages {\r\n        margin-left: var(--dl-space-space-doubleunit);\r\n    }\r\n\r\n    .footer-products {\r\n        margin-left: var(--dl-space-space-doubleunit);\r\n    }\r\n}\r\n\r\n/* End Footer */\r\n\r\n\r\n\r\n.home-container {\r\n    width: 100%;\r\n    height: auto;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n/* Start Hero */\r\n\r\n.home-hero {\r\n    padding-left: var(--dl-space-space-unitandahalfunit);\r\n    padding-right: var(--dl-space-space-unitandahalfunit);\r\n}\r\n\r\n.hero-content {\r\n    display: flex;\r\n    position: relative;\r\n    max-width: 1320px;\r\n    min-height: 85vh;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.home-card {\r\n    width: 60%;\r\n    display: flex;\r\n    padding: var(--dl-space-space-tripleunit);\r\n    z-index: 1;\r\n    box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06) !important;\r\n    margin-top: var(--dl-space-space-tripleunit);\r\n    align-items: flex-start;\r\n    border-radius: var(--dl-radius-radius-radius1);\r\n    flex-direction: column;\r\n    backdrop-filter: saturate(200%) blur(30px);\r\n    background-color: hsla(0, 0%, 100%, .8);\r\n}\r\n\r\n.subtitle {\r\n    color: var(--dl-color-secondary-700);\r\n    text-align: center;\r\n    margin-bottom: var(--dl-space-space-unitandahalfunit);\r\n}\r\n\r\n.hero-desc {\r\n    color: var(--dl-color-secondary-600);\r\n    margin-right: var(--dl-space-space-tripleunit);\r\n    margin-bottom: var(--dl-space-space-unit);\r\n    padding-right: var(--dl-space-space-tripleunit);\r\n}\r\n\r\n.buttons-group {\r\n    display: flex;\r\n    margin-top: var(--dl-space-space-unitandahalfunit);\r\n    margin-bottom: var(--dl-space-space-unit);\r\n    margin-right: var(--dl-space-space-unit);\r\n}\r\n\r\n\r\n.partner {\r\n    min-width: 100%;\r\n    display: flex;\r\n    margin-top: var(--dl-space-space-halfunit);\r\n        flex-direction: row;\r\n    align-content: flex-start;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n\r\n}\r\n\r\n.partner-image {\r\n    width: 25%;\r\n    object-fit: cover;\r\n}\r\n\r\n.hero-image {\r\n    top: 0px;\r\n    left: auto;\r\n    right: 0px;\r\n    width: 50%;\r\n    bottom: 0px;\r\n    height: 80vh;\r\n    position: absolute;\r\n    object-fit: cover;\r\n    border-bottom-left-radius: 10rem;\r\n}\r\n\r\n/* End Hero */\r\n\r\n\r\n\r\n.home-features {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    max-width: 1320px;\r\n    align-items: flex-start;\r\n    padding-top: var(--dl-space-space-sixunits);\r\n    padding-left: var(--dl-space-space-tripleunit);\r\n    padding-right: var(--dl-space-space-tripleunit);\r\n    flex-direction: row;\r\n    padding-bottom: var(--dl-space-space-sixunits);\r\n}\r\n\r\n/* Start Show */\r\n\r\n.showcase-section {\r\n    width: 100%;\r\n    display: flex;\r\n    max-width: 1320px;\r\n    align-items: center;\r\n    margin-top: var(--dl-space-space-tripleunit);\r\n    padding-left: var(--dl-space-space-tripleunit);\r\n    padding-right: var(--dl-space-space-tripleunit);\r\n    flex-direction: column;\r\n    padding-bottom: var(--dl-space-space-sixunits);\r\n}\r\n\r\n.showcase-heading-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    flex-direction: column;\r\n}\r\n\r\n.title {\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n    background-image: linear-gradient(310deg, #7928ca, #ff0080);\r\n    background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.showcase-desc {\r\n    max-width: 600px;\r\n    text-align: center;\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n}\r\n\r\n\r\n.showcase-content-container {\r\n    min-width: 100%;\r\n    display: flex;\r\n    margin-top: var(--dl-space-space-tripleunit);\r\n    margin-left: var(--dl-space-space-unitandahalfunit);\r\n    margin-right: var(--dl-space-space-unitandahalfunit);\r\n}\r\n\r\n.showcase-image-container {\r\n    width: 50%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.showcase-image-main {\r\n    width: 100%;\r\n    box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06) !important;\r\n    object-fit: cover;\r\n    margin-left: 3rem;\r\n    margin-right: -3rem;\r\n    border-radius: var(--dl-radius-radius-radius75);\r\n}\r\n\r\n.showcase-quote {\r\n    flex: 0 0 auto;\r\n    width: 40%;\r\n    display: flex;\r\n    padding: var(--dl-space-space-unit);\r\n    align-self: flex-end;\r\n    margin-top: var(--dl-space-space-unitandahalfunit);\r\n    align-items: flex-start;\r\n    border-color: var(--dl-quote-border-color);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 0.25rem;\r\n    margin-bottom: 8rem;\r\n    flex-direction: column;\r\n}\r\n\r\n.showcase-author {\r\n    color: var(--dl-showcase-author);\r\n    font-weight: 400;\r\n    white-space: normal;\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.showcase-additional-image-container {\r\n    position: relative;\r\n}\r\n\r\n.showcase-image-secondary {\r\n    top: 0px;\r\n    left: auto;\r\n    min-width: 90%;\r\n    bottom: auto;\r\n    position: absolute;\r\n    box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06) !important;\r\n    object-fit: cover;\r\n    margin-left: 2rem;\r\n    border-radius: var(--dl-radius-radius-radius75);\r\n}\r\n\r\n.showcase-detail-container {\r\n    width: 40%;\r\n    display: flex;\r\n    position: relative;\r\n    padding-left: var(--dl-space-space-triplequarterunit);\r\n    padding-right: var(--dl-space-space-triplequarterunit);\r\n    flex-direction: column;\r\n}\r\n\r\n.showcase-image-tertiary {\r\n    width: 100%;\r\n    box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06) !important;\r\n    margin-top: 8rem;\r\n    object-fit: cover;\r\n    margin-left: -1.5rem;\r\n    border-radius: var(--dl-radius-radius-radius75);\r\n    margin-bottom: var(--dl-space-space-tripleunit);\r\n}\r\n\r\n.showcase-text-container {\r\n    width: 90%;\r\n    align-self: center;\r\n}\r\n\r\n.showcase-text-title {\r\n    color: var(--dl-showcase-title);\r\n    font-weight: 700;\r\n    white-space: normal;\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.showcase-text-desc {\r\n    color: var(--dl-showcase-desc);\r\n    font-weight: 400;\r\n    white-space: normal;\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n/* End Show */\r\n\r\n/* start testimonials */\r\n\r\n.home-testimonials {\r\n    width: 100%;\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-image: linear-gradient(310deg, #7928ca, #ff0080);\r\n}\r\n\r\n.testimonials-container {\r\n    width: 100%;\r\n    display: flex;\r\n    max-width: 1320px;\r\n    margin-top: 14rem;\r\n    padding-left: var(--dl-space-space-tripleunit);\r\n    padding-right: var(--dl-space-space-tripleunit);\r\n    padding-bottom: 15rem;\r\n}\r\n\r\n.testimonial-content {\r\n    flex: 1;\r\n}\r\n\r\n.testimonial-comment {\r\n    display: flex;\r\n    max-width: 600px;\r\n    align-items: flex-start;\r\n    margin-right: var(--dl-space-space-tripleunit);\r\n    flex-direction: column;\r\n}\r\n\r\n.testimonial-title {\r\n    color: var(--dl-color-gray-white);\r\n}\r\n\r\n.testimonial-desc {\r\n    color: var(--dl-color-gray-white);\r\n    opacity: 0.8;\r\n    margin-bottom: var(--dl-space-space-doubleunit);\r\n}\r\n\r\n.testimonial-text{\r\n    display: inline;\r\n    font-weight: 400;\r\n    white-space: normal;\r\n}\r\n\r\n.testimonial-quote {\r\n    color: var(--dl-color-gray-white);\r\n    opacity: 0.8;\r\n    margin-bottom: var(--dl-space-space-doubleunit);\r\n}\r\n\r\n.author-name {\r\n    color: var(--dl-color-gray-white);\r\n}\r\n\r\n.author-role {\r\n    color: var(--dl-color-gray-white);\r\n    opacity: 0.8;\r\n}\r\n\r\n.testimonial-images-container {\r\n    display: flex;\r\n    margin-top: var(--dl-space-space-doubleunit);\r\n    align-items: center;\r\n}\r\n\r\n.testimonial-image{\r\n    width: 40px;\r\n    opacity: 0.5;\r\n    object-fit: cover;\r\n    transition: 0.3;\r\n    border-radius: var(--dl-radius-radius-radius75);\r\n}\r\n\r\n.testimonial-image:hover {\r\n    transform: scale(1.2);\r\n    opacity: 0;\r\n}\r\n\r\n.divider{\r\n    width: 1px;\r\n    height: 25px;\r\n    display: flex;\r\n    opacity: 0.8;\r\n    align-items: flex-start;\r\n    margin-left: var(--dl-space-space-unit);\r\n    margin-right: var(--dl-space-space-unit);\r\n    flex-direction: column;\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.testimonial-company {\r\n    display: flex;\r\n    min-width: 400px;\r\n    padding-left: var(--dl-space-space-triplequarterunit);\r\n    flex-direction: column;\r\n}\r\n\r\n.row1-container {\r\n   min-width: 100%;\r\n    min-height: 100px;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    margin-bottom: var(--dl-space-space-tripleunit);\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.asana-container {\r\n    width: 58px;\r\n    height: 58px;\r\n    padding: var(--dl-space-space-unit);\r\n    align-self: flex-end;\r\n    object-fit: cover;\r\n    margin-left: var(--dl-space-space-unit);\r\n    border-radius: var(--dl-radius-radius-round);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.testimonial-company-image {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n\r\n.slack-container {\r\n    width: 58px;\r\n    height: 58px;\r\n    padding: var(--dl-space-space-unit);\r\n    object-fit: cover;\r\n    border-radius: var(--dl-radius-radius-round);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.google-drive-container {\r\n    width: 58px;\r\n    height: 58px;\r\n    padding: var(--dl-space-space-unit);\r\n    align-self: flex-end;\r\n    object-fit: cover;\r\n    margin-right: var(--dl-space-space-unit);\r\n    border-radius: var(--dl-radius-radius-round);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n\r\n.row2-container {\r\n    width: 100%;\r\n    height: 70px;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: var(--dl-space-space-tripleunit);\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.shopify-container {\r\n    width: 58px;\r\n    height: 58px;\r\n    padding: var(--dl-space-space-unit);\r\n    object-fit: cover;\r\n    border-radius: var(--dl-radius-radius-round);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n\r\n\r\n.apple-container {\r\n    width: 58px;\r\n    height: 58px;\r\n    padding: var(--dl-space-space-unit);\r\n    align-self: center;\r\n    object-fit: cover;\r\n    border-radius: var(--dl-radius-radius-round);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n\r\n.invision-container {\r\n    width: 58px;\r\n    padding: var(--dl-space-space-unit);\r\n    align-self: flex-end;\r\n    object-fit: cover;\r\n    border-radius: var(--dl-radius-radius-round);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.row3-container {\r\n    width: 50%;\r\n    height: 70px;\r\n    display: flex;\r\n    align-self: center;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.attlasian-container {\r\n    width: 58px;\r\n    height: 58px;\r\n    padding: var(--dl-space-space-unit);\r\n    object-fit: cover;\r\n    border-radius: var(--dl-radius-radius-round);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n\r\n.weave-container {\r\n    width: 58px;\r\n    height: 58px;\r\n    padding: var(--dl-space-space-unit);\r\n    align-self: flex-end;\r\n    object-fit: cover;\r\n    border-radius: var(--dl-radius-radius-round);\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n\r\n.home-bottom-wave-image {\r\n    top: auto;\r\n    left: auto;\r\n    right: 0px;\r\n    width: 100%;\r\n    bottom: -5px;\r\n    position: absolute;\r\n    object-fit: cover;\r\n}\r\n\r\n.home-image19 {\r\n    top: auto;\r\n    left: 0px;\r\n    right: 0px;\r\n    width: 100%;\r\n    bottom: auto;\r\n    height: 100%;\r\n    position: absolute;\r\n    object-fit: cover;\r\n}\r\n\r\n.home-top-wave-image {\r\n    top: -5px;\r\n    left: auto;\r\n    right: 0px;\r\n    width: 100%;\r\n    bottom: auto;\r\n    position: absolute;\r\n    object-fit: cover;\r\n}\r\n\r\n/* End testimonials */\r\n\r\n/* Start Component */\r\n\r\n.home-component {\r\n    width: 100%;\r\n    display: flex;\r\n    max-width: 1320px;\r\n    align-items: center;\r\n    padding-top: var(--dl-space-space-sixunits);\r\n    padding-left: var(--dl-space-space-tripleunit);\r\n    padding-right: var(--dl-space-space-tripleunit);\r\n    flex-direction: column;\r\n    padding-bottom: var(--dl-space-space-sixunits);\r\n}\r\n\r\n.component-container {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.component-logo {\r\n    width: 48px;\r\n    height: 48px;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: var(--dl-radius-radius-radius75);\r\n    justify-content: center;\r\n    background-image: linear-gradient(310deg, #7928ca, #ff0080);\r\n}\r\n\r\n.home-icon {\r\n    fill: var(--dl-color-gray-800);\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n.component-desc {\r\n    color: var(--dl-color-secondary-600);\r\n    margin-bottom: var(--dl-space-space-halfunit);\r\n}\r\n\r\n.component-explain {\r\n    color: var(--dl-showcase-desc);\r\n    display: inline;\r\n    font-weight: 400;\r\n    white-space: normal;\r\n    background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.component-list-container {\r\n    width: 100%;\r\n    display: flex;\r\n    margin-top: var(--dl-space-space-tripleunit);\r\n    align-items: center;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.component-image1 {\r\n    display: flex;\r\n    position: relative;\r\n    box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06) !important;\r\n    transition: 0.3s;\r\n    align-items: center;\r\n    padding-top: var(--dl-space-space-sixunits);\r\n    padding-left: var(--dl-space-space-sixunits);\r\n    border-radius: var(--dl-radius-radius-radius1);\r\n    padding-right: var(--dl-space-space-sixunits);\r\n    flex-direction: column;\r\n    padding-bottom: var(--dl-space-space-doubleunit);\r\n    background-size: cover;\r\n    justify-content: center;\r\n    background-image: url('https://i.pinimg.com/564x/20/25/ab/2025ab99ac7a7e50dd5db3b41f1c1ff4.jpg');\r\n    background-position: center;\r\n}\r\n\r\n.omponent-image1:hover {\r\n    transform: scale(1.04);\r\n}\r\n\r\n\r\n\r\n.component-image-in {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.home-background {\r\n    fill: var(--dl-color-gray-900);\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-bottom: var(--dl-space-space-tripleunit);\r\n}\r\n\r\n.image-title {\r\n    color: var(--dl-color-gray-white);\r\n    max-width: 200px;\r\n    text-align: center;\r\n    margin-bottom: var(--dl-space-space-unit);\r\n}\r\n\r\n.image-desc {\r\n    color: var(--dl-color-gray-white);\r\n    margin-bottom: var(--dl-space-space-tripleunit);\r\n}\r\n\r\n.component-list1 {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    margin-left: var(--dl-space-space-fourunits);\r\n    flex-direction: column;\r\n}\r\n\r\n.home-divider {\r\n    flex: 0 0 auto;\r\n    width: 90%;\r\n    height: 1px;\r\n    display: flex;\r\n    opacity: 0.25;\r\n    margin-top: 4rem;\r\n    align-items: flex-start;\r\n    border-radius: var(--dl-radius-radius-radius75);\r\n    margin-bottom: 4rem;\r\n    flex-direction: column;\r\n    background-color: var(--dl-color-gray-700);\r\n}\r\n\r\n\r\n.component-list2 {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    margin-right: var(--dl-space-space-fourunits);\r\n    flex-direction: column;\r\n}\r\n\r\n@media(max-width: 991px) {\r\n    .home-hero {\r\n        padding-left: var(--dl-space-space-tripleunit);\r\n        padding-right: var(--dl-space-space-tripleunit);\r\n    }\r\n\r\n    .hero-content {\r\n        max-width: 960px;\r\n    }\r\n\r\n    .home-card {\r\n        width: 100%;\r\n    }\r\n\r\n    .home-features {\r\n        max-width: 960px;\r\n    }\r\n\r\n    .showcase-section {\r\n        max-width: 960px;\r\n        padding-left: var(--dl-space-space-doubleunit);\r\n        padding-right: var(--dl-space-space-doubleunit);\r\n    }\r\n\r\n    .showcase-heading-container {\r\n        max-width: 80%;\r\n    }\r\n\r\n    .showcase-desc {\r\n        text-align: center;\r\n    }\r\n\r\n    .showcase-quote {\r\n        width: 50%;\r\n    }\r\n\r\n    .testimonials-container {\r\n        padding-left: var(--dl-space-space-doubleunit);\r\n        padding-right: var(--dl-space-space-doubleunit);\r\n        justify-content: center;\r\n    }\r\n\r\n    .testimonial-content {\r\n        align-items: center;\r\n    }\r\n\r\n    .testimonial-comment {\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .home-logos {\r\n        display: none;\r\n    }\r\n\r\n    .home-component {\r\n        padding-left: var(--dl-space-space-doubleunit);\r\n        padding-right: var(--dl-space-space-doubleunit);\r\n    }\r\n\r\n    .component-list1 {\r\n        width: 45%;\r\n        margin-left: var(--dl-space-space-unit);\r\n    }\r\n\r\n    .component-list2 {\r\n        width: 45%;\r\n        margin-right: var(--dl-space-space-unit);\r\n    }\r\n}\r\n\r\n/* End Component */\r\n\r\n@media(max-width: 767px) {\r\n    .home-card {\r\n        align-items: center;\r\n    }\r\n\r\n    .subtitle {\r\n        text-align: center;\r\n        margin-right: 0px;\r\n        padding-right: 0px;\r\n    }\r\n\r\n    .partner-image {\r\n        width: 40%;\r\n        align-items: center;\r\n    }\r\n\r\n    .hero-image {\r\n        display: none;\r\n    }\r\n\r\n    .home-features {\r\n        max-width: 720px;\r\n        padding-top: var(--dl-space-space-doubleunit);\r\n        padding-left: var(--dl-space-space-unitandahalfunit);\r\n        padding-right: var(--dl-space-space-unitandahalfunit);\r\n        padding-bottom: var(--dl-space-space-doubleunit);\r\n    }\r\n\r\n    .showcase-section {\r\n        max-width: 720px;\r\n    }\r\n\r\n    .showcase-content-container {\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .showcase-image-container {\r\n        width: 80%;\r\n    }\r\n\r\n    .showcase-image-main {\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .showcase-quote {\r\n        width: 70%;\r\n        align-self: center;\r\n        margin-top: var(--dl-space-space-tripleunit);\r\n        margin-bottom: var(--dl-space-space-tripleunit);\r\n    }\r\n\r\n    .showcase-image-secondary {\r\n        display: none;\r\n    }\r\n\r\n    .showcase-detail-container {\r\n        width: 80%;\r\n    }\r\n\r\n    .showcase-image-tertiary {\r\n        display: none;\r\n    }\r\n\r\n    .home-testimonials{\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .testimonials-container {\r\n        display: block;\r\n    padding-top: 10rem;\r\n    padding-bottom: 10rem;\r\n    margin: 0 auto;\r\n    }\r\n\r\n    .testimonial-company{\r\n        display: none;\r\n    }\r\n\r\n    .component-container {\r\n        width: 80%;\r\n    }\r\n\r\n    .component-explain {\r\n        text-align: center;\r\n    }\r\n\r\n    .component-list-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .component-list1 {\r\n        width: 80%;\r\n        margin-top: var(--dl-space-space-fourunits);\r\n        align-items: center;\r\n        margin-left: 0px;\r\n    }\r\n\r\n    .home-divider {\r\n        margin-top: var(--dl-space-space-doubleunit);\r\n        margin-bottom: var(--dl-space-space-doubleunit);\r\n    }\r\n\r\n\r\n    .component-list2 {\r\n        width: 80%;\r\n        align-items: center;\r\n        margin-right: 0px;\r\n        margin-bottom: var(--dl-space-space-fourunits);\r\n    }\r\n}\r\n\r\n@media(max-width: 479px) {\r\n    .home-card {\r\n        padding: var(--dl-space-space-unit);\r\n    }\r\n\r\n    .buttons-group {\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .home-container03 {\r\n        margin-right: 0px;\r\n        margin-bottom: var(--dl-space-space-unit);\r\n    }\r\n\r\n    .home-features {\r\n        width: 100%;\r\n    }\r\n\r\n    .testimonials-container {\r\n        padding-top: var(--dl-space-space-sixunits);\r\n        padding-bottom: var(--dl-space-space-sixunits);\r\n    }\r\n\r\n    .component-explain {\r\n        text-align: center;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project2/./src/styles/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --dl-color-gray-500: #595959;\r\n  --dl-color-gray-700: #999999;\r\n  --dl-color-gray-800: #D9D9D9;\r\n  --dl-color-gray-900: #f8f9faff;\r\n  --dl-color-gray-black: #000000;\r\n  --dl-color-gray-white: #FFFFFF;\r\n  --dl-space-space-unit: 1rem;\r\n  --dl-color-primary-100: #c172d5ff;\r\n  --dl-color-primary-500: #ac43c7ff;\r\n  --dl-color-primary-700: #9534adff;\r\n  --dl-color-secondary-100: #d2d6daff;\r\n  --dl-color-secondary-200: #8392abff;\r\n  --dl-color-secondary-300: #808fbfff;\r\n  --dl-color-secondary-400: #67748eff;\r\n  --dl-color-secondary-500: #344767ff;\r\n  --dl-color-secondary-600: #252f40ff;\r\n  --dl-color-secondary-700: #20273fff;\r\n  --dl-radius-radius-round: 50%;\r\n  --dl-space-space-halfunit: 0.5rem;\r\n  --dl-space-space-sixunits: 6rem;\r\n  --dl-radius-radius-radius1: 1rem;\r\n  --dl-space-space-fourunits: 4rem;\r\n  --dl-radius-radius-radius40: 40px;\r\n  --dl-radius-radius-radius75: 0.75rem;\r\n  --dl-space-space-doubleunit: 2rem;\r\n  --dl-space-space-tripleunit: 3rem;\r\n  --dl-space-space-unitandahalfunit: 1.5rem;\r\n  --dl-space-space-triplequarterunit: 0.75rem;\r\n  --dl-showcase-title:rgb(37, 47, 64);\r\n  --dl-showcase-desc:rgb(103, 116, 142);\r\n  --dl-showcase-author:rgb(203, 12, 159);\r\n  --dl-quote-border-color:#cb0c9f;\r\n}\r\n\r\n.button {\r\n  color: var(--dl-color-secondary-400);\r\n  display: inline-block;\r\n  padding: 0.5rem 1rem;\r\n  font-family: Open Sans;\r\n  border-color: var(--dl-color-secondary-400);\r\n  border-width: 1px;\r\n  border-radius: 4px;\r\n  background-color: var(--dl-color-gray-white);\r\n}\r\n\r\n.list-item {\r\n  display: list-item;\r\n}\r\n\r\n.Small {\r\n  font-size: 0.875rem;\r\n  font-family: Open Sans;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n}\r\n.Large {\r\n  font-size: 0.875rem;\r\n  font-family: Open Sans;\r\n  font-weight: 400;\r\n  letter-spacing: -0.025rem;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.Body {\r\n  font-size: 1rem;\r\n  font-family: Open Sans;\r\n  font-weight: 400;\r\n  line-height: 1.625;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n}\r\n.HeadingOne {\r\n  font-size: 2.25rem;\r\n  font-family: Open Sans;\r\n  font-weight: 700;\r\n  line-height: 1.3;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n}\r\n.HeadingTwo {\r\n  font-size: 1.875rem;\r\n  font-family: Open Sans;\r\n  font-weight: 700;\r\n  line-height: 1.375;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n}\r\n.Lead {\r\n  font-size: 1.25rem;\r\n  font-family: Open Sans;\r\n  font-weight: 400;\r\n  line-height: 1.625;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n}\r\n.HeadingThree {\r\n  font-size: 1.25rem;\r\n  font-family: Open Sans;\r\n  font-weight: 600;\r\n  line-height: 1.375;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.ButtonSmall {\r\n  font-size: 0.75rem;\r\n  font-style: normal;\r\n  font-family: Open Sans;\r\n  font-weight: 700;\r\n  line-height: 1.4;\r\n  letter-spacing: -0.025rem;\r\n  text-transform: uppercase;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project2/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project2/./src/styles/index.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project2/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$":
/*!************************************************************!*\
  !*** ./src/assets/ sync \.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$ ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./bottom.svg\": \"./src/assets/bottom.svg\",\n\t\"./credit-card1.svg\": \"./src/assets/credit-card1.svg\",\n\t\"./cube1.svg\": \"./src/assets/cube1.svg\",\n\t\"./hero.jpg\": \"./src/assets/hero.jpg\",\n\t\"./logo-asana.svg\": \"./src/assets/logo-asana.svg\",\n\t\"./logo-attlasian.svg\": \"./src/assets/logo-attlasian.svg\",\n\t\"./logo-google-drive.svg\": \"./src/assets/logo-google-drive.svg\",\n\t\"./logo-invision.svg\": \"./src/assets/logo-invision.svg\",\n\t\"./logo-shopify.svg\": \"./src/assets/logo-shopify.svg\",\n\t\"./logo-slack.svg\": \"./src/assets/logo-slack.svg\",\n\t\"./logo-weave.svg\": \"./src/assets/logo-weave.svg\",\n\t\"./logo.png\": \"./src/assets/logo.png\",\n\t\"./person1.svg\": \"./src/assets/person1.svg\",\n\t\"./rocket1.svg\": \"./src/assets/rocket1.svg\",\n\t\"./show.jpg\": \"./src/assets/show.jpg\",\n\t\"./show2.jpg\": \"./src/assets/show2.jpg\",\n\t\"./show3.jpg\": \"./src/assets/show3.jpg\",\n\t\"./team-2-200h.jpg\": \"./src/assets/team-2-200h.jpg\",\n\t\"./team-3-200h.jpg\": \"./src/assets/team-3-200h.jpg\",\n\t\"./team-4-200h.jpg\": \"./src/assets/team-4-200h.jpg\",\n\t\"./top.svg\": \"./src/assets/top.svg\",\n\t\"./waves-white.svg\": \"./src/assets/waves-white.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync recursive \\\\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$\";\n\n//# sourceURL=webpack://project2/./src/assets/_sync_\\.(png%257Csvg%257Cjpg%257Cjpeg%257Cgif)$?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\r\n\r\n\r\nconst images = __webpack_require__(\"./src/assets sync recursive \\\\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$\");\r\n\r\nimages.keys().forEach((filename) => {\r\n    const imageName = filename.match(/\\.\\/(.*)\\./)[1];\r\n\r\n    const imageElement = document.getElementById(imageName);\r\n    if (imageElement) {\r\n        imageElement.src = images(filename);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://project2/./src/index.js?");

/***/ }),

/***/ "./src/assets/bottom.svg":
/*!*******************************!*\
  !*** ./src/assets/bottom.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/bottom.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/bottom.svg?");

/***/ }),

/***/ "./src/assets/credit-card1.svg":
/*!*************************************!*\
  !*** ./src/assets/credit-card1.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/credit-card1.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/credit-card1.svg?");

/***/ }),

/***/ "./src/assets/cube1.svg":
/*!******************************!*\
  !*** ./src/assets/cube1.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cube1.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/cube1.svg?");

/***/ }),

/***/ "./src/assets/hero.jpg":
/*!*****************************!*\
  !*** ./src/assets/hero.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/hero.jpg\";\n\n//# sourceURL=webpack://project2/./src/assets/hero.jpg?");

/***/ }),

/***/ "./src/assets/logo-asana.svg":
/*!***********************************!*\
  !*** ./src/assets/logo-asana.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo-asana.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/logo-asana.svg?");

/***/ }),

/***/ "./src/assets/logo-attlasian.svg":
/*!***************************************!*\
  !*** ./src/assets/logo-attlasian.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo-attlasian.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/logo-attlasian.svg?");

/***/ }),

/***/ "./src/assets/logo-google-drive.svg":
/*!******************************************!*\
  !*** ./src/assets/logo-google-drive.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo-google-drive.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/logo-google-drive.svg?");

/***/ }),

/***/ "./src/assets/logo-invision.svg":
/*!**************************************!*\
  !*** ./src/assets/logo-invision.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo-invision.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/logo-invision.svg?");

/***/ }),

/***/ "./src/assets/logo-shopify.svg":
/*!*************************************!*\
  !*** ./src/assets/logo-shopify.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo-shopify.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/logo-shopify.svg?");

/***/ }),

/***/ "./src/assets/logo-slack.svg":
/*!***********************************!*\
  !*** ./src/assets/logo-slack.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo-slack.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/logo-slack.svg?");

/***/ }),

/***/ "./src/assets/logo-weave.svg":
/*!***********************************!*\
  !*** ./src/assets/logo-weave.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo-weave.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/logo-weave.svg?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo.png\";\n\n//# sourceURL=webpack://project2/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/person1.svg":
/*!********************************!*\
  !*** ./src/assets/person1.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/person1.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/person1.svg?");

/***/ }),

/***/ "./src/assets/rocket1.svg":
/*!********************************!*\
  !*** ./src/assets/rocket1.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/rocket1.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/rocket1.svg?");

/***/ }),

/***/ "./src/assets/show.jpg":
/*!*****************************!*\
  !*** ./src/assets/show.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/show.jpg\";\n\n//# sourceURL=webpack://project2/./src/assets/show.jpg?");

/***/ }),

/***/ "./src/assets/show2.jpg":
/*!******************************!*\
  !*** ./src/assets/show2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/show2.jpg\";\n\n//# sourceURL=webpack://project2/./src/assets/show2.jpg?");

/***/ }),

/***/ "./src/assets/show3.jpg":
/*!******************************!*\
  !*** ./src/assets/show3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/show3.jpg\";\n\n//# sourceURL=webpack://project2/./src/assets/show3.jpg?");

/***/ }),

/***/ "./src/assets/team-2-200h.jpg":
/*!************************************!*\
  !*** ./src/assets/team-2-200h.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/team-2-200h.jpg\";\n\n//# sourceURL=webpack://project2/./src/assets/team-2-200h.jpg?");

/***/ }),

/***/ "./src/assets/team-3-200h.jpg":
/*!************************************!*\
  !*** ./src/assets/team-3-200h.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/team-3-200h.jpg\";\n\n//# sourceURL=webpack://project2/./src/assets/team-3-200h.jpg?");

/***/ }),

/***/ "./src/assets/team-4-200h.jpg":
/*!************************************!*\
  !*** ./src/assets/team-4-200h.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/team-4-200h.jpg\";\n\n//# sourceURL=webpack://project2/./src/assets/team-4-200h.jpg?");

/***/ }),

/***/ "./src/assets/top.svg":
/*!****************************!*\
  !*** ./src/assets/top.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/top.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/top.svg?");

/***/ }),

/***/ "./src/assets/waves-white.svg":
/*!************************************!*\
  !*** ./src/assets/waves-white.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/waves-white.svg\";\n\n//# sourceURL=webpack://project2/./src/assets/waves-white.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;