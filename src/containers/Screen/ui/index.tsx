import TableWrapper from "../../../components/TableWrapper";
import { data } from "../data.ts";
import Progress from "../Progress";
import { convertFormatDate } from "../../../utils";
import SM from "./index.module.scss";

const Screen = () => {
  const header = [
    "ID-заявки",
    "Логин",
    "%",
    "Профит",
    "Баланс",
    "Дата и время",
    "Взять в работу",
  ];
  const currency = (sum: number) =>
    new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(sum);
  return (
    <TableWrapper>
      <thead>
        <tr className={SM.HeadRow}>
          {header.map((item) => (
            <th key={item}>
              <div>{item}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          const Login = item.Login.slice(0, 5) + "****";
          return (
            <tr key={item.ID} className={SM.Row}>
              <td>{item.ID}</td>
              <td>{Login}</td>
              <td>{`${item.Percent} %`}</td>
              <td>{currency(item.Profit)}</td>
              <td>{currency(item.Balance)}</td>
              <td>{convertFormatDate(item.Date)}</td>
              <td>
                <Progress IsInWork={item.IsInWork} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Screen;
