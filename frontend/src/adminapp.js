import React, { useState } from "react";
import { Box, CssBaseline } from '@mui/material';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Sidebar, Menu, MenuItem, ProSidebarProvider, SubMenu } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Routes, Route, Link } from "react-router-dom";
import Home from './sidebarmenu/home';
import Dashboard from './sidebarmenu/dashboard';

const App = () => {

    let [isUserAuthenticated, setUserAuthorization] = useState(
        sessionStorage.getItem("isUserAuthenticated") === "true" || false
    );
    let [isAdmin, setAdmin] = useState(
        sessionStorage.getItem("isAdmin") === "true" || false
    );
    let [customerId, setCustomerId] = useState(
        sessionStorage.getItem("customerId") || undefined
    );

    const setUserAuthenticatedStatus = (isAdmin, customerId) => {
        setUserAuthorization(true);
        setAdmin(isAdmin);
        setCustomerId(customerId);
    };
    const handleLogout = () => {
        sessionStorage.removeItem("isUserAuthenticated");
        sessionStorage.removeItem("isAdmin");
        sessionStorage.removeItem("customerId");
        sessionStorage.removeItem("jwt_token");
        sessionStorage.removeItem("jwt_refresh_token");
        setUserAuthorization(false);
        setAdmin(false);
        setCustomerId(undefined);
    };


    return (
        <ProSidebarProvider>
            <CssBaseline />
            <Box display="flex" height="100vh">
                {/* Sidebar */}
                <Sidebar backgroundColor="#b0c1e2" style={{ height: "100vh" }}>

                    <Menu>
                        <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
                            <h2> QUICKPAY</h2>
                        </MenuItem>
                        <MenuItem icon={<ReceiptRoundedIcon />} component={<Link to="/" />}>
                            Home
                        </MenuItem>

                        <MenuItem icon={<GridViewRoundedIcon />} component={<Link to="/dashboard" />}>
                            Dashboard
                        </MenuItem>
                        <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
                            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
                            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
                        </SubMenu>
                        <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
                            <MenuItem icon={<AccountBalanceRoundedIcon />}>
                                Current Wallet
                            </MenuItem>
                            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
                        <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
                            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
                            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                            <MenuItem icon={<NotificationsRoundedIcon />}>
                                Notifications
                            </MenuItem>
                        </SubMenu>
                        <MenuItem icon={<LogoutRoundedIcon />} onClick={handleLogout}>
              Logout
            </MenuItem>
                    </Menu>

                </Sidebar>

                {/* Main Content Area */}
                <Box flex={1} display="flex" flexDirection="column" height="100vh">
                    {/* Header - inside main area only */}
                    <Box>
                        <Header />
                    </Box>

                    {/* Page Content */}
                    <Box component="main" flex={1} p={2} overflow="auto">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </Box>
                    {/* Footer */}
                    <Footer />
                </Box>
            </Box>
        </ProSidebarProvider>
    );
};

export default App;
