import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';

class managerCoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <h2>Administrar curso</h2>
        );
    }
}

managerCoursesPage.propTypes = {
    //propName: .......
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(managerCoursesPage);
