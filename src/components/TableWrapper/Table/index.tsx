import classNames from "classnames";
import { ITableProps } from "./ITableProps";
import React, { useEffect, useRef, useState } from "react";
import SM from "./index.module.scss";

const Table: React.FC<ITableProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const tableRef = useRef<HTMLTableElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = (x?: number, y?: number) => {
      if (typeof x === "number" && typeof y === "number") {
        innerRef.current?.scroll(x, y);
        scrollbarRef.current?.scroll(x, y);
      }
    };
    innerRef.current?.addEventListener("scroll", () => {
      handleScroll(innerRef.current?.scrollLeft, innerRef.current?.scrollTop);
    });
    scrollbarRef.current?.addEventListener("scroll", () => {
      handleScroll(
        scrollbarRef.current?.scrollLeft,
        innerRef.current?.scrollTop,
      );
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const width = tableRef.current?.offsetWidth;
      if (typeof width === "number" && width !== scrollBarWidth) {
        setScrollBarWidth(width);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [scrollBarWidth, tableRef.current?.offsetWidth]);
  const tableClass = classNames(className, {
    [SM.Table]: true,
  });
  return (
    <div className={tableClass}>
      <div className={SM.scrollbar} ref={scrollbarRef}>
        <div
          className={SM.scrollbarInner}
          style={{ width: `${scrollBarWidth}px` }}
        />
      </div>
      <div ref={innerRef} className={SM.TableInner}>
        <table ref={tableRef}>{children}</table>
      </div>
    </div>
  );
};

export default Table;
