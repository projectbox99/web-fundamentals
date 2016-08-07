"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var message_model_1 = require("./message.model");
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get('https://localhost:3000/messages')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                message = new message_model_1.Message(element.content);
                console.log(message);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://localhost:3000/message', body, { headers: headers });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRCLGVBRTVCLENBQUMsQ0FGMEM7QUFFM0MscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBRXhELFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsOEJBQXdCLGlCQUFpQixDQUFDLENBQUE7QUFHMUM7SUFDSSx3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWxDLG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUM7YUFDbEQsR0FBRyxDQUFFLFVBQUMsSUFBYztZQUNqQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBTSxRQUFRLEdBQWMsRUFBRSxDQUFDO1lBQy9CLElBQUksT0FBTyxDQUFDO1lBQ1osR0FBRyxDQUFDLENBQWdCLFVBQWMsRUFBZCxLQUFBLFNBQVMsQ0FBQyxJQUFJLEVBQWQsY0FBYyxFQUFkLElBQWMsQ0FBQztnQkFBOUIsSUFBSSxPQUFPLFNBQUE7Z0JBQ1osT0FBTyxHQUFHLElBQUksdUJBQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFnQjtRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQXhCTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBeUJiLHFCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSxzQkFBYyxpQkF3QjFCLENBQUEiLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgZ2V0TWVzc2FnZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlcycpXHJcbiAgICAgICAgICAgIC5tYXAoIChkYXRhOiBSZXNwb25zZSkgPT4gIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGRhdGEuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXNnQXJyYXk6IE1lc3NhZ2VbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGV4dHJhY3RlZC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGVsZW1lbnQuY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnQXJyYXkucHVzaChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtc2dBcnJheTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
