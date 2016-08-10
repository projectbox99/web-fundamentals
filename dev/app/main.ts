/// <reference path="../../typings/globals/es6-shim/index.d.ts" />
/// <reference path="../../typings/globals/jasmine/index.d.ts" />

import { bootstrap } from "@angular/platform-browser-dynamic";
import { AppLayout } from "layout/app.layout";
import { HTTP_PROVIDERS } from "@angular/http";
import { APP_ROUTER_PROVIDERS } from "layout/app.routes";

// import { disableDeprecatedForms, provideForms } from "@angular/forms";

import "rxjs/add/operator/map";

import { enableProdMode } from "@angular/core";

enableProdMode();

bootstrap(AppLayout, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
// disableDeprecatedForms(),
// provideForms(),
]).catch(err => console.error(err));