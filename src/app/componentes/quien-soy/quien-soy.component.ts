import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadPDF() {
    const doc = new jspdf();
    let content = $('#content').html();
    doc.fromHTML(content, 15, 15, {'width': 180});
    doc.save('Game Time.pdf');
  }
}
