import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FeedbackIcon from '@material-ui/icons/Feedback';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { SidebarNav } from './components';
import { connect } from 'react-redux';
import { FileCopyOutlined, FormatBoldOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;
  const {user}=props.auth
  const classes = useStyles();

  const AdminPages = [
    {
      title: 'Form ',
      href: '/availableForm',
      icon: <FeedbackIcon />
    },
    {
      title: 'Account',
      href: '/account',
      icon: <AccountBoxIcon />
    },
  ];
  
  const UserPages = [
    {
      title: 'Form  Submission',
      href: '/form',
      icon: <AddBoxIcon />
    },
    {
      title: 'Account',
      href: '/account',
      icon: <AccountBoxIcon />
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        {
          user.type=='admin'?
          <SidebarNav
            className={classes.nav}
            pages={AdminPages}
          />:
          <SidebarNav
            className={classes.nav}
            pages={UserPages}
          />
        }
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};
const mapStateToProps=state=>({
  auth:state.auth
})
export default connect(mapStateToProps,null)(Sidebar);
