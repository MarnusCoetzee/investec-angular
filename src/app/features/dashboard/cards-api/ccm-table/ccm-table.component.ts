import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-ccm-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './ccm-table.component.html',
  styleUrl: './ccm-table.component.scss',
})
export class CcmTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @Input() ccm: any[] = [];
  dataSource = new MatTableDataSource<any>(this.ccm);
  displayedColumns: string[] = ['num', 'code', 'name'];
}
