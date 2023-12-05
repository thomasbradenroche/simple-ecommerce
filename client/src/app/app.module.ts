import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    HttpClientModule,
    // ...
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
