import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import DashboardutlinedIcon from "@mui/icons-material/DashboardOutlined";

import GraphOutlinedIcon from "@mui/icons-material/PieChartOutlineRounded";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

import PersonOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";

import NotificationOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const Item = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{
				color: colors.grey[100],
			}}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState("Dashboard");

	return (
		<Box
			sx={{
				"& .pro-sidebar-inner": {
					background: `${colors.primary[400]} !important`,
				},
				"& .pro-icon-wrapper": {
					backgroundColor: "transparent !important",
				},
				"& .pro-inner-item": {
					padding: "5px 35px 5px 20px !important",
				},
				"& .pro-inner-item:hover": {
					color: "#868dfb !important",
				},
				"& .pro-menu-item.active": {
					color: "#6870fa !important",
				},
			}}
		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape="square">
					{/* LOGO AND MENU ICON */}
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: "10px 0 20px 0",
							color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box
								display="flex"
								justifyContent="end"
								alignItems="center"
								ml="15px"
							>
								<Box
									display="flex"
									justifyContent="center"
									alignItems="center"
									mr="30px"
								>
									<img
										alt="company-logo"
										width="50px"
										height="50px"
										src={`../../assets/user.png`}
										style={{
											cursor: "pointer",
											borderRadius: "50%",
										}}
									/>
									<Box textAlign="center">
										<Typography
											variant="h4"
											color={colors.greenAccent[100]}
											fontWeight="bold"
											sx={{ m: "0 0 0 10px" }}
										>
											Droitdash
										</Typography>
									</Box>
								</Box>

								{/* collapse icon */}
								<IconButton
									onClick={() => setIsCollapsed(!isCollapsed)}
								>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					<Box paddingLeft={isCollapsed ? undefined : "10%"}>
						{/* Dashboard */}
						<Item
							title="Dashboard"
							to="/"
							icon={<DashboardutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						{/*key metrics */}
						<Item
							title="Key Metrics"
							to="/"
							icon={<AnalyticsOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}
						></Typography>

						<Typography
							variant="h6"
							color={colors.grey[300]}
							borderBottom="1px colors.grey[300]"
							sx={{ m: "15px 0 5px 20px" }}
						>
							<hr color="#141b2d" />
						</Typography>

						{/* Analytics */}
						<SubMenu
							title="Analytics"
							icon={<GraphOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						>
							<Item
								title="All Analytics"
								to="/form"
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Favourites"
								to="/form"
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="New analytics"
								to="/form"
								selected={selected}
								setSelected={setSelected}
							/>
						</SubMenu>

						<Typography
							variant="h6"
							color={colors.grey[300]}
							sx={{ m: "15px 0 5px 20px" }}
						>
							Charts
						</Typography>
						{/* Documents */}
						<SubMenu
							title="Documents"
							icon={<PersonOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						></SubMenu>

						<Item
							title="Notification"
							to="/bar"
							icon={<NotificationOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default Sidebar;
