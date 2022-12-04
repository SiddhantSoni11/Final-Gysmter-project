import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HistoryComponent } from './history/history.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SlidingComponentComponent } from './sliding-component/sliding-component.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
  {path:'Acknowledgement',component: AcknowledgementComponent},
  {path:'OurTeam',component:OurTeamComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'OurCustomers',component:OurCustomersComponent},
  {path:'History',component:HistoryComponent},
  {path:'Trainer',component:TrainerComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Sliding',component:SlidingComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
