import React from 'react'
import { Card } from 'semantic-ui-react'
import data from './data3.js'
import './List.css'

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
                    items: Object.entries(json),
                    DataisLoaded: true
                });
                
            })
    }

      render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h3> Loading data...Pleses wait some time.If it does not load data, ensure that the backend service is working;refresh this page</h3> </div> ;
            //console.log(items)
        return (
            <div>
              {items.map((dt) => {
                console.log(dt[0])
                //console.log(typeof Object.entries(dt[Object.keys(dt)[0]].latest.Labels!=null?dt[Object.keys(dt)[0]].latest.Labels:{}))
                let labels = Object.entries(dt[1].latest.Labels!=null?dt[Object.keys(dt)[1]].latest.Labels:{})
                return (
                  <div class="divStyle">
                    <div class="genDiv"> <div class="spanHeaderStyle">Image:</div><div class="spanBodyStyle">{dt[0]}</div></div>
                     <div class="genDiv"> <div class="spanHeaderStyle">Tag:</div><div class="spanBodyStyle">{dt[1].latest.Tag === "" ? "N/A" : dt[1].latest.Tag}</div></div>
                    <div class="genDiv"> <div class="spanHeaderStyle">Name:</div><div class="spanBodyStyle">{dt[1].latest.Name === "" ? "N/A" : dt[1].latest.Name}</div></div>
                    <div class="genDiv"> <div class="spanHeaderStyle">Created:</div><div class="spanBodyStyle">{dt[1].latest.Created}</div></div>
                    <div class="genDiv"> <div class="spanHeaderStyle">Architecture:</div><div class="spanBodyStyle">{dt[1].latest.Architecture === "" ? "N/A" : dt[1].latest.Architecture}</div></div>
                    <div class="genDiv"> <div class="spanHeaderStyle">Variant:</div><div class="spanBodyStyle">{dt[1].latest.Variant === "" ? "N/A" : dt[1].latest.Variant}</div></div>
                    <div class="genDiv"> <div class="spanHeaderStyle">OS:</div><div class="spanBodyStyle">{dt[1].latest.Os === "" ? "N/A" : dt[1].latest.Os}</div></div>
                    <div class="genDiv"> <div class="spanHeaderStyle">Author:</div><div class="spanBodyStyle">{dt[1].latest.Author === "" ? "N/A" : dt[1].latest.Author}</div></div>
                    <details>
                      <summary class="summaryStyle">labels</summary>
                      {
                        labels.map(lbl => {
                          if(labels!=null)
                          return (
                            <div class="genDiv"> <div class="spanHeaderStyle">{lbl[0]}</div><div class="spanBodyStyle">{lbl[1] === "" ? "N/A" : lbl[1]}</div></div>
                          )
                        })
                      }
                    </details>
                    <details>
                      <summary  class="summaryStyle">History</summary>
                      {
                        dt[1].latest.History.map(history => {
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