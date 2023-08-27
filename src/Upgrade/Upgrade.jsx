import React from 'react';
import "./Upgrade.css"
import { useSelector } from 'react-redux';

const PremiumUpgradeComponent = () => {
    const Users = useSelector(state => state.persisitedReducer.loginUser)
    console.log(Users , "this is user")
    


  
      function payKorapay() {
        let key = `key${Math.random()}`
        window.Korapay.initialize({
            key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
            reference: key,
            amount: 50000, 
            currency: "NGN",
            customer: {
              name: Users?.data?.data?.schoolName,
              email: Users?.data?.data?.schoolEmail
            },
            onClose: function () {
              // Handle when modal is closed
            },
            onSuccess: function (data) {
              // Handle when payment is successful
            },
            onFailed: function (data) {
              // Handle when payment fails
            }
            
        });
    }
  
    


  return (
    <div className="premium-upgrade-container">
      <h2>Upgrade to Premium!</h2>
      <p>Unlock amazing benefits by upgrading to our Premium plan:</p>
      <ul>
        <li>Access to exclusive content and features</li>
        <li>Ad-free browsing experience</li>
        <li>Priority customer support</li>
        <li>Early access to new features</li>
        <li>Unlimited downloads and streaming</li>
      </ul>
      <button className="upgrade-button" onClick={payKorapay}>Upgrade Now</button>
    </div>
  );
};

export default PremiumUpgradeComponent;
