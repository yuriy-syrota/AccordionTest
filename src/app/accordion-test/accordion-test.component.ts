import { Component, OnInit } from '@angular/core';
import { SectionData, DATA } from './models/section-data';

@Component({
  selector: 'app-accordion-test',
  templateUrl: './accordion-test.component.html',
  styleUrls: ['./accordion-test.component.scss']
})
export class AccordionTestComponent implements OnInit {

  testSectionData: SectionData[] = DATA;
  testSectionChartData = [];

  constructor() { }

  ngOnInit() {
  }

  // callse the InitChartData() to update the chart to use the data for the current section
  onSectionExpanded(sectionIndex: number)
  {
    this.InitChartData(sectionIndex);
  }

  // initializes the data structure used by the chart
  private InitChartData(sectionIndex: number)
  {
    this.testSectionChartData =
    [
      {
        'name': this.testSectionData[sectionIndex].sectionName,
        'series': [
          { 'name': 'Industrials', 'value': this.testSectionData[sectionIndex].industrials },
          { 'name': 'Real Estate', 'value': this.testSectionData[sectionIndex].realEstate },
          { 'name': 'Information Technology', 'value': this.testSectionData[sectionIndex].informationTechnology },
          { 'name': 'Communication Services', 'value': this.testSectionData[sectionIndex].communicationServices },
          { 'name': 'Health Care', 'value': this.testSectionData[sectionIndex].healthCare },
          { 'name': 'Materials', 'value': this.testSectionData[sectionIndex].materials },
          { 'name': 'Utilities', 'value': this.testSectionData[sectionIndex].utilities },
          { 'name': 'Consumer Staples', 'value': this.testSectionData[sectionIndex].consumerStaples },
          { 'name': 'Consumer Discretionary', 'value': this.testSectionData[sectionIndex].consumerDiscretionary },
          { 'name': 'Financials', 'value': this.testSectionData[sectionIndex].financials },
          { 'name': 'Energy', 'value': this.testSectionData[sectionIndex].energy },
        ]
      }
    ];
  }  
}
