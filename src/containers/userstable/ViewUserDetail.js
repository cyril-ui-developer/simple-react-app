import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewTableRowDetail from '../../components/viewtablerowdetail';

const mapStateToProps = state => ({
  reducedData: state.usersReducer.userData,
});

class ViewUserDetail extends Component<{}> {
    static propTypes = {
      reducedData: PropTypes.shape({}).isRequired,
    }

    static defaultProps = {}

    render() {
      const { reducedData } = this.props;
      const dataConfig = [
        {
          label: 'Firstname: ',
          value: 'firstname',
        },
        {
          label: 'Lastname: ',
          value: 'lastname',
        },
        {
          label: 'Date of Birth: ',
          value: 'dob',
        }, {
          label: 'Address: ',
          value: 'address',
        },
        {
          label: 'Phone Number: ',
          value: 'phone',
        },
        {
          label: 'Email: ',
          value: 'email',
        },
        {
          label: 'Height: ',
          value: 'height',
        },

        {
          label: 'Highest Level Education: ',
          value: 'highledu',
        },
        {
          label: 'Degree: ',
          value: 'degree',
        },
      ];

      return (
        <section>
          <ViewTableRowDetail configData={dataConfig} dataSource={reducedData} />
        </section>
      );
    }
}

export default connect(mapStateToProps)(ViewUserDetail);
