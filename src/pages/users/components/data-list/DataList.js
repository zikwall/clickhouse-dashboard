import React from 'react';

const DataList = ({ totalUsersData, getDailyDverage }) => {
  return(
      <ul className="list-group list-group-small list-group-flush">
          <li className="list-group-item d-flex px-3">
              <span className="text-semibold text-fiord-blue">Общее количество</span>
              <span className="ml-auto text-right text-semibold text-reagent-gray">
                                        { totalUsersData }
                                    </span>
          </li>
          <li className="list-group-item d-flex px-3">
              <span className="text-semibold text-fiord-blue">Среднедневная аудитория</span>
              <span className="ml-auto text-right text-semibold text-reagent-gray">
                                        { getDailyDverage() }
                                    </span>
          </li>
      </ul>
  )
};

export default DataList;