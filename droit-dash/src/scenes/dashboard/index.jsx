import { Box, Typography, useTheme, Paper } from "@mui/material";
import { tokens } from "../../theme";


import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";


import Topbar from "../global/Topbar";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			{/* HEADER */}
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Header title="Viewer Demography" />

				{/* ICONS */}
				<Topbar />
			</Box>

			{/* GRID & CHARTS */}
			{/* ROW 1 */}

			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="240px"
				gap="20px"
			>
				{/* paper card */}
				<Paper
					elevation={3}
					sx={{
						gridColumn: "span 3",
						backgroundColor: colors.blueAccent[900],
						display: "flex",
						borderRadius: "20px",
						alignItems: "center",
						justifyContent: "center",
						padding: theme.spacing(2),
						margin: theme.spacing(1),
					}}
				>
					<StatBox
						title="$12,361"
						subtitle="Since last week"
						progress="0.75"
						increase="+13.4%"
						icon={
							<Typography
								variant="h1"
								color={colors.grey[300]}
								sx={{ m: "0 0 5px 0" }}
							>
								Total sales
							</Typography>
						}
					/>
				</Paper>
				{/* ROW 1 */}

				<Paper
					elevation={3}
					sx={{
						gridColumn: "span 3",
						backgroundColor: colors.blueAccent[900],
						display: "flex",
						borderRadius: "20px",
						alignItems: "center",
						justifyContent: "center",
						padding: theme.spacing(2),
						margin: theme.spacing(1),
					}}
				>
					<StatBox
						title="$4,865"
						subtitle="Sales Obtained"
						progress="0.50"
						increase="+21%"
						icon={
							<Typography
								variant="h1"
								color={colors.grey[400]}
								sx={{ m: "0 0 5px 0" }}
							>
								Total Orders
							</Typography>
						}
					/>
				</Paper>
				<Paper
					elevation={3}
					sx={{
						gridColumn: "span 3",
						backgroundColor: colors.blueAccent[900],
						display: "flex",
						borderRadius: "20px",
						alignItems: "center",
						justifyContent: "center",
						padding: theme.spacing(2),
						margin: theme.spacing(1),
					}}
				>
					<StatBox
						title="2,245"
						subtitle="Since  Clients"
						progress="0.30"
						increase="+5%"
						icon={
							<Typography
								variant="h1"
								color={colors.grey[400]}
								sx={{ m: "0 0 5px 0" }}
							>
								Total Customers
							</Typography>
						}
					/>
				</Paper>
				<Paper
					elevation={3}
					sx={{
						gridColumn: "span 3",
						backgroundColor: colors.blueAccent[900],
						display: "flex",
						borderRadius: "20px",
						alignItems: "center",
						justifyContent: "center",
						padding: theme.spacing(2),
						margin: theme.spacing(1),
					}}
				>
					<StatBox
						title="1,325,134"
						subtitle="Traffic Received"
						progress="0.80"
						increase="+43%"
						icon={
							<TrafficIcon
								sx={{
									color: colors.greenAccent[600],
									fontSize: "26px",
								}}
							/>
						}
					/>
				</Paper>

				{/* ROW 2 */}
				<Box
					gridColumn="span 8"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Box
						mt="25px"
						p="0 30px"
						display="flex "
						justifyContent="space-between"
						alignItems="center"
					>
						<Box>
							<Typography
								variant="h2"
								fontWeight="600"
								color={colors.grey[100]}
							>
								Sales Report
							</Typography>
							<Typography
								variant="h1"
								fontWeight="bold"
								color={colors.greenAccent[500]}
							>
								$38,500
							</Typography>
						</Box>
						<Box display="flex">
							<Box
								marginRight="12px"
								backgroundColor="grey"
								padding={"10px 20px"}
								borderRadius={"10px"}
							>
								<Typography>12 Months</Typography>
							</Box>
							<Box
								marginRight="12px"
								backgroundColor="grey"
								padding={"10px 20px"}
								borderRadius={"10px"}
							>
								<Typography>6 Months</Typography>
							</Box>
							<Box
								marginRight="12px"
								backgroundColor="grey"
								padding={"10px 20px"}
								borderRadius={"10px"}
							>
								<Typography>30 Days</Typography>
							</Box>
							<Box
								marginRight="12px"
								backgroundColor="grey"
								padding={"10px 20px"}
								borderRadius={"10px"}
							>
								<Typography>7 Days</Typography>
							</Box>
						</Box>
					</Box>
					<Box
						height="400px"
						m="-20px 0 0 0"
					>
						<LineChart isDashboard={true} />
					</Box>
				</Box>

				{/* ORDER LIST */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Typography
						variant="h2"
						fontWeight="600"
						sx={{ padding: "30px 30px 0 30px" }}
					>
						Orders List
					</Typography>
					<Box
						height="450px"
						mt="-20px"
					>
						<BarChart isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
