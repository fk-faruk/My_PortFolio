import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  documents = [
 // { name: 'Project Plan.Risk register', url: '/assets/documents/Project Plan.Risk register.xlsx', size: '13 KB',  type: 'excel' },
    { name: 'Process Optimization', url: '/assets/documents/SlideEgg_900249-Process Optimization.pptx', link:'https://www.slideegg.com/process-optimization?srsltid=AfmBOop0Z7OsiWgBSqDV9S1edBfbCqOnPoCl_TauOsDGq3BAlUbw0JFS', size: '1.1 MB', type: 'powerpoint', description : 'This article on process optimization emphasizes on simplifying an organization’s operations to improve productivity and effectiveness. It offers visual tools, ideas, and frameworks to spot bottlenecks, save waste, and increase process effectiveness in many different sectors' },
    { name: 'Business-analysis-and-digital-transformation', link:'https://www.iiba.org/globalassets/standards-and-resources/whitepapers-and-studies/files/business-analysis-and-digital-transformation.pdf', url: '/assets/documents/business-analysis-and-digital-transformation.pdf', size: '4.4 MB',  type: 'pdf' ,
    description : 'Published by the International Institute of Business Analysis (IIBA), this journal investigates the vital contribution business analysis makes to propel effective digital transformation projects. It emphasizes tools, approaches, and frameworks that let companies match technology adoption with corporate objectives thereby guaranteeing flexibility and value creation in a fast-changing digital environment.'},
    { name: 'Comprehensive Guide to Business Process Re-engineering (BPR)', url: '/assets/documents/Branding.docx', size: '10 KB' ,  type: 'word' , description: 'Business Process Re-engineering (BPR) streamlines and optimizes processes to improve efficiency, reduce costs, and enhance quality and customer satisfaction, using tools like Lean Six Sigma and automation.'},
    { name: 'Polarsigma Company Profile', url: 'src/assets/documents/Polarsigma_Company_Profile.xlsx', link:'https://docs.google.com/spreadsheets/d/1Cq4MBbqFIbK2LSOzuIPFFruNzJUXkOvG/edit?usp=drive_link&ouid=100551018059674000700&rtpof=true&sd=true', description:'Polarsigma Consulting: Established in 2010 and headquartered in Lagos, Nigeria, Polarsigma specializes in business process reengineering, workflow optimization, and innovative solutions across industries such as healthcare, finance, retail, manufacturing, and technology', size: '16 KB' ,  type: 'excel' },
  ];



  getFileIcon(type: string): string {
    switch (type) {
      case 'pdf':
        return '/assets/icons/proicons--pdf-2.svg';
      case 'excel':
        return '/assets/icons/mdi--microsoft-excel.svg';
      case 'powerpoint':
        return '/assets/icons/mdi--microsoft-powerpoint.svg';
      default:
        return '/assets/icons/mynaui--file.svg';
    }
  }
 
  
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
