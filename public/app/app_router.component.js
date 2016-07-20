System.register(['angular2/core', 'angular2/router', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_component_1;
    var AppRouterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            AppRouterComponent = (function () {
                function AppRouterComponent() {
                }
                AppRouterComponent = __decorate([
                    core_1.Component({
                        selector: 'app-router',
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styles: []
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'App', component: app_component_1.AppComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppRouterComponent);
                return AppRouterComponent;
            }());
            exports_1("AppRouterComponent", AppRouterComponent);
        }
    }
});
//# sourceMappingURL=app_router.component.js.map