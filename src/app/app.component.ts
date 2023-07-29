import { Component, OnInit } from '@angular/core';
import { DbdataService } from './dbdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dbdata: DbdataService) {}
  dataFromDatabase =false;
  disabled =true
  database:any;
  formHeader="Add Record to The DB";
  names: string = '';
  email: string = '';
  id: any = null;
  PhoneNumber: any = null;
  Address: string = '';
  showForm = false
  ngOnInit() {
    this. gettingDataFromDb();
  }


  gettingDataFromDb(){
    this.dbdata.getDataFromDb().subscribe({
      next: (data) => {
        this.database=data;
        this.dataFromDatabase=true
      },
      error: (error) => {
        // Handle any errors that occur during the HTTP request
        console.error('Error:', error);
      },
      
    });
  
}


deleteRecord(id: number) {
  this.dbdata.deleteFromDb({ id }).subscribe({
    next: (data) => {
      
      console.log('Response Data:', data);

      this.gettingDataFromDb();
    },
    error: (error) => {
      console.error('Error:', error);
    },
   
  });
}


openForm(data:any=null){
  this.showForm=true;
  if(data){
    this.id=data.id;
    this.names=data.names;
    this.email=data.email;
    this.PhoneNumber=data.PhoneNumber;
    this.Address=data.Address
    this.formHeader="Edit the Record in the Database";
    
  }
  else {
    // Reset the form fields when adding a new record
      this.id =null;
this.formHeader = "Add Record to The DB";
  }
}

closeForm(){
      this.showForm = false;
      this.clearForm()
    }

    clearForm() {
      this.id =null ;
      this.names ='';
      this.email = '';
      this.PhoneNumber =null ;
      this.Address = '';
    }
    
    updateDataTODb(){
   
      this.showForm= false;
      
        
        let  names= this.names;
        let  email= this.email;
        let  PhoneNumber= this.PhoneNumber;
         let Address=  this.Address;
      
      if(this.id){
           let id =this.id;
            console.log('Data to be sent to the server:', id, names, email, PhoneNumber, Address); // Add this line to check the values

          this.dbdata.updateDataInDb( id, names, email, PhoneNumber, Address ).subscribe({
        next: (data) => {
          this. gettingDataFromDb();

          console.log('Response Data:', data);
    
        },
        error: (error) => {
          // Handle any errors that occur during the HTTP request
          console.error('Error:', error);
        },
        
      });
    }
    else{
      console.log('Data to be sent to the server:', names, email, PhoneNumber, Address)// Add this line to check the values

      this.dbdata.createDataInDb  (names, email, PhoneNumber, Address ).subscribe({

        next: (data) => {
          this. gettingDataFromDb();

          console.log('Response Data:', data);
    
          // Refresh the data from the database after successful delete
          this.gettingDataFromDb();
        },
        error: (error) => {
          // Handle any errors that occur during the HTTP request
          console.error('Error:', error);
        },
        
      });
    }
    }

}










// import { Component, OnInit } from '@angular/core';
// import { DbdataService } from './dbdata.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   constructor(private dbdata: DbdataService) {}
//   dataFromDatabase =false;
//   disabled =true
//   database:any;
//   formHeader="Add Record to The DB";
//   names: string = '';
//   email: string = '';
//   id: any = null;
//   PhoneNumber: any = null;
//   Address: string = '';
//   showForm = false
//   ngOnInit() {
//     this. gettingDataFromDb();
//   }


//   gettingDataFromDb(){
//     this.dbdata.getDataFromDb().subscribe({
//       next: (data) => {
//         this.database=data;
//         this.dataFromDatabase=true
//       },
//       error: (error) => {
//         // Handle any errors that occur during the HTTP request
//         console.error('Error:', error);
//       },
      
//     });
  
// }


// deleteRecord(id: number) {
//   this.dbdata.deleteFromDb({ id }).subscribe({
//     next: (data) => {
      
//       console.log('Response Data:', data);

//       this.gettingDataFromDb();
//     },
//     error: (error) => {
//       console.error('Error:', error);
//     },
   
//   });
// }


// openForm(data:any=null){
//   this.showForm=true;
//   if(data){
//     this.id=data.id;
//     this.names=data.names;
//     this.email=data.email;
//     this.PhoneNumber=data.PhoneNumber;
//     this.Address=data.Address
//     this.formHeader="Edit the Record in the Database";
    
//   }
//   else {
//     // Reset the form fields when adding a new record
//       this.id =null;
// this.formHeader = "Add Record to The DB";
//   }
// }
// // isAddRecordMode() {
// //   // Check if it's "Add Record" mode (when id is undefined)
// //   return typeof this.id !== "number";
// // }

// closeForm(){
//       this.showForm = false;
//       this.clearForm()
//     }

//     clearForm() {
//       this.id =null ;
//       this.names ='';
//       this.email = '';
//       this.PhoneNumber =null ;
//       this.Address = '';
//     }
    
//     updateDataTODb(){
   
//       this.showForm= false;
//       let body:any={
        
//           names: this.names,
//           email: this.email,
//           PhoneNumber: this.PhoneNumber,
//           Address:  this.Address
//       }
//       if(this.id){
//             body['id'] =this.id;
//             console.log('Data to be sent to the server:', body); // Add this line to check the values

//           this.dbdata.updateDataInDb({ body }).subscribe({
//         next: (data) => {
//           this. gettingDataFromDb();

//           console.log('Response Data:', data);
    
//         },
//         error: (error) => {
//           // Handle any errors that occur during the HTTP request
//           console.error('Error:', error);
//         },
        
//       });
//     }
//     else{
//       console.log('Data to be sent to the server:', body)// Add this line to check the values

//       this.dbdata.createDataInDb  ({ body }).subscribe({

//         next: (data) => {
//           this. gettingDataFromDb();

//           console.log('Response Data:', data);
    
//           // Refresh the data from the database after successful delete
//           this.gettingDataFromDb();
//         },
//         error: (error) => {
//           // Handle any errors that occur during the HTTP request
//           console.error('Error:', error);
//         },
        
//       });
//     }
//     }

// }
