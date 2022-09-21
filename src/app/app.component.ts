import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Anil Angular Practice';

  ShowMsg = true;

  switchValue = 'three';

  colorVal = 'blue';
  bgColorVal = 'orange';

  clsName = 'one';
  clsName2 = 'two';

  subTitle = 'its just interpolation';
  epNum = 17;

  user = {
    userId: 25,
    userName: 'Anil',
    status: 'Active',
  };

  colorValue = 'red';

  placeholderVal = 'reddy';

  hrefVal = 'http://google.com';
  updatedLink = 'http://youtube.com';

  showAlert() {
    alert('Show me alert when click');
  }

  alternateVal = 'last';

  readAleternateval() {
    console.log(this.alternateVal);
  }

  user1 = {
    userId: 10,
    First: 'Kumar',
    Middle: 'Kumarreddy',
    DOB: 5 / 21 / 1995,
    salary: 1200.56,
  };

  user2 = {
    firstName: 'jhon',
    city: 'deep',
    code: 'NY',
  };

  readme() {
    console.log('button clicked');
  }
}
