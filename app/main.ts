import { bootstrap } from "@angular/platform-browser-dynamic";
import { AppLayout } from "./app.layout";
import { HTTP_PROVIDERS } from "@angular/http";
import { APP_ROUTER_PROVIDERS } from "./app.routes";

//import { disableDeprecatedForms, provideForms } from "@angular/forms";

import "rxjs/add/operator/map";

import { enableProdMode } from "@angular/core";
enableProdMode();

bootstrap(AppLayout, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
//	disableDeprecatedForms(),
//	provideForms(),
]).catch(err => console.error(err));
