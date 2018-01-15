import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { EmailService, IMessage } from './email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})
export class ContactComponent implements OnInit {
  emailForm: FormGroup;
  message: IMessage = {};
  msgs: any[] = [];
  buttonDisabled: boolean = true;   // Used by captcha to disable form until checked

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.email),
      'message': new FormControl('', Validators.required)
    });
  }

  sendEmail() {
     //  Construct message from form control values
    this.message = {
      'name': this.emailForm.controls.name.value,
      'email': this.emailForm.controls.email.value,
      'message': this.emailForm.controls.message.value
    }

    // Send email using service
    this.emailService.sendEmail(this.message).subscribe(res => {
      console.log('ContactComponent Success', res);
      this.msgs.push({ severity: 'success', summary: 'Succees', detail: 'Email Sent' });    // Have growl message show to user.
      this.emailForm.reset();    // Reset form fields to blank
    }, error => {
      console.log('ContactComponent Error', error);
    })
  }

  showResponse(response) {
    //call to a backend to verify against recaptcha with private key
    console.log(response);
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Succees', detail: 'User Responded' }); // Respond to use with growl mesg
    this.buttonDisabled = false;
  }

  get diagnostic() { return JSON.stringify(this.emailForm.value); }
}
