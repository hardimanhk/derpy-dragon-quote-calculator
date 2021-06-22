import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent implements OnInit {
  woodLength: number = 0;
  woodWidth: number = 0;
  woodHeight: number = 0;
  epoxyLength: number = 0;
  epoxyWidth: number = 0;
  epoxyHeight: number = 0;
  baseLowEstimate: number = 0;
  baseHighEstimate: number = 0;
  daysWorkEstimateLow: number = 0;
  daysWorkEstimateHigh: number = 0;

  walnutPricePerFoot: number = 16;
  cherryPricePerFoot: number = 14;
  maplePricePerFoot: number = 12;

  materialOverestimate = 0.1;
  dailyRate = 750;

  constructor() {}

  ngOnInit(): void {}

  calculateMaterialsTotals(price: number, low: boolean): number {
    const boardFeet =
      (this.woodLength * this.woodWidth * this.woodHeight) / 144;
    const epoxyCost =
      (this.epoxyLength * this.epoxyWidth * this.epoxyHeight) / 231;
    const baseEstimate = low ? this.baseLowEstimate : this.baseHighEstimate;
    return (
      (price * boardFeet + epoxyCost + baseEstimate) *
      (1 + this.materialOverestimate)
    );
  }

  createQuoteObject() {
    const walnutMaterialsLow = this.calculateMaterialsTotals(
      this.walnutPricePerFoot,
      true
    );
    const walnutMaterialsHigh = this.calculateMaterialsTotals(
      this.walnutPricePerFoot,
      false
    );
    const cherryMaterialsLow = this.calculateMaterialsTotals(
      this.cherryPricePerFoot,
      true
    );
    const cherryMaterialsHigh = this.calculateMaterialsTotals(
      this.cherryPricePerFoot,
      false
    );
    const mapleMaterialsLow = this.calculateMaterialsTotals(
      this.maplePricePerFoot,
      true
    );
    const mapleMaterialsHigh = this.calculateMaterialsTotals(
      this.maplePricePerFoot,
      false
    );

    const walnutTotalLow =
      walnutMaterialsLow + this.daysWorkEstimateLow * this.dailyRate;
    const walnutTotalHigh =
      walnutMaterialsHigh + this.daysWorkEstimateHigh * this.dailyRate;
    const cherryTotalLow =
      cherryMaterialsLow + this.daysWorkEstimateLow * this.dailyRate;
    const cherryTotalHigh =
      cherryMaterialsHigh + this.daysWorkEstimateHigh * this.dailyRate;
    const mapleTotalLow =
      mapleMaterialsLow + this.daysWorkEstimateLow * this.dailyRate;
    const mapleTotalHigh =
      mapleMaterialsHigh + this.daysWorkEstimateHigh * this.dailyRate;

    const quote: Quote = {
      walnutMaterialsLow: walnutMaterialsLow,
      walnutMaterialsHigh: walnutMaterialsHigh,
      walnutTotalLow: walnutTotalLow,
      walnutTotalHigh: walnutTotalHigh,
      cherryMaterialsLow: cherryMaterialsLow,
      cherryMaterialsHigh: cherryMaterialsHigh,
      cherryTotalLow: cherryTotalLow,
      cherryTotalHigh: cherryTotalHigh,
      mapleMaterialsLow: mapleMaterialsLow,
      mapleMaterialsHigh: mapleMaterialsHigh,
      mapleTotalLow: mapleTotalLow,
      mapleTotalHigh: mapleTotalHigh,
    };
  }
}
