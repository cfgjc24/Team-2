import React from 'react'
import Module from '../components/module/module'
import { useState, useEffect } from 'react'
import './Student.css'
import Navbar from '../components/navbar'
function Student() {
  // array 1- 8 for mapping
  // each index 
  const[ modules, setModules] = useState([])
 
  useEffect(() => {
    setModules([
      { id: 1, link: "https://www.canva.com/design/DAEqdhQurq8/YZFuXmX70XK7WZWIpLaEEg/edit", description: "Personal Finance" },
      {id: 2, link: "https://www.canva.com/design/DAEpi95ye1M/HBcbIaVuniYDgMZO0ukLbQ/edit", description: "What is a Stock?"},
      {id: 3, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEpi6tckaE%2FvYF9Z9izUbT2aOKtS6_xZg%2Fview%3Futm_content%3DDAEpi6tckaE%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Deditor&sa=D&sntz=1&usg=AOvVaw3bPouLMjwNdsy97vHGs09b", description: "Volatility and Diversification"},
      {id: 4, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEqdo4lTSg%2FddYn_uWqnVunQPcSqo9aRg%2Fview%3Futm_content%3DDAEqdo4lTSg%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Deditor&sa=D&sntz=1&usg=AOvVaw3g9r_2R5QOEd-ror7kRF-f", description: "What is a Bond?"},
      {id: 5, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEp0bQDqJE%2F2HzXkanZm9i3-s0xX7BrxQ%2Fedit%3Futm_content%3DDAEp0bQDqJE%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink2%26utm_source%3Dsharebutton&sa=D&sntz=1&usg=AOvVaw2hOGWqgFK5j_buXxGzdGL8", description: "Mutual Funds/ETFs"},
      {id: 6, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEqdsGCfIs%2FrrJwRs1BnTMxy5sWjWqXXg%2Fedit%3Futm_content%3DDAEqdsGCfIs%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink2%26utm_source%3Dsharebutton&sa=D&sntz=1&usg=AOvVaw0U6oQykX1bxcXutTjmjSWb", description: "Compound Interest/Dollar-Cost Averaging"},
      {id: 7, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEqdsGCfIs%2FrrJwRs1BnTMxy5sWjWqXXg%2Fedit%3Futm_content%3DDAEqdsGCfIs%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink2%26utm_source%3Dsharebutton&sa=D&sntz=1&usg=AOvVaw0U6oQykX1bxcXutTjmjSWb", description: "Personal Finance II"},
      {id: 8, link: '', description: "Capstone Project"},
    ]);
  }, []);
  


  return (
    <><div><Navbar/>
      <div className="StudentClass">
        <h1>Student Portal</h1>
        <h3 id="className">Class is not in session</h3>
        <div className="grid">
          {modules.map((module) => (
            <div className="stuff" key={module.id}>
              <Module 
                name={module.id}
                url={module.link}
                description={module.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Student;