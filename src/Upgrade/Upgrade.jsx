import React from 'react';
import "./Upgrade.css"
import { useSelector } from 'react-redux';

const PremiumUpgradeComponent = () => {
    const Users = useSelector(state => state.persisitedReducer.loginUser)


    const Payment = () =>{
        const refVal = "colin"+ Math.random() * 1000;
        window.Korapay.initialize({
          key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
          reference: `${refVal}`,
          amount: 20000, 
          currency: "NGN",
          customer: {
            name: Users.schoolName,
            email: Users.schoolEmail
          },
          notification_url: "https://example.com/webhook"
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
      <button className="upgrade-button" onClick={Payment}>Upgrade Now</button>
    </div>
  );
};

export default PremiumUpgradeComponent;
