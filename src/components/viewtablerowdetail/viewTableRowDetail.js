import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ViewTableRowDetail extends Component<{}> {
    static propTypes = {
      dataSource: PropTypes.shape({}).isRequired,
      configData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }

    static defaultProps = {
    }


    render() {
      const { dataSource, configData } = this.props;

      const mappedData = configData.map(d => (
        {
          label: d.label,
          value: dataSource[d.value],
        }
      ));

      return (
        <section>
          {mappedData.map(d => (
            <p key={d.label}>
              <span>{d.label}</span>
              <span>{d.value}</span>
            </p>
          ))}
        </section>
      );
    }
}

export default ViewTableRowDetail;
