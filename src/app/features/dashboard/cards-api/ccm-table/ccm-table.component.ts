import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ConversionDialogue } from '../conversion-dialogue/conversion-dialogue.component';

@Component({
  selector: 'app-ccm-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatButton, ConversionDialogue],
  templateUrl: './ccm-table.component.html',
  styleUrl: './ccm-table.component.scss',
})
export class CcmTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @Input() ccm: any[] = [];
  @Input() currencies: boolean = false;
  dataSource = new MatTableDataSource<any>(this.ccm);
  displayedColumns: string[] = ['num', 'code', 'name'];

  constructor (private dialog: MatDialog) {}
  ngOnInit(): void {
    if (this.currencies) {
      this.displayedColumns.push('convert');
      this.ccm.map((C) => ({...C, button: 'Convert'}))
    }
  }

  onConvertCurrency() {
    const conversionDialogRef = this.dialog.open(ConversionDialogue);
  }
}
