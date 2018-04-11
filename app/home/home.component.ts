import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../model/message';
import {Observable} from 'rxjs/Observable';
import {finalize, map} from 'rxjs/operators';
import {ListView} from 'tns-core-modules/ui/list-view';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    mensajes: Observable<Message[]>;
    //@ViewChild('ListMensajes') listMensajes: ElementRef;

    constructor(private httpCliente: HttpClient) {
        this.mensajes = httpCliente.get<Message[]>('https://dev.mikareno.com/json/list-messages-by-person.action',
            {
                headers : {'Authorization': 'Basic c3VwZXJhZG1pbjptaWthcmVubw=='}
            }
        ).pipe(
           map((data: any) => data.messages)
           /*finalize(() => {
               const list: ListView = this.listMensajes.nativeElement;
               list.refresh();
           })*/
        );
    }

    ngOnInit(): void {
    }
}
