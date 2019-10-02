import React from "react";

const AdsstItem = ({ adsst, data }) => {
    let adsstItem = '(нет данных)';

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