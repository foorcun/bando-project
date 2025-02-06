import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HIZMETLERIMIZ } from '../../../../public/json/hizmetlerimiz';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hizmetlerimiz-detail-page',
  templateUrl: './hizmetlerimiz-detail-page.component.html',
  styleUrls: ['./hizmetlerimiz-detail-page.component.scss'],
  imports: [CommonModule]
})
export class HizmetlerimizDetailPageComponent implements OnInit {
  title: string | null = null;
  details: any = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
    this.details = HIZMETLERIMIZ.find(item => item.title.toLowerCase() === this.title?.toLowerCase());
  }

  goBack(): void {
    this.location.back();
  }
}
