import { Component, OnInit } from '@angular/core';
import { Phonebook } from '../classes/Phonebook';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookService } from '../services/phonebook.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  id!: number;
  phoneBooks!: Phonebook[];
  phoneBookCols: any[] = [];
  selectedPhonebook!: Phonebook;

  showAlert: boolean = false;
  alertMsg!: string;


  constructor(private router: Router,
    private phonebookService: PhonebookService) { }

  ngOnInit(): void {
    this.getAllPhonebookInfo();
    this.phoneBookCols = this.phonebookService.getPhonebookHeaders();
  }

  getAllPhonebookInfo() {
    this.phonebookService.getAllPhonebookInfo().subscribe(
      response => {
        this.phoneBooks = response;
      }
    );;
  }

  addPhonebook() {
    this.router.navigate(['add-phonebook']);
  }

  updatePhonebook() {
    this.router.navigate(['edit-phonebook',
    this.selectedPhonebook?.id
   ]);
  }

  public deletePhonebook() {
    this.phonebookService.deletePhonebook(this.selectedPhonebook.id)
    .subscribe(
      data => {
        console.log(data);
        this.getAllPhonebookInfo();
        this.selectedPhonebook!= undefined;
      }, error => {
        this.showAlert = true;
        this.alertMsg = error.message;
      }
    );
  }
}
