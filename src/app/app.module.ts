import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { TabComponent } from './components/tab.component'
import { TabsComponent } from './components/tabs.component'

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
