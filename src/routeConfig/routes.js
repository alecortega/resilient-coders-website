import React from 'react';
import Home from '../pages/Home/Home';

import GetInvolved from '../pages/GetInvolved/GetInvolved';
import GetInvolvedVolunteer from '../pages/GetInvolved/GetInvolvedVolunteer/GetInvolvedVolunteer';
import GetInvolvedCompany from '../pages/GetInvolved/GetInvolvedCompany/GetInvolvedCompany';
import GetInvolvedStudent from '../pages/GetInvolved/GetInvolvedStudent/GetInvolvedStudent';

import Lab from '../pages/Lab/Lab';
import Team from '../pages/Team/Team';
import News from '../pages/News/News';
import Bootcamp from '../pages/Bootcamp/Bootcamp';

import Roster from '../pages/Bootcamp/Roster/Roster';
import RosterMember from '../pages/Bootcamp/Roster/RosterMember/RosterMember';
import rosterMembersConfig from '../pages/Bootcamp/Roster/rosterMembersConfig';

import Playbook from '../pages/Playbook/Playbook';

import { Route, IndexRoute, Redirect } from 'react-router';
import App from '../App';

const rosterMemberRoutes = rosterMembersConfig.map((item, key) => {
  return <Route key={key} path="roster/:memberName" component={RosterMember} />;
});

export default (
  <Route path="/" component={App}>
    <Route path="bootcamp">
      <Route path="roster" component={Roster} />
      {rosterMemberRoutes}
      <IndexRoute component={Bootcamp} />
    </Route>
    <Route exact={true} path="lab" component={Lab} />
    <Route exact={true} path="team" component={Team} />
    <Route exact={true} path="news" component={News} />
    <Route exact={true} path="diversityplaybook" component={Playbook} />
    <Route exact={true} path="get-involved">
      <IndexRoute component={GetInvolved} />
      <Route path="company" component={GetInvolvedCompany} />
      <Route path="volunteer" component={GetInvolvedVolunteer} />
      <Route path="student" component={GetInvolvedStudent} />
      <Redirect from="mentor" to="volunteer" />
    </Route>
    <IndexRoute component={Home} />
  </Route>
);
