

import { TextField ,Button} from '@mui/material';
// import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import './App.css'
import { useState } from 'react';


function App() {
  const [amt, setAmt] = useState("");
  const [interest, setInterest] = useState("");
  const [year, setYear] = useState("");

  console.log(amt,interest,year);
  
// to store and check data valid/invalid
const [isInvalidPrinciple, setIsInvalidPrinciple] = useState(false);
  const [isInvalidInterest, setIsInvalidInterest] = useState(false);
  const [isInvalidYear, setIsInvalidYear] = useState(false);

  const [si,setSi]=useState(0)


  const validRegex=/^[0-9]*.?[0-9]+$/
  // regular exp----test function to check

  const validateInput=(e)=>{
    console.log(e);

    // to get value
    const {name, value}=e.target
    console.log(name, value);
    
// store value
    if(name=='amount'){
      setAmt(value)
    }
    else if(name=='interest'){
      setInterest(value)
    }
    else{
      setYear(value)
    }



    if(validRegex.test(value) || value==""){
      if(name=='amount'){
        setIsInvalidPrinciple(false);
      }
      else if(name=='interest'){
        setIsInvalidInterest(false);
      }
      else{
        setIsInvalidYear(false);
      }
      
    }
    else{
      if(name=='amount'){
        setIsInvalidPrinciple(true);
      }
      else if(name=='interest'){
        setIsInvalidInterest(true);
      }  
      else{
        setIsInvalidYear(true);
      }
    }

    // if (validRegex.test(value) || value == "") {
    //   if (name == 'amount') {
    //     setIsInvalidPrinciple(false);
    //   } else if (name == 'interest') {
    //     setIsInvalidInterest(false);
    //   } else if (name == 'years') { // Fix here
    //     setIsInvalidYear(false);
    //   }
      
    // } else {
    //   if (name == 'amount') {
    //     setIsInvalidPrinciple(true);
    //   } else if (name == 'interest') {
    //     setIsInvalidInterest(true);
    //   } else if (name == 'years') { // Fix here
    //     setIsInvalidYear(true);
    //   }
    // }
    
    

  }


  const handleCalculate=(e)=>{
      e.preventDefault()
      // prevent refresh

      console.log("simple interest");

      if(amt && interest && year){
        const si= (amt*interest*year)/100;
        setSi(si);
        console.log(si);
        
      }
      
  }

  const resetbtn=()=>{
    setAmt("")
    setInterest("")
    setYear("")
    setSi(0)
    isInvalidInterest(false)
    isInvalidPrinciple(false)
    isInvalidYear(false)
  }

  

  return (
    <>
    <div className="container-fluid"  style={{backgroundColor:'black',height:'100vh'}} >
    <div className="row">
      <div className=" col-sm-12 col-md-6 col-lg-4"  >
       
       
      </div>


      <div className="col-sm-12 col-md-6 col-lg-5" style={{backgroundColor:'white',height:'80vh',marginTop:'40px',borderRadius:'15px'}}>
        <div style={{marginLeft:'30px', color:'black'}}>
          <h1 style={{marginTop:'40px'}}>Simple Interest Calculator</h1>
          <h4>Calculate your simple interest easily</h4>
          <div style={{backgroundColor:'rgb(120, 160, 16)',height:'200px',width:'700px',marginTop:'40px',borderRadius:'18px'}}>
            <h1 style={{textAlign:'center',fontSize:'80px',paddingTop:'20px', color:'white'}}>₹ &nbsp;{si}</h1>
            <h4  style={{textAlign:'center',fontSize:'30px',color:'white'}}>Total simple interest</h4>

            {/* <i class="fa-solid fa-indian-rupee-sign" style="color: #ffffff;"></i> */}

          </div>

<TextField onChange={validateInput} value={amt || ""} id="amt" name='amount' label="Amount" variant="standard" style={{width:'600px',marginLeft:'40px',marginTop:'30px'}} />
{ isInvalidPrinciple&&
  <div style={{width:'600px',marginLeft:'40px',marginTop:'30px', color:'red'}}>Invalid Principle Amount</div>
}<TextField onChange={validateInput} value={interest || ""}  id="rate" name='interest' label="Interest" variant="standard" style={{width:'600px',marginLeft:'40px',marginTop:'30px'}} />
{isInvalidInterest&&
  <div style={{width:'600px',marginLeft:'40px',marginTop:'30px', color:'red'}}>Invalid rate of interest</div>
}
<TextField onChange={validateInput} value={year || ""}  id="year" name='years' label="Year" variant="standard" style={{width:'600px',marginLeft:'40px',marginTop:'30px'}} />
{isInvalidYear&&
  <div style={{width:'600px',marginLeft:'40px',marginTop:'30px', color:'red'}}>Invalid no.of Years</div>
}
<Stack direction="row" spacing={2}>
<Button type='submit' onClick={handleCalculate} disabled={isInvalidInterest || isInvalidPrinciple || isInvalidYear} variant="contained" style={{width:'280px',marginLeft:'40px',marginTop:'30px'}}>Calculate</Button>
<Button onClick={resetbtn}  variant="outlined" style={{width:'280px',marginLeft:'40px',marginTop:'30px',color:'black'}}>Reset</Button>
</Stack>




          

        </div>
        

      </div>
      <div className="col-sm-12 col-md-6 col-lg-3" >
        
      </div>
    </div>
  </div>
      
    </>
  )
}

export default App
