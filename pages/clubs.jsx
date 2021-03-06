var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link;

var HeroUnit = require('../components/hero-unit.jsx');
var Map = require('../components/map.jsx');
var IconLinks = require('../components/icon-links.jsx');
var IconLink = require('../components/icon-link.jsx');
var ModalManagerMixin = require('../mixins/modal-manager');
var TeachAPIClientMixin = require('../mixins/teach-api-client');
var LoginLink = require('../components/login.jsx').LoginLink;
var ModalAddOrChangeYourClub = require('../components/modal-clubs.jsx');
var ModalRemoveYourClub = require('../components/modal-clubs-remove.jsx');
var Illustration = require('../components/illustration.jsx');
var ImageTag = require('../components/imagetag.jsx');

var ClubsIntro = React.createClass({
  render: function() {
    return(
      <section className="intro intro-after-banner">
        <Illustration
          height={""} width={204}
          src1x="/img/pages/clubs/svg/icon-circle-clubs.svg"
          alt="">
          <h1>What is a Mozilla Club?</h1>
          <h2>A Mozilla Club meets regularly in-person to learn how to read, write and participate on the Web in an inclusive, engaging way.</h2>
        </Illustration>
      </section>
    );
  }
});

var WhyOrganize = React.createClass({
  render: function() {
    return(
      <div className="why-organize-a-mozilla-club">
        <h2>Why organize a Mozilla Club?</h2>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <p><strong>Your learners will make things that interest them.</strong> We learn best by making projects we care about, with peers who support and encourage us. </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <p><strong>Your learners will benefit from regular engagement.</strong> Literacy doesn’t happen overnight. Mozilla Clubs honors the fact that learning takes time.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <p><strong>You’ll develop your leadership skills.</strong> Improve your own leadership and organizing experience by becoming a Mozilla Club Captain.</p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <p><strong>You can use Mozilla’s free and educator-tested curriculum.</strong> Our <Link to="activities">curriculum</Link> is free to use and remix.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p><strong>You can embed it in your existing program.</strong> You may already be serving a group of learners or running an educational offering. Mozilla Clubs can be a way to embed <Link to="web-literacy">Web Literacy</Link> into your existing program. </p>
          </div>
        </div>
      </div>
    );
  }
});

var MozillaClubLookLike = React.createClass({
  render: function() {
    return(
      <div className="mozilla-club-looks-like">
        <h2>What does a Mozilla Club look like in your...?</h2>
        <ul>
          <li>
            <ImageTag 
              src1x="/img/pages/clubs/svg/icon-afterschool.svg"
              width={"40"}
              height={""}
              alt="" />
            <div className="place-label"><a href="https://docs.google.com/document/d/1rUivWQybJymNlfZZHWkSJqFN5TNDVuPRSH_YCObALeM">Afterschool program</a></div>
          </li>
          <li>
            <ImageTag 
              src1x="/img/pages/clubs/svg/icon-community.svg"
              width={"55"}
              height={""}
              alt="" />
            <div className="place-label"><a href="https://docs.google.com/document/d/1gzbC5Q_XeHeii66v_Z4py6QrqYin5j1ozNhdeKJ-Ssg">Community meet-up</a></div>
          </li>
          <li>
            <ImageTag 
              src1x="/img/pages/clubs/svg/icon-neighborhood.svg"
              width={"35"}
              height={""}
              alt="" />
            <div className="place-label"><a href="https://docs.google.com/a/mozilla.com/document/d/18DwRtmttN_EUlp1PUsQJWrDgUwMpCf5ipKG-TGfN1Rc/">Neighborhood with low connectivity</a></div>
          </li>
          <li>
            <ImageTag 
              src1x="/img/pages/clubs/svg/icon-programs.svg"
              width={"45"}
              height={""}
              alt="" />
            <div className="place-label"><a href="https://docs.google.com/document/d/1WbEEuomaH3eHd--vn_mBBBdAMuS8s9_WxJ4zm-N-UQI">Existing program</a></div>
          </li>
          <li>
            <ImageTag 
              src1x="/img/pages/clubs/svg/icon-university.svg"
              width={"55"}
              height={""}
              alt="" />
            <div className="place-label">University campus<div className="coming-soon">(coming soon)</div></div>
          </li>
          <li>
            <ImageTag 
              src1x="/img/pages/clubs/svg/icon-library.svg"
              width={"40"}
              height={""}
              alt="" />
            <div className="place-label">Library<div className="coming-soon">(coming soon)</div></div>
          </li>
          <li>
            <ImageTag 
              src1x="/img/pages/clubs/svg/icon-classroom.svg"
              width={"45"}
              height={""}
              alt="" />
            <div className="place-label">Classroom<div className="coming-soon">(coming soon)</div></div>
          </li>
        </ul>
      </div>
    );
  }
});

var ClubCaptainPledge = React.createClass({
  render: function() {
    return(
      <div className="club-captain-pledge">
        <Illustration
          width={200} height={200}
          src1x="/img/pages/clubs/intro-photo.png"
          src2x="/img/pages/clubs/intro-photo@2x.png"
          alt="">
          <h3>A Mozilla Club Captain pledges to:</h3>
          <ul>
            <li><p>Teach how to read, write and participate on the Web using inclusive and participatory methods.</p></li>
            <li><p>Empower learners through authentic making, reflective learning, and meaningful action with and on the Web.</p></li>
            <li><p>Commit to the mission of universal web literacy and sharing their club’s experience with Mozilla’s community networks.</p></li>
          </ul>
        </Illustration>
        <p>We believe in the power of peer learning. That’s why we match each Mozilla Club Captain with a volunteer Regional Coordinator who can guide you in getting started and making the most of this program.</p>
      </div>
    );
  }
});

var ApplyCallout = React.createClass({
  propTypes: {
    showAddYourClubModal: React.PropTypes.func.isRequired
  },
  render: function() {
    return(
      <div className="apply-callout text-center">
        <div className="vertical-divider"></div>
        <h3 className="text-center">To get matched with a Regional Coordinator, please apply to be a Mozilla Club Captain.</h3>
        <a className="btn btn-awsm" onClick={this.props.showAddYourClubModal}>Apply to be a Club Captain</a>
        <p className="check-out-resources">If you’d like to get started on your own, check out these <a href="http://mozilla.github.io/learning-networks/clubs/">resources</a>.</p>
        <div className="alert alert-warning text-left center-block">
          <strong>Please note: </strong><span>Our first cohort of Regional Coordinators is in full swing right now, so you’ll be added to our waiting list. We’ll match you with a Regional Coordinator as soon as we can.</span>
        </div>
      </div>
    );
  }
});

var ClubsPage = React.createClass({
  mixins: [ModalManagerMixin, TeachAPIClientMixin],
  contextTypes: {
    router: React.PropTypes.func
  },
  statics: {
    teachAPIEvents: {
      'clubs:change': 'forceUpdate',
      'username:change': 'forceUpdate'
    },
    pageTitle: "Clubs",
    pageClassName: "clubs"
  },
  componentDidMount: function() {
    this.getTeachAPI().updateClubs();

    if (this.context.router.getCurrentQuery().modal === 'add') {
      this.showAddYourClubModal();
    }
  },
  showAddYourClubModal: function() {
    this.showModal(ModalAddOrChangeYourClub, {
      onSuccess: this.handleZoomToClub
    });
  },
  handleZoomToClub: function(club) {
    ReactDOM.findDOMNode(this.refs.map).scrollIntoView();
    this.refs.map.focusOnClub(club);
  },
  handleClubDelete: function(url, clubName) {
    this.showModal(ModalRemoveYourClub, {
      url: url,
      name: clubName
    });
  },
  handleClubEdit: function(url) {
    var club = _.findWhere(this.getTeachAPI().getClubs(), {
      url: url
    });
    this.showModal(ModalAddOrChangeYourClub, {
      club: club,
      onSuccess: this.handleZoomToClub
    });
  },
  render: function() {
    var teachAPI = this.getTeachAPI();
    var clubs = teachAPI.getClubs();
    var username = teachAPI.getUsername();
    return (
      <div>
        <HeroUnit>
          <h1>Mozilla Clubs</h1>
          <h2>Local groups teaching the Web around the world</h2>
          <div><a className="btn btn-awsm" onClick={this.showAddYourClubModal}>Apply to be a Club Captain</a></div>
        </HeroUnit>
        <div className="inner-container">
          <ClubsIntro />
          <section>
            <WhyOrganize />
          </section>
          <section>
            <MozillaClubLookLike />
          </section>
          <section>
            <ClubCaptainPledge/>
          </section>
          <section>
            <ApplyCallout showAddYourClubModal={this.showAddYourClubModal} />
          </section>
          <section>
            <h2>Where in the World are Mozilla Clubs?</h2>
            <div className="mapDiv" id="mapDivID">
              <Map ref="map" className="mapDivChild"
               clubs={clubs}
               username={username}
               onDelete={this.handleClubDelete}
               onEdit={this.handleClubEdit}/>
            </div>
            <Link to="clubs-list" className="see-full-clubs-list">See the full list</Link>
          </section>
          <section>
            <IconLinks>
              <IconLink
                linkTo="web-lit-basics"
                imgSrc="/img/pages/clubs/svg/icon-curriculum.svg"
                head="Curriculum"
                subhead="Modular Web Literacy curriculum"
              />
              <IconLink
                href="https://discourse.webmaker.org/c/mozilla-clubs"
                imgSrc="/img/pages/clubs/svg/icon-connect.svg"
                head="Connect"
                subhead="Connect with other Club Leaders"
              />
              <IconLink
                href="http://mozilla.github.io/learning-networks/clubs/"
                imgSrc="/img/pages/clubs/svg/icon-tips.svg"
                head="Helpful Tips"
                subhead="Tips for running your Club"
              />
            </IconLinks>
          </section>
        </div>
      </div>
    );
  }
});

module.exports = ClubsPage;
