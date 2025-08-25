import {Component, signal} from '@angular/core';
import {Balance} from './components/balance/balance';

@Component({
  selector: 'app-home',
  imports: [
    Balance
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  transaction = signal([
    {value: 500, type: 'income'},
    {value: 150, type: 'outcome'},
    {value: 200, type: 'outcome'},
    {value: 100, type: 'income'},
  ]);

}
