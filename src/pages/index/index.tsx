import React from "react";
import { Button } from "antd";
import ToList from "./components/to-list";
import RightContent from "./components/right-content";
import AddModal from "./components/add-modal";
import type { PayloadOption } from "./types";
// import { auth,setAuth } from '~/utils/authority'
import { useLocalStorageState } from "ahooks";
import { formatDate } from "~/utils/date";

import "./index.less";

interface HeadProps {
  onClick: () => void;
}

function HeadPage(props: HeadProps) {
  return (
    <div className="head-page middle-flex" onClick={props.onClick}>
      <Button type="primary">添加日程</Button>
    </div>
  );
}

const Index: React.FC = () => {
  const [currentDate, updateDate] = useState(
    formatDate(new Date(), "YYYY-MM-DD")
  );
  const [auth, setAuth] = useLocalStorageState<PayloadOption[]>("peeeng-take", {
    defaultValue: [],
  });
  const [visible, updateVisible] = useState(false);
  const [payload, updatePayload] = useState<PayloadOption>({
    id: 0,
    name: "",
    date: currentDate,
    remark: "",
    status: 1,
  });
  const [takeData, updateTakeData] = useState(
    (auth || []).filter((it) => it.date === currentDate)
  );
  function onsubmit(e: PayloadOption) {
    let date = formatDate(e.date as string, "YYYY-MM-DD");
    if (e.id) {
      let newData = takeData.map((it) => {
        if (it.id === e.id) {
          return {
            ...it,
            ...e,
            date,
          };
        } else {
          return it;
        }
      });
      updateTakeData(newData);
      setAuth(newData);
    } else {
      let newData = [...takeData, { ...e, date, id: (auth || []).length + 1 }];
      updateTakeData(newData);
      setAuth(newData);
    }
  }
  function changeModal() {
    updateVisible(!visible);
  }
  function edit(item: PayloadOption) {
    updatePayload(item);
    changeModal();
  }
  function remove(item: PayloadOption) {
    let current = (auth || []).findIndex((it) => it.id == item.id);
    let newData = [...takeData];
    newData[current].status = 3;
    updateTakeData(newData);
    setAuth(newData);
  }
  function select(date: string) {
    updateDate(date);
    updateTakeData((auth || []).filter((it) => it.date === date));
  }
  return (
    <div className="index-page flex">
      <div className="left-date">
        <HeadPage onClick={() => updateVisible(true)} />
        <ToList
          select={(date: string) => select(date)}
          date={currentDate}
          list={auth || []}
        />
      </div>
      <RightContent
        edit={(e: PayloadOption) => edit(e)}
        remove={(e: PayloadOption) => remove(e)}
        date={currentDate}
        takeData={takeData}
        open={() => changeModal()}
      />
      <AddModal
        visible={visible}
        payload={payload}
        onSubmit={(e: PayloadOption) => onsubmit(e)}
        onClose={() => updateVisible(false)}
      />
    </div>
  );
};

export default Index;
