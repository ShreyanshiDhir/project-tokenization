import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 15,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
		<Card
			square
			elevation={0}
			className={classes.root}
			style={{
				borderRight: "3px solid #e5e5e5",
				backgroundColor: "white",
			}}
		>
			<CardContent>
				<div
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Total Tokens
					</Typography>
					<AccountBalanceIcon color="primary" />
				</div>

				<Typography
					variant="h2"
					component="h2"
					color="primary"
					align="center"
					style={{ fontWeight: "400", marginTop: "1rem" }}
				>
					1200
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					style={{
						marginLeft: "25%",
						opacity: "0.7",
						fontSize: "11px",
					}}
					size="small"
				>
					Learn More About this
				</Button>
			</CardActions>
		</Card>
  );
}

