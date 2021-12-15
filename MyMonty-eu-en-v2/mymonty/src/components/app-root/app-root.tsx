import "@stencil/router";
import { LocationSegments, RouterHistory } from "@stencil/router";
import { Component, Element, Listen, State, h } from "@stencil/core";

import SiteProviderConsumer, {
  SiteState
} from "../../global/site-provider-consumer";


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true, // TODO: uncomment and test
})
export class AppRoot {
  history?: RouterHistory;
  elements = ["web-header", "site-menu", "app-burger", "main"];

  @Element() el!: HTMLElement;

  @State() isLeftSidebarIn: boolean = false;

  @Listen("resize", { target: "window" })
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768 && this.isLeftSidebarIn) {
        this.isLeftSidebarIn = false;
        document.body.classList.remove("no-scroll");
        this.elements.forEach(el => {
          this.el.querySelector(el)!.classList.remove("left-sidebar-in");
        });
      }
    });
  }

  private setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen((location: LocationSegments) => {
        // Google Analytics
        // (window as any).gtag("config", "UA-44023830-34", {
        //   page_path: location.pathname + location.search
        // });

        // Hubspot
        // (window as any)._hsq.push(['setPath', location.pathname + location.search ]);
        // (window as any)._hsq.push(['trackPageView']);
      });
    }
  };

  componentDidLoad() {
    this.isLeftSidebarIn = false;
  }


  private toggleLeftSidebar = () => {
    if (window.innerWidth >= 768) {
      return;
    }
    const elements = this.elements
      .map(el => this.el.querySelector(el))
      .filter(el => !!el) as Element[];

    if (this.isLeftSidebarIn) {
      this.isLeftSidebarIn = false;
      document.body.classList.remove("no-scroll");
      elements.forEach(el => {
        el.classList.remove("left-sidebar-in");
        el.classList.add("left-sidebar-out");
      });
    } else {
      this.isLeftSidebarIn = true;
      document.body.classList.add("no-scroll");
      elements.forEach(el => {
        el.classList.add("left-sidebar-in");
        el.classList.remove("left-sidebar-out");
      });
    }
  };

  render() {
    const siteState: SiteState = {
      isLeftSidebarIn: this.isLeftSidebarIn,
      toggleLeftSidebar: this.toggleLeftSidebar
    };
    return (
      <SiteProviderConsumer.Provider state={siteState}>
        <web-header />
        <main>
          <stencil-router scrollTopOffset={0}>
            <stencil-route
              style={{ display: "none" }}
              routeRender={this.setHistory}
            />
            <stencil-route-switch>
              <stencil-route url="/" component="my-component" exact={true} />
              <stencil-route url="/about" component="web-about" exact={true} />
            </stencil-route-switch>

          </stencil-router>
        </main>
      </SiteProviderConsumer.Provider>
    );
  }

}
