import React from 'react'
import { Card } from 'semantic-ui-react'
import data from './data2.js'
import './List.css'

const divStyle = {
  margin: '5px',
  border: '2px solid grey',
  padding: '2px 5px',
  'background-color': '#f9f9fa'
  // height:'225px'
};
const spanHeaderStyle = {
  fontSize: '15px',
  fontWeight: 'bold',
  float: 'left',
  width: "300px",
  padding: '0px 5px'
};

const summaryStyle = {
  fontSize: '15px',
  fontWeight: 'bold',
  padding: '5px 5px 5px 12px'
};

const spanBodyStyle = {
  fontSize: '15px',
  textAlign: 'left',
};

const divtd = {
  width: '150 px',
  float: 'left',
  display: 'inline'
}

const genDiv = {
  display: 'block',
  padding: '0px 0px 12px'
}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[],
          DataisLoaded: false
        };
      }
      componentDidMount() {
        fetch("v1/artifactory/images",{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    
        })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

      render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h2> Loading data... Pleses wait some time! </h2> </div> ;
           // console.log(items)
        return (
            <div>
              {data.map(dt => {
                //console.log(typeof Object.entries(dt[Object.keys(dt)[0]].latest.Labels!=null?dt[Object.keys(dt)[0]].latest.Labels:{}))
                let labels = Object.entries(dt[Object.keys(dt)[0]].latest.Labels!=null?dt[Object.keys(dt)[0]].latest.Labels:{})
                return (
                  <div style={divStyle}>
                    <div style={genDiv}> <div style={spanHeaderStyle}>Image:</div><div style={spanBodyStyle}>{Object.keys(dt)[0]}</div></div>
                    <div style={genDiv}> <div style={spanHeaderStyle}>Tag:</div><div style={spanBodyStyle}>{dt[Object.keys(dt)[0]].latest.Tag === "" ? "N/A" : dt[Object.keys(dt)[0]].latest.Tag}</div></div>
                    <div style={genDiv}> <div style={spanHeaderStyle}>Name:</div><div style={spanBodyStyle}>{dt[Object.keys(dt)[0]].latest.Name === "" ? "N/A" : dt[Object.keys(dt)[0]].latest.Name}</div></div>
                    <div style={genDiv}> <div style={spanHeaderStyle}>Created:</div><div style={spanBodyStyle}>{dt[Object.keys(dt)[0]].latest.Created}</div></div>
                    <div style={genDiv}> <div style={spanHeaderStyle}>Architecture:</div><div style={spanBodyStyle}>{dt[Object.keys(dt)[0]].latest.Architecture === "" ? "N/A" : dt[Object.keys(dt)[0]].latest.Architecture}</div></div>
                    <div style={genDiv}> <div style={spanHeaderStyle}>Variant:</div><div style={spanBodyStyle}>{dt[Object.keys(dt)[0]].latest.Variant === "" ? "N/A" : dt[Object.keys(dt)[0]].latest.Variant}</div></div>
                    <div style={genDiv}> <div style={spanHeaderStyle}>OS:</div><div style={spanBodyStyle}>{dt[Object.keys(dt)[0]].latest.Os === "" ? "N/A" : dt[Object.keys(dt)[0]].latest.Os}</div></div>
                    <div style={genDiv}> <div style={spanHeaderStyle}>Author:</div><div style={spanBodyStyle}>{dt[Object.keys(dt)[0]].latest.Author === "" ? "N/A" : dt[Object.keys(dt)[0]].latest.Author}</div></div>
                    
                    <details>
                      <summary style={summaryStyle}>labels</summary>
                      {
                        labels.map(lbl => {
                          if(labels!=null)
                          return (
                            <div style={genDiv}> <div style={spanHeaderStyle}>{lbl[0]}</div><div style={spanBodyStyle}>{lbl[1] === "" ? "N/A" : lbl[1]}</div></div>
                          )
                        })
                      }
                    </details>
                    <details>
                      <summary style={summaryStyle}>History</summary>
                      {
                        dt[Object.keys(dt)[0]].latest.History.map(history => {
                          return (
                            <div class="historyBodyStyle" >
                              <span>{history === "" ? "N/A" : history}</span>
                            </div>
                          )
                        })
                      }
                    </details>
                  </div>
                )
              })
              }
            </div>
          );
      }
}

export default List;