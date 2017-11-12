import { Component, OnInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

//경로 src/app/lang-metadata
import { LANG_METADATA } from '../lang-metadata';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  langMetadata = LANG_METADATA;
  langCode: string;

  constructor(public i18nSupporter: I18nSupportService) {
    this.langCode = i18nSupporter.langCode;
  }

  ngOnInit() {
  }

  //추가해주기
  setLangCode(code: string){
    this.langCode = code;
    this.i18nSupporter.langCode = code;
  }

}
