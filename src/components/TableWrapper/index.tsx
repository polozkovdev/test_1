import classNames from "classnames";
import React from "react";
import SM from "./index.module.scss";
import Table from "./Table";

const TableWrapper: (
  props: React.HTMLAttributes<HTMLDivElement>,
) => React.ReactElement = ({ className = "", children }) => {
  const tableWrapperClass = classNames(className, {
    [SM.TableWrapper]: true,
  });
  const bodyClass = classNames(className, {
    [SM.TableWrapperBody]: true,
  });
  return (
    <div className={tableWrapperClass}>
      <Table className={bodyClass}>{children}</Table>
    </div>
  );
};

export default TableWrapper;
