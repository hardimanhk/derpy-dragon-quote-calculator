import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  woodLength!: number;
  woodWidth!: number;
  woodHeight!: number;
  epoxyLength!: number;
  epoxyWidth!: number;
  epoxyHeight!: number;
  baseLowEstimate!: number;
  baseHighEstimate!: number;
  daysWorkEstimateLow!: number;
  daysWorkEstimateHigh!: number;

  walnutPricePerFoot: number = 16.0;
  cherryPricePerFoot: number = 14.0;
  maplePricePerFoot: number = 12.0;

  materialOverestimate = 0.1;
  dailyRate = 750;

  showQuote = false;

  quote!: Quote;

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  constructor() {}

  calculateMaterialsTotals(price: number, low: boolean): number {
    const boardFeet =
      (this.woodLength * this.woodWidth * this.woodHeight) / 144;
    const epoxyGallons =
      (this.epoxyLength * this.epoxyWidth * this.epoxyHeight) / 231;
    const epoxyCost = epoxyGallons * 100;
    const baseEstimate = low ? this.baseLowEstimate : this.baseHighEstimate;
    return (
      (price * boardFeet + epoxyCost + baseEstimate) *
      (1 + this.materialOverestimate)
    );
  }

  createQuoteObject() {
    console.log(this.woodLength, this.woodWidth, this.woodHeight)
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

    this.quote = {
      walnutMaterialsLow: this.formatter.format(walnutMaterialsLow),
      walnutMaterialsHigh: this.formatter.format(walnutMaterialsHigh),
      walnutTotalLow: this.formatter.format(walnutTotalLow),
      walnutTotalHigh: this.formatter.format(walnutTotalHigh),
      cherryMaterialsLow: this.formatter.format(cherryMaterialsLow),
      cherryMaterialsHigh: this.formatter.format(cherryMaterialsHigh),
      cherryTotalLow: this.formatter.format(cherryTotalLow),
      cherryTotalHigh: this.formatter.format(cherryTotalHigh),
      mapleMaterialsLow: this.formatter.format(mapleMaterialsLow),
      mapleMaterialsHigh: this.formatter.format(mapleMaterialsHigh),
      mapleTotalLow: this.formatter.format(mapleTotalLow),
      mapleTotalHigh: this.formatter.format(mapleTotalHigh),
    };
    console.log(this.quote);

    this.showQuote = true;
  }

  returnToForm() {
    this.showQuote = false;
  }
}
