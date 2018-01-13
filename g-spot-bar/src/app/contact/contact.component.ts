import { Component, OnInit } from '@angular/core';
import { EmailService, IMessage } from './email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})
export class ContactComponent implements OnInit {
  message: IMessage = {};
  msgs: any[] = [];
  buttonEnabled:boolean = true;

  constructor(private emailService: EmailService) { }

  ngOnInit() {

  }

  sendEmail(message: IMessage) {
    this.emailService.sendEmail(message).subscribe(res => {
      console.log('ContactComponent Success', res);
    }, error => {
      console.log('ContactComponent Error', error);
    })
  }

  showResponse(response) {
    //call to a backend to verify against recaptcha with private key
    console.log(response);
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Succees', detail: 'User Responded'});
    this.buttonEnabled = false;
  }
}
