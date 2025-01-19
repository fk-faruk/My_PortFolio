import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;



  clients_web = [ 
    {
      webname : 'Introduction to RPA',
      description : " The website details Robotic Process Automation (RPA), it's benefits, and use cases.",
      link : "https://www.uipath.com/rpa/robotic-process-automation"
    },
    {
      webname : 'RPA Implementation Roadmap',
      description : " The website offers a detailed RPA deployment road map with guidance for effective adoption and maximization of efficiency.",
      link : "https://www.empaxis.com/blog/rpa-roadmap "
    },
    {
      webname : 'Ethics of Automation',
      description : "The website provides solutions including upgrading their skills and compliance in response to ethical issues regarding data privacy that automation presents.",
      link : "https://www.b2eautomation.com/insights/ethics-of-automation-and-robotics-top-challenges-and-solutions "
    },
    {
      webname : 'Customer satisfaction through automation',
      description : " The website underlines how automation improves customer experience by streamlining processes, reducing response times, and improving service quality. It also looks at tools and techniques companies might employ to provide quicker, more customized encounters.",
      link : "https://reputation.com/resources/articles/how-automation-improves-the-customer-experience/"
    },
  
    {
      webname : 'Automation Case Study',
      description : "The case study on Eurobank's automation path on the website shows how RPA, by automating repetitive tasks, enhanced operational efficiency It covers the implementation process, advantages gained, and main lessons discovered.",
      link : "https://www.uipath.com/resources/automation-case-studies/eurobank "
    },
    {
      webname : "Change Management Theory (Kotter’s 8-step Methodology)",
      description : "The website explains Kotter’s 8-Step Methodology for Change, a framework designed to help organizations through successful transformations.",
      link : "https://www.kotterinc.com/methodology/8-steps/ "
    }

  ]

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
