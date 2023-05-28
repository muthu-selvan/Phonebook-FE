import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookService } from '../services/phonebook.service';
import { Phonebook } from '../classes/Phonebook';

@Component({
  selector: 'app-add-phonebook',
  templateUrl: './add-phonebook.component.html',
  styleUrls: ['./add-phonebook.component.css']
})
export class AddPhonebookComponent implements OnInit {

  id!: string;
  phoneBook!: Phonebook;

  showAlert: boolean = false;
  alertMsg!: string;

  constructor(private route: ActivatedRoute,private router: Router,
    private phonebookService: PhonebookService) { }

  ngOnInit(): void {
    this.phoneBook = new Phonebook();
    this.id = this.route.snapshot.params['id'];

    this.phonebookService.getPhonebook(this.id)
    .subscribe(data => {
      console.log(data);
      this.phoneBook = data;
    }, error => {
      console.log(error);
    })

  }

  save() {
    
    if(!this.phoneBook.firstName || !this.phoneBook.lastName || !this.phoneBook.phoneNo) {
      this.showAlert = true;
      this.alertMsg = "Please Enter All Fields";
      return;
    }

    if(!this.isValid(this.phoneBook.phoneNo)) {
      this.showAlert = true;
      this.alertMsg = "Invalid Phone Number Field";
      return;
    }

    if(this.phoneBook.id == undefined) {
      this.phonebookService
      .addPhonebook(this.phoneBook)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['phonebook']);
        }, error => {
          this.showAlert = true;
          this.alertMsg = error.message;
        }
      );
    } else {
      this.phonebookService
      .updatePhonebook(this.id, this.phoneBook)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['phonebook']);
        }, error => {
          this.showAlert = true;
          this.alertMsg = error.message;
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['phonebook']);
  }


  isValid(p: string): boolean {
    let phoneRe = /^[(]{0,1}[0-9]{3}[)]{0,1}[-]{0,1}[0-9]{3}[-]{0,1}[0-9]{4}$/;
    let digits = p.replace(/\D/g, "-");
    console.log("digits: "+digits);
    console.log("phoneRe: "+phoneRe);
    console.log("phoneRe.test(digits): "+phoneRe.test(digits));
    return phoneRe.test(digits);
  }

}
