"use strict";
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const about_component_1 = require("./about/about.component");
exports.routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "about", component: about_component_1.AboutComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUE0QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTlELGlDQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBRTVDLGNBQU0sR0FBaUI7SUFDbkMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtDQUM1QyxDQUFDO0FBRVcsNEJBQW9CLEdBQUc7SUFDbkMsc0JBQWEsQ0FBQyxjQUFNLENBQUM7Q0FDckIsQ0FBQyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlckNvbmZpZyA9IFtcclxuXHR7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG5cdHsgcGF0aDogXCJhYm91dFwiLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSX1BST1ZJREVSUyA9IFtcclxuXHRwcm92aWRlUm91dGVyKHJvdXRlcylcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9