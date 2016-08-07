import  { Injectable } from '@angular/core'

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Message } from "./message.model";

@Injectable()
export class MessageService {
    constructor(private http: Http) {}

    getMessages(): Observable<any> {
        return this.http.get('http://localhost/messages')
            .map( (data: Response) =>  {
                const extracted = data.json();
                const msgArray: Message[] = [];
                let message;
                for (let element of extracted.data) {
                    message = new Message(element.content);
                    console.log(message);
                    msgArray.push(message);
                }
                console.log("get messages");
                return msgArray;
            });

    }

    saveMessage(message: Message): Observable<any> {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log("save message");
        return this.http.post('http://localhost/message', body, {headers: headers});
    }
}