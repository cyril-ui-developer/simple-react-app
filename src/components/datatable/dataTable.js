import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';

import Button from '../button';
import TablePaginationActionsWrapped from './TablePaginationActionsWrapped';

// const genId =(field)=>(Math.random() + field)

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class DataTable extends React.Component<{}> {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    rowsHeading: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
    rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    dataColumns: PropTypes.arrayOf(PropTypes.string).isRequired,

  };

  constructor(props) {
    super(props);
    const { page, rowsPerPage } = this.props;
    this.state = {
      page,
      rowsPerPage,
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ page: 0, rowsPerPage: parseInt(event.target.value, 10) });
  };

  render() {
    const {
      classes, rows, rowsHeading, handleClick, dataColumns,
    } = this.props;
    const { rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {rowsHeading.map(title => (
                  <CustomTableCell key={title}>{title}</CustomTableCell>
                ))}
              </TableRow>

            </TableHead>
            <TableBody>
              {
                  rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow key={row.id}>
                      {dataColumns.map(col => (
                        <TableCell key={row[col]}>{ row[col]}</TableCell>
                      ))
                      }
                      <TableCell>
                        <Button
                          className="btn"
                          value="Detail"
                          name="detailbutton"
                          onHandleClick={() => handleClick(row)}
                        />
                      </TableCell>
                    </TableRow>
                  ))
              }
              {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.firstname}</TableCell>
                  <TableCell>{row.lastname}</TableCell>
                  <TableCell>{row.dob}</TableCell>
                  <TableCell>
                    <Button
                      className="btn"
                      value="Detail"
                      name="detailbutton"
                      onHandleClick={() => handleClick(row)}
                    />
                  </TableCell>
                </TableRow>
              ))} */}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />

                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 15, 20, 25, 50]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}


export default withStyles(styles)(DataTable);
