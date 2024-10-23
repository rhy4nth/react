
import PackageList from './components/PackageList.jsx';
import './App.css';
 
const App = () => {
  const packages = [
    { City: 'Rotterdam', OrderId: '23423-92443', Status: 'ON THE WAY' },
    { City: 'Amsterdam', OrderId: '45645-34343', Status: 'RECEIVED' },
    { City: 'Eindhoven', OrderId: '56756-53434', Status: 'RECEIVED' },
    { City: 'Barcelona', OrderId: '45645-74533', Status: 'RECEIVED' },
    { City: 'Paris', OrderId: '13453-23466', Status: 'ON THE WAY' },
  ];
 
  return (
    <div >
      <div>
        <h2>Delivery Tracking</h2>
        {Package.map((pkg, index) => (
          <DeliveryCard key={index} City={pkg.City} OrderId={pkg.OrderId} Status={pkg.Status} />
        ))}
      </div>
  
    </div>
  );
};
 
export default App;
 