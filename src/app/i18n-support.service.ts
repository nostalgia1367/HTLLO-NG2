import { Injectable } from '@angular/core';
import { LANG_METADATA } from './lang-metadata';
@Injectable()
export class I18nSupportService {
  langCode = 'ko';
  private welcomeMsg;

  constructor() {
    // this.welcomeMsg = {
    //   'ko': '안녕하세요',
    //   'en': 'Hello',
    //   'jp': '初めまして',
    //   'fr': 'Bonjour'
    // };
  }

  getWelcomeMsgByCode(userName: string, code: string){
    const helloMsg = this.welcomeMsg[code];
    return `
            ${helloMsg}, ${userName}!!
          `;
  }

  getWelcomeMsg(userName: string){
    //const helloMsg = this.welcomeMsg[this.langCode];
    const langData = LANG_METADATA.find(lang => lang.code === this.langCode);
    // return `
    //         ${helloMsg}, ${userName}!!
    //       `;
    return `${langData.msg}, ${userName}! `
  }

}
