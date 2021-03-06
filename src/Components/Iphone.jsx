import React from 'react';
import axios from 'axios';
import { Layout, Menu } from 'antd';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
const { Header, Footer, Sider, Content } = Layout;
class Iphone extends React.Component {
  state = {
    newsList: [],
    expanded : false,
    setExpanded: true
    };

    componentDidMount() {
      axios.get("https://avdeevaelena.github.io/json/spisokZayavok.json")
      .then(res => {
        const newsList = res.data;
        this.setState({ newsList });
      }) 
      }

      render() {  
        const optionNewsList = this.state.newsList.map(s => {
          return (  
             <option  value={10} bordered={true}>
                {s.content}  {s.date}
               </option>
          );
        });
        
          return (
          <div style ={{backgraund:"green", marginTop:60, width: "100%",  height: "100%", display:"flex"}}>
           <div style ={{ marginBottom:60}}>
             <Typography variant="h6" noWrap style ={{ marginBotton:60}}>
                Новости
            </Typography>
            </div>
              <Select style ={{ marginTop:60, width: "90%",  height: "100%"}}>
                <option aria-label="None" value="" />
                {optionNewsList}
              </Select>
              
          </div>
          )
    }
     }
   export default Iphone;