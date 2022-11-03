import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./FormCard.css";
import { useState } from 'react';
function FormCard() {
    
  const [radioValue, setRadioValue] = useState();
  console.log(radioValue)

  const radios = ["1-20","21-50","51-200","201-500","500+"];
  return (
    <div className='MainCard'>
        <div className='HeaderContent'>
            <div className='HeadingLogo'>
                <div className='RectangleOneLogo' />
                <div className='RectangleTwoLogo' />
                <div className='RectangleThreeLogo' />
            </div>
            <h3 style={{color:"#212121"}}>
                It’s a delight to have you onboard
            </h3>
            <div className='HelperText'>
                Help us know you better.<br/>
                (This is how we optimize Wobot as per your business needs)
            </div>
        </div>
        <div className='FormContent'>
        <Form>
            <Form.Group className="mb-1" controlId="formBasicCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="e.g. Example Inc" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicIndustryType">
                <Form.Label>Industry</Form.Label>
                <Form.Select>
                    <option>Select</option>
                    <option>Retail</option>
                    <option>IT Services</option>
                </Form.Select>
            </Form.Group>
            <Form.Label>Company Size</Form.Label><br/>
                {radios.map((radio,idx)=>(
                    <button
                    key={idx}
                    value={radio}
                    className={radioValue===radio ? "CompanySizeButton Selected" : "CompanySizeButton"}
                    onClick={(e)=>{e.preventDefault();setRadioValue(e.target.value)}}>{radio}</button>
                ))}
            <Button variant="primary" type="submit"className="mt-4 SubmitButton">
                Submit
            </Button>
            </Form>
        </div>
        
    </div>
  )
}

export default FormCard