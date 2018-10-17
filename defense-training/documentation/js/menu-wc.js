'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">defense-training documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="todo.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>TODO
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-c7cbfc6260b7cc714fa5854fdee1d03b"' : 'data-target="#xs-components-links-module-AppModule-c7cbfc6260b7cc714fa5854fdee1d03b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-c7cbfc6260b7cc714fa5854fdee1d03b"' : 'id="xs-components-links-module-AppModule-c7cbfc6260b7cc714fa5854fdee1d03b"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ClientsModule.html" data-type="entity-link">ClientsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ClientsModule-20a669731efd12d33c292cd9c1e5ea90"' : 'data-target="#xs-components-links-module-ClientsModule-20a669731efd12d33c292cd9c1e5ea90"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ClientsModule-20a669731efd12d33c292cd9c1e5ea90"' : 'id="xs-components-links-module-ClientsModule-20a669731efd12d33c292cd9c1e5ea90"' }>
                                        <li class="link">
                                            <a href="components/ClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListClientsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ClientsRoutingModule.html" data-type="entity-link">ClientsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoginModule-44fed9d763b648bade7f61340f32f89b"' : 'data-target="#xs-components-links-module-LoginModule-44fed9d763b648bade7f61340f32f89b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoginModule-44fed9d763b648bade7f61340f32f89b"' : 'id="xs-components-links-module-LoginModule-44fed9d763b648bade7f61340f32f89b"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PageNotFoundModule-d43389424d094f69f9ea151c08b840e8"' : 'data-target="#xs-components-links-module-PageNotFoundModule-d43389424d094f69f9ea151c08b840e8"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-d43389424d094f69f9ea151c08b840e8"' : 'id="xs-components-links-module-PageNotFoundModule-d43389424d094f69f9ea151c08b840e8"' }>
                                        <li class="link">
                                            <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link">PageNotFoundRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PrestationsModule.html" data-type="entity-link">PrestationsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PrestationsModule-cf0c080e44e4d83f9f784dcd5a38ec45"' : 'data-target="#xs-components-links-module-PrestationsModule-cf0c080e44e4d83f9f784dcd5a38ec45"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PrestationsModule-cf0c080e44e4d83f9f784dcd5a38ec45"' : 'id="xs-components-links-module-PrestationsModule-cf0c080e44e4d83f9f784dcd5a38ec45"' }>
                                        <li class="link">
                                            <a href="components/ListPrestationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPrestationsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PrestationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PrestationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestationsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PrestationsRoutingModule.html" data-type="entity-link">PrestationsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' : 'data-target="#xs-components-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' : 'id="xs-components-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' }>
                                        <li class="link">
                                            <a href="components/AddRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddRowComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableauComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableauComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' : 'data-target="#xs-directives-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' : 'id="xs-directives-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StateDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' : 'data-target="#xs-pipes-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' : 'id="xs-pipes-links-module-SharedModule-7f3349671c9c6507f0910f9381d7c56b"' }>
                                        <li class="link">
                                            <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TotalPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiModule-d3cfda68fdf7c4d8ad6dd6918a504129"' : 'data-target="#xs-components-links-module-UiModule-d3cfda68fdf7c4d8ad6dd6918a504129"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiModule-d3cfda68fdf7c4d8ad6dd6918a504129"' : 'id="xs-components-links-module-UiModule-d3cfda68fdf7c4d8ad6dd6918a504129"' }>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Client.html" data-type="entity-link">Client</a>
                    </li>
                    <li class="link">
                        <a href="classes/Prestation.html" data-type="entity-link">Prestation</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/ClientService.html" data-type="entity-link">ClientService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PrestationService.html" data-type="entity-link">PrestationService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/ClientI.html" data-type="entity-link">ClientI</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PrestationI.html" data-type="entity-link">PrestationI</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
