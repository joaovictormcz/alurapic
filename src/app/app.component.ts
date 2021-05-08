import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {   

  photos = [
    {
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Okonjima_Lioness.jpg/420px-Okonjima_Lioness.jpg',
      description:'Leoa'
    },
    {
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/420px-Lion_waiting_in_Namibia.jpg',
      description:"Leão"
    },
    {
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/420px-Lion_waiting_in_Namibia.jpg',
      description:"Leão"
    }
  ];

}
