import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  navItems = [
    { icon: 'search', label: 'Search', route: '/search' },
    { icon: 'star', label: 'Favorites', route: '/favorites' },
    { icon: 'message-square', label: 'Messages', route: '/messages' },
    { icon: 'sliders', label: 'Settings', route: '/settings' },
    { icon: 'building', label: 'Institution', route: '/institution' }
  ];

}
