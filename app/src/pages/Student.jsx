import React from 'react'
import Module from '../components/module/module'
import { useState, useEffect } from 'react'
import './Student.css'

function Student() {
  // array 1- 8 for mapping
  // each index 
  const[ modules, setModules] = useState([])
 
  useEffect(() => {
    // setModules([1, 2, 3, 4, 5, 6, 7, 8])
    setModules([
      {id: 1, link: "https://www.canva.com/design/DAEqdhQurq8/YZFuXmX70XK7WZWIpLaEEg/edit"},
      {id: 2, link: "https://www.canva.com/design/DAEpi95ye1M/HBcbIaVuniYDgMZO0ukLbQ/edit"},
      {id: 3, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEpi6tckaE%2FvYF9Z9izUbT2aOKtS6_xZg%2Fview%3Futm_content%3DDAEpi6tckaE%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Deditor&sa=D&sntz=1&usg=AOvVaw3bPouLMjwNdsy97vHGs09b"},
      {id: 4, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEqdo4lTSg%2FddYn_uWqnVunQPcSqo9aRg%2Fview%3Futm_content%3DDAEqdo4lTSg%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Deditor&sa=D&sntz=1&usg=AOvVaw3g9r_2R5QOEd-ror7kRF-f"},
      {id: 5, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEp0bQDqJE%2F2HzXkanZm9i3-s0xX7BrxQ%2Fedit%3Futm_content%3DDAEp0bQDqJE%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink2%26utm_source%3Dsharebutton&sa=D&sntz=1&usg=AOvVaw2hOGWqgFK5j_buXxGzdGL8"},
      {id: 6, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEqdsGCfIs%2FrrJwRs1BnTMxy5sWjWqXXg%2Fedit%3Futm_content%3DDAEqdsGCfIs%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink2%26utm_source%3Dsharebutton&sa=D&sntz=1&usg=AOvVaw0U6oQykX1bxcXutTjmjSWb"},
      {id: 7, link: "https://www.google.com/url?q=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAEqdsGCfIs%2FrrJwRs1BnTMxy5sWjWqXXg%2Fedit%3Futm_content%3DDAEqdsGCfIs%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink2%26utm_source%3Dsharebutton&sa=D&sntz=1&usg=AOvVaw0U6oQykX1bxcXutTjmjSWb"},
      {id: 8, link: ''}
    ])
  }, []);


  return (
    <>
      <div className="StudentClass">
        <h1>Student Portal</h1>
        <h3 id = "className">Class is not in session</h3>
        <div className="grid">
          {modules.map((key, index) => (
            <div className="stuff">
              <Module
              name = {key.id}
              url = {key.link}
              />
            </div>
          )
          )}
        </div>
      </div>
    </>
  )
}

export default Student