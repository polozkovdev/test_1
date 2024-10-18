import React, { useState } from "react";
import SM from "./index.module.scss";
import classNames from "classnames";

interface IProgressProps {
  IsInWork: boolean;
}

const Progress: React.FC<IProgressProps> = ({ IsInWork }) => {
  const [isActive, setIsActive] = useState(IsInWork);
  const onClickHandler = () => setIsActive(!isActive);
  const classname = classNames({
    [SM.Radio]: true,
    [SM.RadioActive]: isActive,
  });
  return (
    <div className={SM.Progress}>
      <div className={SM.Checkbox} onClick={onClickHandler}>
        {isActive && (
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <path
              d="M2 6.63158L8.70968 13L18 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div onClick={onClickHandler} className={classname} />
    </div>
  );
};

export default Progress;
