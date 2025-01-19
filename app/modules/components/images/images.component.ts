import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;



  // web_images = [ 
  //   {
  //     name : 'Workflow Automation',
  //     link : "Workflow Automation.jpg"
  //   },
  //   {
  //     name  : 'Real-world use cases of RPA in the finance industry',
  //     link : "stock-photo-quality-increase-and-cost-optimization-for-products-or-services-to-improve-efficiency-businessman-2390114085.jpg"
  //   },
  //   {
  //     name  : '10 strategies to Manage Resistance to Change',
  //     link : "stock-photo-collaborative-process-of-multicultural-skilled-students-during-brainstorming-meeting-in-office-1100733734.jpg"
  //   },
  //   {
  //     name  : 'Measuring Automation ROI',
  //     link : "RPA Dashboard.jpg"
  //   },
   
  //   {
  //     name  : "Financial Data Process Image",
  //     link : "Financial Data Process.jpg"
  //   },
  //   {
  //     name  : 'Financial Data Process Imagee',
  //     link : "Financial Data Process 2.jpg"
  //   },
  //   {
  //     name  : 'Measuring Automation ROI',
  //     link : "Employee Training.jpg"
  //   },
   
  //   {
  //     name  : "Robotic Process Automation (RPA)",
  //     link : "Customer Satisfaction Metrics.jpg"
  //   },
  //   {
  //     name  : 'Measuring Automation ROI',
  //     link : "Compliance Risk.jpg"
  //   },
   
  //   {
  //     name  : 	"Workflow Automation",
  //     link : "Business process and workflow automation.jpg"
  //   },



  // ]


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

