import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { BimPage } from "../bim/bim";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = AboutPage;
  tab2Root = BimPage;
  constructor() {}
}
