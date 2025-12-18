import monitors from "../Pages/Monitor/MonitorData";
import officelaptops from "../Pages/OfficeLaptop/OfficeData";
import laptops from "../Pages/Gaminglaptop/GamingData";

// later: antivirus, accessories

const allProducts = [
  ...monitors.map(p => ({ ...p, category: "monitor" })),
  ...laptops.map(p => ({ ...p, category: "laptop" })),
   ...officelaptops.map(p => ({ ...p, category: "officelaptop" })),
];

export default allProducts;
