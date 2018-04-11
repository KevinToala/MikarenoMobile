import { Component } from "@angular/core";
import * as PushNotifications from "nativescript-push-notifications";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    public constructor() {
        let settings = {
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
            notificationCallbackAndroid: (stringifiedData: String, fcmNotification: any) => {
                console.log("stringifiedData: " + stringifiedData);
                console.log("fcmNotification: " + JSON.stringify(fcmNotification));
            }
        };

        PushNotifications.register(settings, (token: String) => {
            console.log("Token: " + token);
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log(JSON.stringify(error));
        });
    }

}
