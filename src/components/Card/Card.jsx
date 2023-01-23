import React, { useState } from 'react';
import style from './Card.module.sass';
import cat from '../../img/cat.webp';
import cn from 'classnames';

export const Card = ({
                       altText,
                       flavor,
                       isDisabled,
                       portion,
                       packageWeight,
                       present,
                     }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [buy, setBuy] = useState(true);
  const [catConsent, setCatConsent] = useState(true);

  const handleClick = () => {
    setIsSelected(!isSelected);
    setBuy(!buy);
    setIsHover(false);
    if (isDisabled) {
      setIsSelected(false);
    } else if (!buy) {
      setCatConsent(true);
    }
  };
  const onMouseLeave = () => {
    if (isDisabled) {
      setCatConsent(true);
    } else if (!buy) {
      setCatConsent(false);
    }
    setIsHover(false);
  };
  const onMouseEnter = () => {
    if (isDisabled) {
      setIsHover(false);
    } else if (!isSelected) {
      setIsHover(true);
    }
  };

  return (
    <div className={style.card}>
      <div
        onClick={handleClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        className={style.card__container}>
        <div className={style.card__header}>
          <div className={cn(style.card__grad, {
            [style.isSelected]: isSelected,
            [style.isDisabled]: isDisabled,
          })}>
          </div>
          <div className={cn(style.card__memo, {
            [style.isSelected]: isSelected,
            [style.isDisabled]: isDisabled,
          })}>
            {catConsent
              ? <span className={style.card__memoTitle}>Сказочное заморское яство</span>
              : <span className={style.card__memoTitle_active}>Котэ не одобряет?</span>
            }
          </div>
        </div>
        <div className={cn(style.card__mainText, {
          [style.isSelected]: isSelected,
          [style.isDisabled]: isDisabled,
        })}>
          <span className={style.card__title}>Нямушка</span>
          <span className={style.card__subtitle}>{flavor}</span>
          <ul className={style.card__list}>
            <li className={style.card__item}>{portion}</li>
            <li className={style.card__item}>{present}</li>
          </ul>
          <img className={style.card__img} src={cat} alt="img"/>
          <div className={cn(style.card__circle, {
            [style.isSelected]: isSelected,
            [style.isDisabled]: isDisabled,
            [style.isHover]: isHover,
          })}>
            <span className={style.card__weight}>{packageWeight}</span>
            <span className={style.card__kg}>кг</span>
          </div>
        </div>
      </div>
      <div className={style.card__signature}>
        {
          (isDisabled &&
            <span className={style.card__disabledCard}>{`Печалька ${flavor} закончился.`}</span>)
          ||
          (buy &&
            <>
              <span className={style.card__altText}>Чего сидишь? Порадуй котэ, </span>
              <span onClick={handleClick} className={style.card__buy}>купи.</span>
            </>)
          ||
          <span className={style.card__altText}>{altText}</span>
        }
      </div >
    </div>
  );
};