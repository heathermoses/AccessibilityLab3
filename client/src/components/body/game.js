import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import './../../assets/stylesheets/main.scss';

import {actions} from './../../reducers/AppReducer';

import Main from './../../pages/Main';
import FullGame from './../../pages/BeginnerGame/Game';
import InaccessibleGame from './../../pages/BeginnerGame/InaccessibleGame';
import GameInstructions from './../../pages/BeginnerGame/GameInstructions';
import AccessibleInstructions from './../../pages/BeginnerGame/AccessibleInstructions';
import AccessibleGame from './../../pages/BeginnerGame/AccessibleGame';
import CodeChange from './../../pages/BeginnerGame/CodeChange';
import HelloWorld from './../../pages/BeginnerGame/HelloWorld';
import AdvancedGame from './../../pages/AdvancedGame/AdvancedGame';
import AdvancedInstructions from './../../pages/AdvancedGame/AdvancedInstructions';
import ProblemDiscovery from './../../pages/AdvancedGame/ProblemDiscovery';
import ProblemExplanation from './../../pages/AdvancedGame/ProblemExplanation';
import ProblemFix from './../../pages/AdvancedGame/ProblemFix';
import AccessibleUserUpdatedGame from './../../pages/BeginnerGame/AccessibleUserUpdatedGame';
import BeginnerGameConclusion from './../../pages/BeginnerGame/BeginnerGameConclusion';
import AdvancedGameConclusion from './../../pages/AdvancedGame/AdvancedGameConclusion';
import ViewFix from './../../pages/AdvancedGame/ViewFix';
import ProblemDiscoveryFixedExperience from './../../pages/AdvancedGame/ProblemDiscoveryFixedExperience';
import './../../vendor/bootstrap/css/bootstrap.min.css';
import './../../css/agency.min.css';
import './../../css/style.css';

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = {
  login: actions.login,
  logout: actions.logout,
  updateUser: actions.updateUser,
};

class Game extends Component {
  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    const {user} = this.props;
    if (user !== undefined) {
      console.log(user);
    }
    this.props.login();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div class="container">
        <section class="page-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <br />
                <br />
                <h2 class="section-heading text-uppercase">
                  Screenreader Lab: Game
                </h2>
              </div>
            </div>
          </div>
        </section>
        <Router basepath={process.env.PUBLIC_URL} className="app">
          <Main path="/" />
          <FullGame path="/game" />
          <GameInstructions path={'/GameInstructions'} />
          <InaccessibleGame path={'/InAccessibleGame'} />
          <AccessibleInstructions path={'/AccessibleInstructions'} />
          <AccessibleGame path={'/AccessibleGame'} />
          <CodeChange path={'/CodeChange'} />
          <HelloWorld path={'/HelloWorld'} />
          <AdvancedGame path={'/AdvancedGame'} />
          <AdvancedInstructions path={'/AdvancedInstructions'} />
          <ProblemDiscovery path={'/ProblemDiscovery'} />
          <ProblemExplanation path={'/ProblemExplanation'} />
          <ProblemDiscoveryFixedExperience
            path={'/ProblemDiscoveryFixedExperience'}
          />
          <ProblemFix path={'/ProblemFix'} />
          <AccessibleUserUpdatedGame path={'/AccessibleUserUpdatedGame'} />
          <BeginnerGameConclusion path={'/BeginnerGameConclusion'} />
          <AdvancedGameConclusion path={'/AdvancedGameConclusion'} />
          <ViewFix path={'/ViewFix'} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
