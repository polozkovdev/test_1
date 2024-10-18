import classNames from "classnames";
import React from "react";
import SM from "./index.module.scss";
import { ITableWrapperProps } from "./ITableWrapperProps";
import Table from "./Table";

const TableWrapper: <Data>(
  props: ITableWrapperProps<Data> & React.HTMLAttributes<HTMLDivElement>,
) => React.ReactElement<ITableWrapperProps<Data>> = ({
  className = "",
  children,
}) => {
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
