// import { Modal } from "antd";
import { Button } from "antd";
import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  useCallback,
} from "react";
import "./App.css";
import AntdModal from "./components/AntdModal/AntdModal";
// import ButtonFilter from "./components/buttonFilter/ButtonFilter";
import ButtonFilterAll from "./components/buttonFiltersAll/ButtonFilterAll";
// import ButtonMoreOptions from "./components/buttonMoreOption/ButtonMoreOptions";
import ButtonOptions from "./components/myButton/ButtonOptions";
import PopoverAnt from "./components/PopoverAnt/PopoverAnt";
import SearchBar from "./components/searchBar/SearchBar";
import ShowChoice from "./components/showChoice/ShowChoice";
import TabsAntd from "./components/TabsAntd/TabsAntd";
import Temp from "./components/temp";
import Test from "./components/test/Test";
import TooltipAntd from "./components/Tooltip/Tooltip";

export const MyContext = createContext();

function App() {
  const carArray = ["car1", "car2", "car3", "car4", "c5ar", "car6"];
  const dataFuel = ["petrol", "electric", "ron92", "ron95", "diesel"];
  const dataVes = [
    "A1(-$25,000)",
    "A2(-$15,000)",
    "B($0)",
    "C1(+$15,000)",
    "C2(+$25,000)",
  ];
  const dataMore = ["Power Output", "Range", "Vehicle Purpose"];
  const dataNameOutSide = [
    "Engine Capacity",
    "Fuel Consumption",
    "Fuel Type",
    "Power Output",
    "Range",
    "Vehicle Purpose",
  ];

  const a = Test({ raisePrice: 20 });
  console.log("aaa", a);

  let [price, setPrice] = useState([0, 100]);
  let [depreciation, setDepreciation] = useState([0, 100]);
  let [monthlyInstalment, setMonthlyInstalment] = useState([0, 100]);
  let [engine, setEngine] = useState([0, 100]);
  let [consumption, setConsumption] = useState([0, 100]);
  let [powerMore, setPowerMore] = useState([0, 100]);
  let [rangeMore, setRangeMore] = useState([0, 100]);
  const [selectedCar, setSelectedCar] = useState({});
  const [selectedFuel, setSelectedFuel] = useState({});
  const [selectPassenger, setSelectPassenger] = useState({});
  const [choiceCommercial, setChoiceCommercial] = useState({});

  const [ves, setVes] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const carPlate = "SV2872";
  const arrayCarPlate = carPlate.split("");

  const characterInArray = arrayCarPlate.filter((item) => {
    if (isNaN(item)) {
      return item;
    }
  });
  const numberInArray = arrayCarPlate.filter((item) => {
    if (!isNaN(item)) {
      return item;
    }
  });
  const firstNumber = numberInArray[numberInArray.length - 4] || 0;
  const secondNumber = numberInArray[numberInArray.length - 3] || 0;
  const thirdNumber = numberInArray[numberInArray.length - 2] || 0;
  const fourNumber = numberInArray[numberInArray.length - 1];

  let data = [];

  for (let i = 0; i < characterInArray.length; i++) {
    data.push(carPlate.charCodeAt(i) - 64);
  }
  let firstCharacter = null;
  let lastCharacter = null;
  if (data.length === 3) {
    firstCharacter = Number(data[1]);
    lastCharacter = Number(data[2]);
  }
  if (data.length === 2) {
    firstCharacter = Number(data[0]);
    lastCharacter = Number(data[1]);
  }
  if (data.length === 1) {
    lastCharacter = Number(data[0]);
    firstCharacter = 0;
  }
  const total =
    firstCharacter * 9 +
    lastCharacter * 4 +
    firstNumber * 5 +
    secondNumber * 4 +
    thirdNumber * 3 +
    fourNumber * 2;
  const divided = total % 19;
  const validate = [
    "A",
    "Z",
    "Y",
    "X",
    "U",
    "T",
    "S",
    "R",
    "P",
    "M",
    "L",
    "K",
    "J",
    "H",
    "G",
    "E",
    "D",
    "C",
    "B",
  ];
  const findNumber = validate[divided];
  const exactCarPlate = `${carPlate}${findNumber}`;

  return (
    <React.Fragment>
      <MyContext.Provider
        value={{
          price,
          selectedCar,
          selectedFuel,
          depreciation,
          monthlyInstalment,
          dataFuel,
          dataVes,
          carArray,
          engine,
          consumption,
          powerMore,
          rangeMore,
          ves,
          selectPassenger,
          choiceCommercial,
          setPrice,
          setSelectedCar,
          setSelectedFuel,
          setDepreciation,
          setMonthlyInstalment,
          setEngine,
          setConsumption,
          setPowerMore,
          setRangeMore,
          setVes,
          setSelectPassenger,
          setChoiceCommercial,
        }}
      >
        <div className="App">
          <div className="header_search">
            <div className="wrap_all_header">
              <SearchBar />
              <div className="wrap_all_button">
                <div className="wrap_button">
                  <Test />
                  <ButtonFilterAll />
                </div>
              </div>
              <ShowChoice />
            </div>
          </div>
        </div>
      </MyContext.Provider>
      <button onClick={handleShowModal}>hahaha</button>
      <AntdModal
        visible={showModal}
        title="Basic Modal"
        closeIcon={true}
        // footer={false}
        onCancel={handleShowModal}
      >
        <div>1231231</div>
      </AntdModal>
      <TabsAntd activeDefaultKey="4" />
      <div style={{ marginTop: 0 }}>
        <TooltipAntd
          trigger="click"
          title="dasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdadadasdasdadasdada"
          placement="left"
        >
          <button>123123123131212312312313121231231231312</button>
        </TooltipAntd>
        {/* <PopoverAnt
          visible={false}
          title="this is my Title"
          placement="left"
          trigger="click"
          overlayClassName="class-over-lay"
          overlayInnerStyle={{ backgroundColor: "blue" }}
          overlayStyle={{ backgroundColor: "blue", width: 300 }}
          mouseLeaveDelay={2}
          defaultVisible={false}
          mouseEnterDelay={3}
          onVisibleChange={() => console.log(123)}
          color="red"
        >
          <button>123</button>
        </PopoverAnt> */}
      </div>
      <div style={{ marginLeft: 500 }}>
        <Temp />
      </div>
    </React.Fragment>
  );
}

export default App;
