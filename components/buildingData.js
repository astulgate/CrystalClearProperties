import Building from "./Building.js";
import apartmentDataArray from "./apartmentData.js";

const building1 = new Building(
  1,
  "11147 S Emerald ave",
  apartmentDataArray,
  "../ccManagement/images/11147.jpg"
);

const building2 = new Building(
  2,
  "8956 S Troop",
  apartmentDataArray,
  "../ccManagement/images/8956.jpg"
);

const building3 = new Building(
  3,
  "1306 W 90th",
  apartmentDataArray,
  "../ccManagement/images/1306.jpg"
);

const buildingDataArray = [building1, building2, building3];

export default buildingDataArray;
