"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PushNotifications = require("nativescript-push-notifications");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var settings = {
            senderID: "782981085060",
            badge: true,
            sound: true,
            alert: true,
            interactiveSettings: {
                actions: [{
                        identifier: 'READ_IDENTIFIER',
                        title: 'Read',
                        activationMode: "foreground",
                        destructive: false,
                        authenticationRequired: true
                    }, {
                        identifier: 'CANCEL_IDENTIFIER',
                        title: 'Cancel',
                        activationMode: "foreground",
                        destructive: true,
                        authenticationRequired: true
                    }],
                categories: [{
                        identifier: 'READ_CATEGORY',
                        actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                        actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                    }]
            },
            notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
                console.log("stringifiedData: " + stringifiedData);
                console.log("fcmNotification: " + JSON.stringify(fcmNotification));
            }
        };
        PushNotifications.register(settings, function (token) {
            console.log("Token: " + token);
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbUVBQXFFO0FBTXJFO0lBRUk7UUFDSSxJQUFJLFFBQVEsR0FBRztZQUNYLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLG1CQUFtQixFQUFFO2dCQUNqQixPQUFPLEVBQUUsQ0FBQzt3QkFDTixVQUFVLEVBQUUsaUJBQWlCO3dCQUM3QixLQUFLLEVBQUUsTUFBTTt3QkFDYixjQUFjLEVBQUUsWUFBWTt3QkFDNUIsV0FBVyxFQUFFLEtBQUs7d0JBQ2xCLHNCQUFzQixFQUFFLElBQUk7cUJBQy9CLEVBQUU7d0JBQ0MsVUFBVSxFQUFFLG1CQUFtQjt3QkFDL0IsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsY0FBYyxFQUFFLFlBQVk7d0JBQzVCLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixzQkFBc0IsRUFBRSxJQUFJO3FCQUMvQixDQUFDO2dCQUNGLFVBQVUsRUFBRSxDQUFDO3dCQUNULFVBQVUsRUFBRSxlQUFlO3dCQUMzQix3QkFBd0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3dCQUNsRSx3QkFBd0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3FCQUNyRSxDQUFDO2FBQ0w7WUFDRCwyQkFBMkIsRUFBRSxVQUFDLGVBQXVCLEVBQUUsZUFBb0I7Z0JBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7U0FDSixDQUFDO1FBRUYsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQWE7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDL0IsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDOUUsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhDUSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O09BQ1csWUFBWSxDQTBDeEI7SUFBRCxtQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgUHVzaE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXNoLW5vdGlmaWNhdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBzZW5kZXJJRDogXCI3ODI5ODEwODUwNjBcIixcclxuICAgICAgICAgICAgYmFkZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGVydDogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmVTZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9JREVOVElGSUVSJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdDQU5DRUxfSURFTlRJRklFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ1JFQURfQ0FURUdPUlknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JEZWZhdWx0Q29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zRm9yTWluaW1hbENvbnRleHQ6IFsnUkVBRF9JREVOVElGSUVSJywgJ0NBTkNFTF9JREVOVElGSUVSJ11cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNhbGxiYWNrQW5kcm9pZDogKHN0cmluZ2lmaWVkRGF0YTogU3RyaW5nLCBmY21Ob3RpZmljYXRpb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdHJpbmdpZmllZERhdGE6IFwiICsgc3RyaW5naWZpZWREYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmNtTm90aWZpY2F0aW9uOiBcIiArIEpTT04uc3RyaW5naWZ5KGZjbU5vdGlmaWNhdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgUHVzaE5vdGlmaWNhdGlvbnMucmVnaXN0ZXIoc2V0dGluZ3MsICh0b2tlbjogU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICBQdXNoTm90aWZpY2F0aW9ucy5vbk1lc3NhZ2VSZWNlaXZlZChzZXR0aW5ncy5ub3RpZmljYXRpb25DYWxsYmFja0FuZHJvaWQpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19