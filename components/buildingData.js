import Building from "./Building.js";
import apartmentDataArray from "./apartmentData.js";

const building1 = new Building(1, "11147 S Emerald ave", apartmentDataArray);

const building2 = new Building(2, "8956 S Troop", apartmentDataArray);

const buildingDataArray = [building1, building2];

export default buildingDataArray;
