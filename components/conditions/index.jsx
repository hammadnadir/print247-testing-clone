import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function Conditions() {
  
  const { conditionData } = useSelector((state) => state.condition);

  const parsedData = conditionData?.data?.data ? JSON.parse(conditionData.data.data): [];

  return (
    <div className="condition_main">
      
      <Container>
        <div className="main_condition">
          <div className='inner_condition'>
            <div className='headcondition'>
              <h1>Terms & Condition</h1>
              <div>
                <div className='main_sub_data'>
                  {parsedData?.map((item, index) => {
                    return (
                      <div className='bottom_subdata' key={index}>
                        <div className='headsubdata'>
                          <h2>{item.title}</h2>
                          <p dangerouslySetInnerHTML={{ __html: item.description }} ></p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Conditions;
