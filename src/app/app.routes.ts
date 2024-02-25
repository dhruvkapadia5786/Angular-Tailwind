import { Routes } from '@angular/router';
import { HomeComponent } from './pages/main/home/home.component';
import { AboutComponent } from './pages/main/about/about.component';
import { ContactComponent } from './pages/main/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanyComponent } from './pages/main/about/company/company.component';
import { EmployeeComponent } from './pages/main/about/employee/employee.component';
import { PostComponent } from './pages/post/post.component';
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'About Us', component: AboutComponent },
  {
    path: 'about',
    children: [
      {
        path: 'company',
        title: 'About Us | Company',
        component: CompanyComponent,
      },
      {
        path: 'employee',
        title: 'About Us | Employee',
        component: EmployeeComponent,
      },
    ],
  },
  { path: 'post', title: 'Post', component: PostComponent },
  { path: 'movies', title: 'Movies', component: MoviesComponent },
  { path: 'contact', title: 'Contact Us', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', title: '404', component: PageNotFoundComponent },
];
