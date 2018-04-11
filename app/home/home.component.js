"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var HomeComponent = /** @class */ (function () {
    //@ViewChild('ListMensajes') listMensajes: ElementRef;
    function HomeComponent(httpCliente) {
        this.httpCliente = httpCliente;
        this.mensajes = httpCliente.get('https://dev.mikareno.com/json/list-messages-by-person.action', {
            headers: { 'Authorization': 'Basic c3VwZXJhZG1pbjptaWthcmVubw==' }
        }).pipe(operators_1.map(function (data) { return data.messages; })
        /*finalize(() => {
            const list: ListView = this.listMensajes.nativeElement;
            list.refresh();
        })*/
        );
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw2Q0FBZ0Q7QUFHaEQsNENBQTZDO0FBUTdDO0lBRUksc0RBQXNEO0lBRXRELHVCQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQVksOERBQThELEVBQ3JHO1lBQ0ksT0FBTyxFQUFHLEVBQUMsZUFBZSxFQUFFLG9DQUFvQyxFQUFDO1NBQ3BFLENBQ0osQ0FBQyxJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUM7UUFDakM7OztZQUdJO1NBQ04sQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQW5CUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUttQyxpQkFBVTtPQUpsQyxhQUFhLENBb0J6QjtJQUFELG9CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi4vbW9kZWwvbWVzc2FnZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtmaW5hbGl6ZSwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7TGlzdFZpZXd9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG1lbnNhamVzOiBPYnNlcnZhYmxlPE1lc3NhZ2VbXT47XHJcbiAgICAvL0BWaWV3Q2hpbGQoJ0xpc3RNZW5zYWplcycpIGxpc3RNZW5zYWplczogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnRlOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5tZW5zYWplcyA9IGh0dHBDbGllbnRlLmdldDxNZXNzYWdlW10+KCdodHRwczovL2Rldi5taWthcmVuby5jb20vanNvbi9saXN0LW1lc3NhZ2VzLWJ5LXBlcnNvbi5hY3Rpb24nLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzIDogeydBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMzVndaWEpoWkcxcGJqcHRhV3RoY21WdWJ3PT0nfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS5waXBlKFxyXG4gICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiBkYXRhLm1lc3NhZ2VzKVxyXG4gICAgICAgICAgIC8qZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICBjb25zdCBsaXN0OiBMaXN0VmlldyA9IHRoaXMubGlzdE1lbnNhamVzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgIGxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgIH0pKi9cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==