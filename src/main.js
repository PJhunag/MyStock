import React, { Component } from 'react';
import Stock from './stock'; //股票區塊
import Account from './account'; //帳號區塊

//material-ui
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import HistoryIcon from '@material-ui/icons/History';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
 
//Module variable
const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
});

class Main extends Component {
  constructor() {
    super()
    this.state = {
      open: true,
      open2: false, 
      open3: false,
      choice_name: 'getStockPrices', //stockPrices,tradingVolume
      choice_desc: '股票收盤價紀錄'
    }
  }

  //下拉展開(股票資訊)
  expand_option = () => {
    this.setState(state => ({ open: !state.open }));
  };

  //下拉展開(我的最愛)
  expand_option2 = () => {
    this.setState(state => ({ open2: !state.open2 }));
  };

  //下拉展開(瀏覽紀錄)
  expand_option3 = () => {
    this.setState(state => ({ open3: !state.open3 }));
  };

  handleChange_getStockPrices = () => {
    //呼叫並且刷新主要區塊(右下)
    this.setState(state => ({choice_name:'getStockPrices',choice_desc:'股票收盤價紀錄'}));

  }

  handleChange_getTradingVolume = () => {
    //呼叫並且刷新主要區塊(右下)
    this.setState(state => ({choice_name:'getTradingVolume',choice_desc:'股票成交量紀錄'}));
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className='top'>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                <font className='title' face="微軟正黑體" size="8"><b>股票查詢</b></font><font className='title' face="微軟正黑體" size="3"><b>T.H</b></font>
              </Typography>
              <Account />
            </Toolbar>
          </AppBar>
        </div>
        <div className='menu'>
          <ListItem button onClick={this.expand_option}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText inset primary="股票資訊查詢" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List className="sub_button" component="div" disablePadding>
              <ListItem button onClick={this.handleChange_getStockPrices}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText inset primary="收盤價歷史紀錄" />
              </ListItem>
            </List>
            <List className="sub_button" component="div" disablePadding>
              <ListItem button onClick={this.handleChange_getTradingVolume}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText inset primary="成交量歷史紀錄" />
              </ListItem>
            </List>
            <List className="sub_button" component="div" disablePadding>
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText inset primary="KD線查歷史紀錄" />
              </ListItem>
            </List>
            <List className="sub_button" component="div" disablePadding>
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <SearchIcon marginLeft="5%" />
                </ListItemIcon>
                <ListItemText inset primary="月營收歷史紀錄" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={this.expand_option2}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText inset primary="我的最愛" />
            {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
            <List className="sub_button" component="div" disablePadding>
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText inset primary="收藏清單" />
              </ListItem>
            </List>
            <List className="sub_button" component="div" disablePadding>
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText inset primary="待開發" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={this.expand_option3}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText inset primary="瀏覽紀錄" />
            {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
            <List className="sub_button" component="div" disablePadding>
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText inset primary="待開發" />
              </ListItem>
            </List>
            <List className="sub_button" component="div" disablePadding>
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText inset primary="待開發" />
              </ListItem>
            </List>
          </Collapse>
        </div>

        <Stock name={this.state.choice_name} desc={this.state.choice_desc} click={this.call} />

      </div>
    )
  }
}
export default withStyles(styles)(Main); 