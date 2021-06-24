import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Photo from './image';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable(props) {
  const classes = useStyles();
  const rows = [
    createData('Born', props.data['dateOfBirth']),
    createData('Birth Place', props.data['birthPlace']),
    createData('Age', props.data['age']),
    createData('country', props.data['country']),
    createData('Cricket Rankings', props.data['criketerRanking']),
    createData('T20 rankings', props.data['rankings'][0]),
    createData('ODI rankings', props.data['rankings'][1]),
    createData('Test rankings', props.data['rankings'][2]),
    createData('Batting style', props.data['battingStyle']),
    createData('Bowling style', props.data['bowlingStyle']),
    createData('Jersey Number', props.data['jerseyNumber']),
    createData('Total runs', props.data['totalRuns']),
    createData('Total wickets', props.data['totalWickets']),
  ];
  return (
    <TableContainer component={Paper}>
        <Photo image={props.data['image']}/>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
