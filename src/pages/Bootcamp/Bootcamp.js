import styles from './Bootcamp.css';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';
import { Link } from 'react-router';
import Partners from 'components/Containers/Partners/Partners';
import bootcampPartnersConfig from './bootcampPartnersConfig';
import Helmet from 'react-helmet';
import BinaryText from 'components/BinaryText/BinaryText';

import UIButton from 'UILibrary/button/UIButton';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';
import UILayer from 'UILibrary/layer/UILayer';
import UISkewedLayer from 'UILibrary/layer/UISkewedLayer';
import UITextShadow from 'UILibrary/text/UITextShadow';
import UIHero from 'UILibrary/layout/UIHero';

import ProgressBarContainer from 'components/ProgressBar/ProgressBarContainer';
import ConnectingLineVertical from 'components/ProgressBar/ConnectingLineVertical/ConnectingLineVertical';
import ConnectingDot from 'components/ProgressBar/ConnectingDot/ConnectingDot';

import images from 'constants/images';

class Bootcamp extends PureComponent {
  renderProgressBar() {
    return (
      <div styleName="progress-bar">
        <ProgressBarContainer className="index-2">
          <ConnectingDot />
          <ConnectingLineVertical />
          <ConnectingDot />
          <ConnectingLineVertical />
          <ConnectingDot />
          <ConnectingLineVertical />
          <ConnectingDot />
          <ConnectingLineVertical />
          <ConnectingDot />
          <ConnectingLineVertical />
          <ConnectingDot />
        </ProgressBarContainer>
      </div>
    );
  }
  renderTimelineSections() {
    return (
      <UILayout use="tertiary">
        {this.renderProgressBar()}
        <UISection className="p-top-6 p-bottom-35 p-sm-top-15 p-sm-bottom-20 index-2">
          <UIFlexRow
            justify="space-between"
            className="m-bottom-6 m-sm-bottom-12"
          >
            <UIFlex basis="45%" grow={0} shrink={0}>
              <UIFlexRow align="center" className="full-height">
                <UIFlex className="p-left-6">
                  <h2 title="Hackathons" className="text-white">
                    <UITextShadow text="01.">Hackathons</UITextShadow>
                  </h2>
                  <div className="divider" />
                  <p className="text-on-dark">
                    We run two hackathons before each Bootcamp, from which we
                    recruit our students. They’re each about seven hours long,
                    and are meant as a way for staff, alumni, and prospective
                    students to get to know each other. This is the only way to
                    "apply."{' '}
                    <a href="https://docs.google.com/a/resilientcoders.org/forms/d/1QFBGAe1viFKEl-n7SbAek5XnAGQ22hTLdYoBlAXOiOM/">
                      Sign up for the next one.
                    </a>
                  </p>
                </UIFlex>
              </UIFlexRow>
            </UIFlex>
            <UIFlex
              className={this.props.styles['timeline-photo']}
              basis="45%"
              grow={0}
              shrink={0}
            >
              <UIImage
                className="with-shadow index-1 position-relative"
                src={images.recruitment}
                type="cover"
              />
            </UIFlex>
          </UIFlexRow>

          <UIFlexRow
            justify="space-between"
            className="m-bottom-6 m-sm-bottom-12"
          >
            <UIFlex
              className={this.props.styles['timeline-photo']}
              basis="45%"
              grow={0}
              shrink={0}
              style={{ height: '500px' }}
            >
              <UIImage src={images.coreSkills} type="cover" />
            </UIFlex>
            <UIFlex basis="45%" grow={0} shrink={0}>
              <UIFlexRow align="center" className="full-height">
                <UIFlex className="p-left-6">
                  <h2 className="text-white">
                    <UITextShadow text="02.">Core Skills</UITextShadow>
                  </h2>
                  <div className="divider" />
                  <p className="text-on-dark">
                    In both Bootcamp(Base) and Bootcamp(MERN), our coders meet
                    daily, for eight weeks, to learn HTML, CSS, JavaScript,
                    jQuery, and git, from professionals. Before graduating, they
                    will have demonstrated proficiency in semantically
                    structured markup, inheritance and specificity,
                    accessibility, progressive enhancement, responsive design,
                    and effective use of functions, methods, and variables. They
                    will have built, and pushed to GitHub, work that showcases
                    these aptitudes. Bootcamp(MERN) students go on to spend
                    another six weeks learning the MERN stack (Mongo, Express,
                    React, Node). Bootcamp(Base) graduates are eligible to join{' '}
                    <a href="/lab">Resilient Lab</a> for a two-month Technical
                    Fellowship.
                  </p>
                </UIFlex>
              </UIFlexRow>
            </UIFlex>
          </UIFlexRow>

          <UIFlexRow
            justify="space-between"
            className="m-bottom-6 m-sm-bottom-12"
          >
            <UIFlex basis="45%" grow={0} shrink={0}>
              <UIFlexRow align="center" className="full-height">
                <UIFlex className="p-left-6">
                  <h2 className="text-white">
                    <UITextShadow text="03.">Soft Skills</UITextShadow>
                  </h2>
                  <div className="divider" />
                  <p className="text-on-dark">
                    Our coders also work on the skills that make the “whole
                    engineer,” during Bootcamp. They learn communication
                    techniques, speaking tips, as well as best practices around
                    accountability and time management.
                  </p>
                </UIFlex>
              </UIFlexRow>
            </UIFlex>
            <UIFlex
              className={this.props.styles['timeline-photo']}
              basis="45%"
              grow={0}
              shrink={0}
            >
              <UIImage src={images.softSkills} type="cover" />
            </UIFlex>
          </UIFlexRow>

          <UIFlexRow justify="space-between">
            <UIFlex
              className={this.props.styles['timeline-photo']}
              basis="45%"
              grow={0}
              shrink={0}
            >
              <UIImage src={images.clientWork} type="cover" />
            </UIFlex>
            <UIFlex basis="45%" grow={0} shrink={0}>
              <UIFlexRow align="center" className="full-height">
                <UIFlex className="p-left-6">
                  <h2 className="text-white">
                    <UITextShadow text="04.">Client work</UITextShadow>
                  </h2>
                  <div className="divider" />
                  <p className="text-on-dark">
                    At least once per Bootcamp, we have a “client kickoff
                    meeting,” during which a client is invited to present design
                    work for a website they need built. Our coders work in teams
                    to build it before the client returns for a presentation and
                    hand-off. Students are paid for their time on this, and
                    throughout the Bootcamp.
                  </p>
                </UIFlex>
              </UIFlexRow>
            </UIFlex>
          </UIFlexRow>
        </UISection>
        <UISkewedLayer use="secondary" className="index-1" />
      </UILayout>
    );
  }
  render() {
    return (
      <RouteTransition>
        <Helmet title="Resilient Bootcamp" />
        <UIHero
          image={images.heroBootcamp}
          titleOne="Resilient Bootcamp"
          text="Transforming dedication into opportunity, the starting point for our coders&#39; careers."
          to="/bootcamp/roster"
          buttonText="Meet our new grads"
        />

        <UILayout>
          <UISection className="p-bottom-6">
            <UIFlexRow>
              <UIFlex className="pull-up-offset-4 hero-card-second index-2">
                <UICard className="p-all-6 full-height with-shadow pull-up-4">
                  <h2>The Goal</h2>
                  <div className="divider divider__red" />
                  <p>
                    The idea behind our Bootcamp is an audacious one: Take a
                    small cohort of young people, who face more challenges than
                    most, who have been hand-picked by our partners for their
                    grit, and teach them fundamentals of web development so that
                    they may have access to a real career. From Bootcamp,
                    mentorship, and Resilient Lab, through additional on-the-job
                    support, we{' '}
                    <a
                      href="http://resilientcoders.s3.amazonaws.com/i/docs/HiringAResilientCoder.pdf"
                      target="_blank"
                    >
                      ensure that our coders are successful
                    </a>{' '}
                    at at that first gig.
                  </p>
                </UICard>
              </UIFlex>
              <UIFlex className="hero-card-first">
                <UICard
                  use="secondary"
                  className="p-all-6 full-height with-shadow"
                >
                  <h2>Current Bootcamp</h2>
                  <p>
                    Our Summer Bootcamp(Base) is well underway, and we are
                    recruiting for the fall Bootcamp(MERN). Interested in
                    applying? Come to one of our next Hackathons, from which we
                    recruit, on Monday 8/14 from 10 to 5, at 50 Milk St 5th
                    floor, or Saturday 8/19 from 10 to 5, at the Roxbury
                    Innovation Center in Dudley Square.
                  </p>
                  {/*
                    <p>
                    Our coders are now available for hire. Interested in learning more? Check out their
                    bios and portfolios on our <a href="/bootcamp/roster">roster</a> page.
                    </p>
                  */}
                  <UIButton to="https://docs.google.com/a/resilientcoders.org/forms/d/1QFBGAe1viFKEl-n7SbAek5XnAGQ22hTLdYoBlAXOiOM/">
                    Sign up
                  </UIButton>
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>

        <UILayout use="secondary">
          <UISkewedLayer use="tertiary" className="index-1" />
          <UISection className="text-center p-top-6 p-bottom-28 p-sm-bottom-18 index-2">
            <h1 className="text-darkest">The Program</h1>
            <p className="text-constrained m-x-auto m-bottom-6">
              Our Bootcamp comes in two tracks: Bootcamp(Base) and
              Bootcamp(MERN). In each, we teach students the fundamentals of
              front end web development. We start with the basics and end with
              real world client work.
            </p>
            <h4 className="text-center">Starts with</h4>
            <h2 className="text-center text-darkest">
              <BinaryText isInverted={true}>Determination</BinaryText>
            </h2>
          </UISection>
        </UILayout>

        {this.renderTimelineSections()}

        <UILayout className="p-bottom-6" use="secondary">
          <UIFlexRow>
            <UIFlex>
              <UICard className="text-center p-x-6">
                <h4>Ends with</h4>
                <h1>
                  <BinaryText isInverted={true}>A Career</BinaryText>
                </h1>
                <p className="text-constrained m-x-auto">
                  We hire some of our own Bootcamp(Base) students into an
                  apprenticeship with
                  <Link to="/lab">&nbsp;Resilient Lab</Link>
                  , and others go right into an internship leveraging their new
                  skills.
                </p>
              </UICard>
            </UIFlex>
          </UIFlexRow>
        </UILayout>

        <UILayout>
          <UILayer dots={false} image={images.joinBootcamp} />
          <UISection className="index-1 text-center p-y-18">
            <h1>Want in?</h1>
            <div className="divider divider__red" />
            <p className="text-on-dark text-constrained m-x-auto">
              We&#8217;re looking for young people from the City of Boston, who
              face more challenges than most, to join us, and learn the
              fundamentals of web development for free.
            </p>
          </UISection>
        </UILayout>

        <UILayout className="p-bottom-6">
          <UISection>
            <UIFlexRow>
              <UIFlex type="grey">
                <UICard
                  use="secondary"
                  className="p-all-6 full-height with-shadow"
                >
                  <h2>As a student</h2>
                  <p>
                    Our Summer Bootcamp(Base) is well underway, and we are
                    recruiting for the fall Bootcamp(MERN). Interested in
                    applying? Come to one of our next Hackathons, from which we
                    recruit, on Monday 8/14 from 10 to 5, at 50 Milk St 5th
                    floor, or Saturday 8/19 from 10 to 5, at the Roxbury
                    Innovation Center in Dudley Square.
                  </p>
                  <UIButton to="https://docs.google.com/a/resilientcoders.org/forms/d/1QFBGAe1viFKEl-n7SbAek5XnAGQ22hTLdYoBlAXOiOM/">
                    Sign up
                  </UIButton>
                </UICard>
              </UIFlex>
              <UIFlex type="white" className="pull-up-offset-2">
                <UICard className="p-all-6 pull-up-2 full-height with-shadow">
                  <h2>As a mentor</h2>
                  <div className="divider divider__red" />
                  <p>
                    Want to get involved in Bootcamp?{' '}
                    <a href="/get-involved/volunteer">
                      Sign up for the mailing list,
                    </a>{' '}
                    and we will keep you posted as the summer approaches.
                  </p>
                  <UIButton to="/get-involved/volunteer">Get Involved</UIButton>
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>

        <UILayout use="secondary">
          <UISection>
            <UICard className="p-all-6 text-center">
              <Partners
                title="Thank you to our bootcamp partners"
                partnersConfig={bootcampPartnersConfig}
              />
            </UICard>
          </UISection>
        </UILayout>
      </RouteTransition>
    );
  }
}

export default CSSModules(Bootcamp, styles);
