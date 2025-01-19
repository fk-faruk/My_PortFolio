import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  


  @Input() collapsed = false;
  @Input() screenWidth = 0;


  
  videos_web = [ 
    {
      name : 'Kotter’s 8-Step Change Model',
      description : "The video addresses Kotter's 8-Step Change Model, which, by generating urgency, developing leadership teams, and integrating changes into the culture, helps organizations manage successful transformations. These actions aim to ensure alignment with organizational goals and sustainable impact. ",
      link : "https://www.youtube.com/embed/1QWiMkXyTP4"
    },
    {
      name  : 'Real-world use cases of RPA in the finance industry',
      description : " The video explores how the finance sector uses Robotic Process Automation (RPA) to simplify processes, therefore enhancing accuracy and efficiency. It highlights the advantages in customer service and the cost-saving power of automation. ",
      link : "https://www.youtube.com/embed/EPgvZFiSvYk"
    },
    {
      name  : '10 strategies to Manage Resistance to Change',
      description : " Emphasizing good communication, involving staff, and handling concerns, the video lists ten techniques for handling opposition to change. To reduce resistance, it emphasizes the need for leadership support and encouragement of teamwork.",
      link : "https://www.youtube.com/embed/niU1ZYcmigM"
    },
    {
      name  : 'Measuring Automation ROI',
      description : "Carlos Kidman shows in his TestFlix 2020 presentation how to apply and calculate the ROI of automation in software testing. He underlines the need of matching automation with organization goals and applying KPIs for efficient assessment",
      link : "https://www.youtube.com/embed/gMYlLQK1cWM"
    },
   
    {
      name  : "Robotic Process Automation (RPA)",
      description : "Robotic Process Automation (RPA), its capacity to automate repetitive processes, and how it improves productivity in businesses by lowering manual work, all of which the video addresses It emphasizes important advantages including better accuracy, financial savings, and industry-wide scaling possibility.",
      link : "https://www.youtube.com/embed/6S1etS5cLYI"
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

