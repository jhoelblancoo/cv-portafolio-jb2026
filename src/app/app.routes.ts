import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', component: Home },
      { path: 'proyectos/:slug', component: ProjectDetail },
      { path: 'sobre-mi', component: About },
      { path: 'contacto', component: Contact },
      { path: '**', redirectTo: '' },
    ],
  },
];
