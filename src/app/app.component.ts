import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isChecked = false;
  value = '';
  title = 'myshop';

  menuItems: MenuItem[] = [
    {
      label: 'Men',
      icon: 'sports_soccer',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Women',
      icon: 'sports_soccer',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Kids',
      icon: 'sports_soccer',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Electronics',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Fitness Machines',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Online Exclusive',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    }

  ];

  tooog(value) {
    this.isChecked = !this.isChecked;
    if (value.checked) {
      document.body.classList.remove('my-light-theme');
      document.body.classList.add('my-dark-theme');
    } else {
      document.body.classList.remove('my-dark-theme');
      document.body.classList.add('my-light-theme');
    }
  }
}
