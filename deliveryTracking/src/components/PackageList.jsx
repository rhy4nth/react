
 
const PackageList = ({ City, OrderId, Status }) => {
  return (
    <div>
      <h4>Package from {City}</h4>
      <p>Order ID: {OrderId}</p>
      <span className={`Status ${Status.toLowerCase()}`}>{Status}</span>
    </div>
  );
};
 
export default PackageList;
 