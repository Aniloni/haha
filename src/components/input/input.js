import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './input.scss';

const Input = ({
  id, className, label, error, ...attrs
}) => {
  const [isFocused, setIsFocused] = useState(false); // Состояние фокуса
  const [hasValue, setHasValue] = useState(!!attrs.value); // Проверка наличия значения

  useEffect(() => {
    // Обновляем состояние, если значение в props меняется извне
    setHasValue(!!attrs.value);
  }, [attrs.value]);

  const classes = classNames(
    'input',
    className,
    { error },
  );

  const labelClasses = classNames('inputLabel', {
    'inputLabel--active': isFocused || hasValue, // Если фокус или есть текст
  });

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(!!e.target.value); // Проверка наличия текста при потере фокуса
  };

  return (
    <div className="inputWrapper">
      <div className="labelsWrapper">
        {attrs.required && <span className="inputRequired">Required</span>}
      </div>
      <input
        name={id}
        id={id}
        className={classes}
        {...attrs}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur} // Обработчик для проверки текста
      />
      {label && <label htmlFor={id} className={labelClasses}>{label}</label>}
      {error && <span className="inputError">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string, // добавим value как prop
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
  value: '', // по умолчанию value пусто
};

export default Input;
