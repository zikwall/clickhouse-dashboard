import React from "react";
import { Translator } from "eo-locale";
import { LOCALES, detectLang } from "./../../../../constants";

const tr = new Translator(detectLang(), LOCALES);

const AdsstItem = ({ adsst, data }) => {
    let adsstItem = '('+tr.messages.noData+')';

    data.forEach((item) => {
        if (item[0] === adsst) {
            adsstItem = item[1];
        }
    });

    return (
      <td>{ adsstItem }</td>
  )
};

export default AdsstItem;