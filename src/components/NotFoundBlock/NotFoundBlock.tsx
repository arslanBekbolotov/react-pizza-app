import React from 'react';
import  './NotFoundBlock.css';

const NotFoundBlock: React.FC = () => {
  return (
    <div className="root">
      <h1>
          Произошла ошибка
        <span>😕</span>
      </h1>
      <p className="description">
          К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.
      </p>
    </div>
  );
};

export default  NotFoundBlock;
