import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { starterAction } from 'actions/starter-actions';

import StarterComponent from 'components/starter-component';

const mapStateToProps = (state) => {
  const { starterComponents } = state.nameGame;

  return {
    starterComponents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    starterAction: () => {
      dispatch(starterAction());
    },
  };
};

class StarterContainer extends React.Component {
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {
      starterComponents,
    } = this.props;

    return (
      <div>
        <h1></h1>
        <OptionButtons
          hintMode={hintMode}
          mattMode={mattMode}
          onHintModeClick={toggleHintMode}
          onMattModeClick={toggleMattMode}
          />
        <div className="row">
          <StatisticsList
            statistics={statistics}
            />
          <TeamMemberList
            teamMembers={choices}
            onTeamMemberClick={onTeamMemberClick}
            />
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarterContainer);


