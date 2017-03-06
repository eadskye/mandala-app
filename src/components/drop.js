import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const styles = {
  customWidth: {
    width: '200',
  },
};
//
 export default class FamilyMemberForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      relationship: 'Relationship',
      frequency: 'Frequency of Contact',
      gender: 'Gender',
      race: 'Race/Ethnicity',
      education: 'Level of Education',
      economic: 'Economic Position',
      disclosure: '  What level of self disclosure is currently possible in this relationship?'
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleRelationshipChange = this.handleRelationshipChange.bind(this);
    this.handleRaceChange = this.handleRaceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleEconomicChange = this.handleEconomicChange.bind(this);
    this.handleDisclosureChange = this.handleDisclosureChange.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handleAgeChange(e) {
    this.setState({ age:  e.target.value })
  }
  handleFrequencyChange(e, i, val) {
    this.setState({ frequency: val });
  }
  handleGenderChange(e) {
    this.setState({ gender: e.target.value })
  }
  handleRelationshipChange(e) {
    this.setState({ relationship: e.target.value })
  }
  handleRaceChange(e) {
    this.setState({ race: e.target.value })
  }
  handleEducationChange(e) {
    this.setState({ education: e.target.value })
  }
  handleEconomicChange(e) {
    this.setState({ economic: e.target.value })
  }
  handleDisclosureChange(e) {
    this.setState({ disclosure: e.target.value })
  }
  render() {
    return (
      <div>
          <h3>Assessment Instructions</h3>
         <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>
       <h3>Family</h3>


        <div>
    <TextField
      onChange={this.handleNameChange}
      value={this.state.name}
      hintText="Name"
    />
    <br />
    <TextField
      onChange={this.handleAgeChange}
      value={this.state.age}
      hintText="Age"
    />
    </div>

    <DropDownMenu
      onChange={this.handleRelationshipChange}
      value={this.state.value}
    >
      <MenuItem relationship={1} primaryText="Relationship" />
    <MenuItem value={2} primaryText="Parent" />
  <MenuItem value={3} primaryText="Sibling" />
<MenuItem value={4} primaryText="Extended" />
<MenuItem value={5} primaryText="Other" />

    </DropDownMenu>


    <DropDownMenu
      onChange={this.handleFrequencyChange}
      value={this.state.value}
    >
      <MenuItem frequency={1} primaryText="Frequency of Contact" />
      <MenuItem value={2} primaryText="Daily" />
      <MenuItem value={3} primaryText="Weekly" />
      <MenuItem value={4} primaryText="Monthly" />

    </DropDownMenu>


    <DropDownMenu
          onChange={this.handleGenderChange}
          value={this.state.value}
        >
          <MenuItem gender={1} primaryText="Gender" />
        <MenuItem value={2} primaryText="Female" />
      <MenuItem value={3} primaryText="Male" />
    <MenuItem value={4} primaryText="Transgender" />
    <MenuItem value={5} primaryText="Other" />



        </DropDownMenu>

        <DropDownMenu
          onChange={this.handleRaceChange}
          value={this.state.value}
        >
          <MenuItem race={1} primaryText="Race/Ethnicity" />
        <MenuItem value={2} primaryText="White" />
      <MenuItem value={3} primaryText="Black/African American" />
    <MenuItem value={4} primaryText="Asian" />
      <MenuItem value={5} primaryText="Pacific Islander" />
    <MenuItem value={6} primaryText="Hispanic/Latino" />
    <MenuItem value={7} primaryText="Native American" />




        </DropDownMenu>
        <br />
        <DropDownMenu
          onChange={this.handleEducationChange}
          value={this.state.value}
        >
          <MenuItem education={1} primaryText="Level of Education" />
        <MenuItem value={2} primaryText="Less Than High School" />
      <MenuItem value={3} primaryText="High School/GED" />
    <MenuItem value={4} primaryText="Associates Degree" />
      <MenuItem value={5} primaryText="Bachelors Degree" />
    <MenuItem value={6} primaryText="Masters Degree" />
    <MenuItem value={7} primaryText="Doctorate" />




        </DropDownMenu>
        <DropDownMenu
          onChange={this.handleEconomicChange}
          value={this.state.value}
        >
          <MenuItem economic={1} primaryText="Economic Position" />
        <MenuItem value={2} primaryText="Lower" />
      <MenuItem value={3} primaryText="Lower-Middle" />
    <MenuItem value={4} primaryText="Middle" />
      <MenuItem value={5} primaryText="Upper-Middle" />
    <MenuItem value={6} primaryText="Upper" />


        </DropDownMenu>

        <br />
        <DropDownMenu
          onChange={this.handleDisclosureChange}
          value={this.state.value}
        >
          <MenuItem disclosure={1} primaryText="  What level of self disclosure is currently possible in this relationship?" />
        <MenuItem value={2} primaryText="(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person." />
      <MenuItem value={3} primaryText="(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much." />
    <MenuItem value={4} primaryText="(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy." />
      <MenuItem value={5} primaryText="(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me." />
    <MenuItem value={6} primaryText="(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me." />


        </DropDownMenu>




      </div>
    );
  }
}


export class DropDownMenuSimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      members: [],
    };
    this.checkState = this.checkState.bind(this);
    this.addFamilyMember = this.addFamilyMember.bind(this);
  }

  handleChange = (event, index, value) => this.setState({value});

  checkState(e) {
    console.log(this.state);
  }

  addFamilyMember() {
    this.setState({ members: this.state.members.concat([{}]) });
  }

  render() {
    return (
      <div style={style.container}>
        <section style={style.buttonContainer}>
          <button onClick={this.addFamilyMember}>Add Family Member</button>
        </section>

        <section style={style.membersContainer}>
          {this.state.members.map((member, i) => {
            return <FamilyMemberForm key={i} member={member} />
          })}
        </section>
      </div>
    );
  }
}

// class PartnerForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       age: '',
//       partner: 'Do you have a spouse or a romantic partner?',
//       frequency: 'Frequency of Contact',
//       gender: 'Gender',
//       race: 'Race/Ethnicity',
//       education: 'Level of Education',
//       economic: 'Economic Position',
//       disclosure: '  What level of self disclosure is currently possible in this relationship?'
//     };
//
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleAgeChange = this.handleAgeChange.bind(this);
//     this.handlePartnerChange = this.handlePartnerChange.bind(this);
//     this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
//     this.handleGenderChange = this.handleGenderChange.bind(this);
//     this.handleRaceChange = this.handleRaceChange.bind(this);
//     this.handleEducationChange = this.handleEducationChange.bind(this);
//     this.handleEconomicChange = this.handleEconomicChange.bind(this);
//     this.handleDisclosureChange = this.handleDisclosureChange.bind(this);
//   }
//   handleNameChange(e) {
//     this.setState({ name: e.target.value })
//   }
//   handleAgeChange(e) {
//     this.setState({ age:  e.target.value })
//   }
//   handlePartnerChange(e, i, val) {
//     this.setState({ partner: val });
//   }
//   handleFrequencyChange(e, i, val) {
//     this.setState({ frequency: val });
//   }
//   handleGenderChange(e) {
//     this.setState({ gender: e.target.value })
//   }
//   handleRaceChange(e) {
//     this.setState({ race: e.target.value })
//   }
//   handleEducationChange(e) {
//     this.setState({ education: e.target.value })
//   }
//   handleEconomicChange(e) {
//     this.setState({ economic: e.target.value })
//   }
//   handleDisclosureChange(e) {
//     this.setState({ disclosure: e.target.value })
//   }
//   render() {
//     return (
//       <div>
//           <h3>Assessment Instructions</h3>
//          <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>
//        <h3>Spouse/Partner</h3>
//
//      <DropDownMenu
//       onChange={this.handlePartnerChange}
//       value={this.state.value}
//     >
//       <MenuItem partner={1}
//         primaryText='Do you have a spouse or a romantic partner?'
//        />
//      <MenuItem value={2}
//       primaryText='Yes' />
//     <MenuItem value={3}
//       primaryText='No' />
//
//     </DropDownMenu>
//   <div>
//   <TextField
//     onChange={this.handleNameChange}
//     value={this.state.name}
//     hintText="Name"
//   />
//   <br />
//   <TextField
//     onChange={this.handleAgeChange}
//     value={this.state.age}
//     hintText="Age"
//   />
//   </div>
//
//
//
//
//     <DropDownMenu
//       onChange={this.handleFrequencyChange}
//       value={this.state.value}
//     >
//       <MenuItem frequency={1} primaryText="Frequency of Contact" />
//       <MenuItem value={2} primaryText="Daily" />
//       <MenuItem value={3} primaryText="Weekly" />
//       <MenuItem value={4} primaryText="Monthly" />
//
//     </DropDownMenu>
//
//     <DropDownMenu
//       onChange={this.handleGenderChange}
//       value={this.state.value}
//     >
//       <MenuItem gender={1} primaryText="Gender" />
//     <MenuItem value={2} primaryText="Female" />
//   <MenuItem value={3} primaryText="Male" />
// <MenuItem value={4} primaryText="Transgender" />
// <MenuItem value={5} primaryText="Other" />
//
//
//
//     </DropDownMenu>
//
//     <DropDownMenu
//       onChange={this.handleRaceChange}
//       value={this.state.value}
//     >
//       <MenuItem race={1} primaryText="Race/Ethnicity" />
//     <MenuItem value={2} primaryText="White" />
//   <MenuItem value={3} primaryText="Black/African American" />
// <MenuItem value={4} primaryText="Asian" />
//   <MenuItem value={5} primaryText="Pacific Islander" />
// <MenuItem value={6} primaryText="Hispanic/Latino" />
// <MenuItem value={7} primaryText="Native American" />
//
//
//
//
//     </DropDownMenu>
//     <br />
//     <DropDownMenu
//       onChange={this.handleEducationChange}
//       value={this.state.value}
//     >
//       <MenuItem education={1} primaryText="Level of Education" />
//     <MenuItem value={2} primaryText="Less Than High School" />
//   <MenuItem value={3} primaryText="High School/GED" />
// <MenuItem value={4} primaryText="Associates Degree" />
//   <MenuItem value={5} primaryText="Bachelors Degree" />
// <MenuItem value={6} primaryText="Masters Degree" />
// <MenuItem value={7} primaryText="Doctorate" />
//
//
//
//
//     </DropDownMenu>
//     <DropDownMenu
//       onChange={this.handleEconomicChange}
//       value={this.state.value}
//     >
//       <MenuItem economic={1} primaryText="Economic Position" />
//     <MenuItem value={2} primaryText="Lower" />
//   <MenuItem value={3} primaryText="Lower-Middle" />
// <MenuItem value={4} primaryText="Middle" />
//   <MenuItem value={5} primaryText="Upper-Middle" />
// <MenuItem value={6} primaryText="Upper" />
//
//
//     </DropDownMenu>
//
//     <br />
//     <DropDownMenu
//       onChange={this.handleDisclosureChange}
//       value={this.state.value}
//     >
//       <MenuItem disclosure={1} primaryText="  What level of self disclosure is currently possible in this relationship?" />
//     <MenuItem value={2} primaryText="(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person." />
//   <MenuItem value={3} primaryText="(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much." />
// <MenuItem value={4} primaryText="(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy." />
//   <MenuItem value={5} primaryText="(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me." />
// <MenuItem value={6} primaryText="(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me." />
//
//
//     </DropDownMenu>
//
//
//
//
//
//
//       </div>
//     );
//   }
// }
//
//
// export class DropDownPartner extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       value: 1,
//       members: [],
//     };
//     this.checkState = this.checkState.bind(this);
//     this.addPartner = this.addPartner.bind(this);
//   }
//
//   handleChange = (event, index, value) => this.setState({value});
//
//   checkState(e) {
//     console.log(this.state);
//   }
//
//   addPartner() {
//     this.setState({ members: this.state.members.concat([{}]) });
//   }
//
//   render() {
//     return (
//       <div style={style.container}>
//         <section style={style.buttonContainer}>
//           <button onClick={this.addPartner}>Add Spouse/Partner</button>
//         </section>
//
//         <section style={style.membersContainer}>
//           {this.state.members.map((member, i) => {
//             return <PartnerForm key={i} member={member} />
//           })}
//         </section>
//       </div>
//     );
//   }
// }
// export default class CloseFriendsForm extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      name: '',
//      age: '',
//      frequency: 'Frequency of Contact',
//      gender: 'Gender',
//      race: 'Race/Ethnicity',
//      education: 'Level of Education',
//      economic: 'Economic Position',
//      disclosure: '  What level of self disclosure is currently possible in this relationship?'
//    };
//
//    this.handleNameChange = this.handleNameChange.bind(this);
//    this.handleAgeChange = this.handleAgeChange.bind(this);
//    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
//    this.handleGenderChange = this.handleGenderChange.bind(this);
//    this.handleRaceChange = this.handleRaceChange.bind(this);
//    this.handleEducationChange = this.handleEducationChange.bind(this);
//    this.handleEconomicChange = this.handleEconomicChange.bind(this);
//    this.handleDisclosureChange = this.handleDisclosureChange.bind(this);
//  }
//  handleNameChange(e) {
//    this.setState({ name: e.target.value })
//  }
//  handleAgeChange(e) {
//    this.setState({ age:  e.target.value })
//  }
//  handleFrequencyChange(e, i, val) {
//    this.setState({ frequency: val });
//  }
//  handleGenderChange(e) {
//    this.setState({ gender: e.target.value })
//  }

//  handleRaceChange(e) {
//    this.setState({ race: e.target.value })
//  }
//  handleEducationChange(e) {
//    this.setState({ education: e.target.value })
//  }
//  handleEconomicChange(e) {
//    this.setState({ economic: e.target.value })
//  }
//  handleDisclosureChange(e) {
//    this.setState({ disclosure: e.target.value })
//  }
//  render() {
//    return (
//      <div>
//          <h3>Assessment Instructions</h3>
//         <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>
//       <h3>Close Friends</h3>
//
//
//        <div>
//    <TextField
//      onChange={this.handleNameChange}
//      value={this.state.name}
//      hintText="Name"
//    />
//    <br />
//    <TextField
//      onChange={this.handleAgeChange}
//      value={this.state.age}
//      hintText="Age"
//    />
//    </div>
//
//    <DropDownMenu
//      onChange={this.handleRelationshipChange}
//      value={this.state.value}
//    >
//      <MenuItem relationship={1} primaryText="Relationship" />
//    <MenuItem value={2} primaryText="Parent" />
//  <MenuItem value={3} primaryText="Sibling" />
// <MenuItem value={4} primaryText="Extended" />
// <MenuItem value={5} primaryText="Other" />
//
//    </DropDownMenu>
//
//
//    <DropDownMenu
//      onChange={this.handleFrequencyChange}
//      value={this.state.value}
//    >
//      <MenuItem frequency={1} primaryText="Frequency of Contact" />
//      <MenuItem value={2} primaryText="Daily" />
//      <MenuItem value={3} primaryText="Weekly" />
//      <MenuItem value={4} primaryText="Monthly" />
//
//    </DropDownMenu>
//
//
//    <DropDownMenu
//          onChange={this.handleGenderChange}
//          value={this.state.value}
//        >
//          <MenuItem gender={1} primaryText="Gender" />
//        <MenuItem value={2} primaryText="Female" />
//      <MenuItem value={3} primaryText="Male" />
//    <MenuItem value={4} primaryText="Transgender" />
//    <MenuItem value={5} primaryText="Other" />
//
//
//
//        </DropDownMenu>
//
//        <DropDownMenu
//          onChange={this.handleRaceChange}
//          value={this.state.value}
//        >
//          <MenuItem race={1} primaryText="Race/Ethnicity" />
//        <MenuItem value={2} primaryText="White" />
//      <MenuItem value={3} primaryText="Black/African American" />
//    <MenuItem value={4} primaryText="Asian" />
//      <MenuItem value={5} primaryText="Pacific Islander" />
//    <MenuItem value={6} primaryText="Hispanic/Latino" />
//    <MenuItem value={7} primaryText="Native American" />
//
//
//
//
//        </DropDownMenu>
//        <br />
//        <DropDownMenu
//          onChange={this.handleEducationChange}
//          value={this.state.value}
//        >
//          <MenuItem education={1} primaryText="Level of Education" />
//        <MenuItem value={2} primaryText="Less Than High School" />
//      <MenuItem value={3} primaryText="High School/GED" />
//    <MenuItem value={4} primaryText="Associates Degree" />
//      <MenuItem value={5} primaryText="Bachelors Degree" />
//    <MenuItem value={6} primaryText="Masters Degree" />
//    <MenuItem value={7} primaryText="Doctorate" />
//
//
//
//
//        </DropDownMenu>
//        <DropDownMenu
//          onChange={this.handleEconomicChange}
//          value={this.state.value}
//        >
//          <MenuItem economic={1} primaryText="Economic Position" />
//        <MenuItem value={2} primaryText="Lower" />
//      <MenuItem value={3} primaryText="Lower-Middle" />
//    <MenuItem value={4} primaryText="Middle" />
//      <MenuItem value={5} primaryText="Upper-Middle" />
//    <MenuItem value={6} primaryText="Upper" />
//
//
//        </DropDownMenu>
//
//        <br />
//        <DropDownMenu
//          onChange={this.handleDisclosureChange}
//          value={this.state.value}
//        >
//          <MenuItem disclosure={1} primaryText="  What level of self disclosure is currently possible in this relationship?" />
//        <MenuItem value={2} primaryText="(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person." />
//      <MenuItem value={3} primaryText="(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much." />
//    <MenuItem value={4} primaryText="(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy." />
//      <MenuItem value={5} primaryText="(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me." />
//    <MenuItem value={6} primaryText="(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me." />
//
//
//        </DropDownMenu>
//
//      </div>
//         );
//       }
//     }
//
//
//
//        export class CloseFriendsDrop extends React.Component {
//          constructor() {
//            super();
//            this.state = {
//              value: 1,
//              members: [],
//            };
//            this.checkState = this.checkState.bind(this);
//            this.addCloseFriends = this.addCloseFriends.bind(this);
//          }
//
//          handleChange = (event, index, value) => this.setState({value});
//
//          checkState(e) {
//            console.log(this.state);
//          }
//
//          addCloseFriend() {
//            this.setState({ members: this.state.members.concat([{}]) });
//          }
//
//          render() {
//            return (
//              <div style={style.container}>
//                <section style={style.buttonContainer}>
//                  <button onClick={this.addCloseFriends}>Add Close Friend</button>
//                </section>
//
//                <section style={style.closeFriendsContainer}>
//                  {this.state.members.map((member, i) => {
//                    return <CloseFriendsForm key={i} member={member} />
//                  })}
//                </section>
//
//
//      </div>
//    );
//  }
// }
// export default class FriendsForm extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      name: '',
//      age: '',
//      frequency: 'Frequency of Contact',
//      gender: 'Gender',
//      race: 'Race/Ethnicity',
//      education: 'Level of Education',
//      economic: 'Economic Position',
//      disclosure: '  What level of self disclosure is currently possible in this relationship?'
//    };
//
//    this.handleNameChange = this.handleNameChange.bind(this);
//    this.handleAgeChange = this.handleAgeChange.bind(this);
//    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
//    this.handleGenderChange = this.handleGenderChange.bind(this);
//    this.handleRaceChange = this.handleRaceChange.bind(this);
//    this.handleEducationChange = this.handleEducationChange.bind(this);
//    this.handleEconomicChange = this.handleEconomicChange.bind(this);
//    this.handleDisclosureChange = this.handleDisclosureChange.bind(this);
//  }
//  handleNameChange(e) {
//    this.setState({ name: e.target.value })
//  }
//  handleAgeChange(e) {
//    this.setState({ age:  e.target.value })
//  }
//  handleFrequencyChange(e, i, val) {
//    this.setState({ frequency: val });
//  }
//  handleGenderChange(e) {
//    this.setState({ gender: e.target.value })
//  }
//
//  handleRaceChange(e) {
//    this.setState({ race: e.target.value })
//  }
//  handleEducationChange(e) {
//    this.setState({ education: e.target.value })
//  }
//  handleEconomicChange(e) {
//    this.setState({ economic: e.target.value })
//  }
//  handleDisclosureChange(e) {
//    this.setState({ disclosure: e.target.value })
//  }
//  render() {
//    return (
//      <div>
//          <h3>Assessment Instructions</h3>
//         <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>
//       <h3>Friends/Aquaintances</h3>
//
//
//        <div>
//    <TextField
//      onChange={this.handleNameChange}
//      value={this.state.name}
//      hintText="Name"
//    />
//    <br />
//    <TextField
//      onChange={this.handleAgeChange}
//      value={this.state.age}
//      hintText="Age"
//    />
//    </div>
//
//
//    <DropDownMenu
//      onChange={this.handleFrequencyChange}
//      value={this.state.value}
//    >
//      <MenuItem frequency={1} primaryText="Frequency of Contact" />
//      <MenuItem value={2} primaryText="Daily" />
//      <MenuItem value={3} primaryText="Weekly" />
//      <MenuItem value={4} primaryText="Monthly" />
//
//    </DropDownMenu>
//
//
//    <DropDownMenu
//          onChange={this.handleGenderChange}
//          value={this.state.value}
//        >
//          <MenuItem gender={1} primaryText="Gender" />
//        <MenuItem value={2} primaryText="Female" />
//      <MenuItem value={3} primaryText="Male" />
//    <MenuItem value={4} primaryText="Transgender" />
//    <MenuItem value={5} primaryText="Other" />
//
//
//
//        </DropDownMenu>
//
//        <DropDownMenu
//          onChange={this.handleRaceChange}
//          value={this.state.value}
//        >
//          <MenuItem race={1} primaryText="Race/Ethnicity" />
//        <MenuItem value={2} primaryText="White" />
//      <MenuItem value={3} primaryText="Black/African American" />
//    <MenuItem value={4} primaryText="Asian" />
//      <MenuItem value={5} primaryText="Pacific Islander" />
//    <MenuItem value={6} primaryText="Hispanic/Latino" />
//    <MenuItem value={7} primaryText="Native American" />
//
//
//
//
//        </DropDownMenu>
//        <br />
//        <DropDownMenu
//          onChange={this.handleEducationChange}
//          value={this.state.value}
//        >
//          <MenuItem education={1} primaryText="Level of Education" />
//        <MenuItem value={2} primaryText="Less Than High School" />
//      <MenuItem value={3} primaryText="High School/GED" />
//    <MenuItem value={4} primaryText="Associates Degree" />
//      <MenuItem value={5} primaryText="Bachelors Degree" />
//    <MenuItem value={6} primaryText="Masters Degree" />
//    <MenuItem value={7} primaryText="Doctorate" />
//
//
//
//
//        </DropDownMenu>
//        <DropDownMenu
//          onChange={this.handleEconomicChange}
//          value={this.state.value}
//        >
//          <MenuItem economic={1} primaryText="Economic Position" />
//        <MenuItem value={2} primaryText="Lower" />
//      <MenuItem value={3} primaryText="Lower-Middle" />
//    <MenuItem value={4} primaryText="Middle" />
//      <MenuItem value={5} primaryText="Upper-Middle" />
//    <MenuItem value={6} primaryText="Upper" />
//
//
//        </DropDownMenu>
//
//        <br />
//        <DropDownMenu
//          onChange={this.handleDisclosureChange}
//          value={this.state.value}
//        >
//          <MenuItem disclosure={1} primaryText="  What level of self disclosure is currently possible in this relationship?" />
//        <MenuItem value={2} primaryText="(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person." />
//      <MenuItem value={3} primaryText="(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much." />
//    <MenuItem value={4} primaryText="(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy." />
//      <MenuItem value={5} primaryText="(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me." />
//    <MenuItem value={6} primaryText="(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me." />
//
//
//        </DropDownMenu>
//
//      </div>
//         );
//       }
//     }
//
//
//
//        export class FriendsDrop extends React.Component {
//          constructor() {
//            super();
//            this.state = {
//              value: 1,
//              members: [],
//            };
//            this.checkState = this.checkState.bind(this);
//            this.addFriends = this.addFriends.bind(this);
//          }
//
//          handleChange = (event, index, value) => this.setState({value});
//
//          checkState(e) {
//            console.log(this.state);
//          }
//
//          addFriends() {
//            this.setState({ members: this.state.members.concat([{}]) });
//          }
//
//          render() {
//            return (
//              <div style={style.container}>
//                <section style={style.buttonContainer}>
//                  <button onClick={this.addCloseFriend}>Add Close Friend</button>
//                </section>
//
//                <section style={style.closeFriendsContainer}>
//                  {this.state.members.map((member, i) => {
//                    return <CloseFriendsForm key={i} member={member} />
//                  })}
//                </section>
//
//
//      </div>
//    );
//  }
// }

// export default class FriendsForm extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      name: '',
//      age: '',
//      frequency: 'Frequency of Contact',
//      gender: 'Gender',
//      race: 'Race/Ethnicity',
//      education: 'Level of Education',
//      economic: 'Economic Position',
//      disclosure: '  What level of self disclosure is currently possible in this relationship?'
//    };
//
//    this.handleNameChange = this.handleNameChange.bind(this);
//    this.handleAgeChange = this.handleAgeChange.bind(this);
//    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
//    this.handleGenderChange = this.handleGenderChange.bind(this);
//    this.handleRaceChange = this.handleRaceChange.bind(this);
//    this.handleEducationChange = this.handleEducationChange.bind(this);
//    this.handleEconomicChange = this.handleEconomicChange.bind(this);
//    this.handleDisclosureChange = this.handleDisclosureChange.bind(this);
//  }
//  handleNameChange(e) {
//    this.setState({ name: e.target.value })
//  }
//  handleAgeChange(e) {
//    this.setState({ age:  e.target.value })
//  }
//  handleFrequencyChange(e, i, val) {
//    this.setState({ frequency: val });
//  }
//  handleGenderChange(e) {
//    this.setState({ gender: e.target.value })
//  }
//
//  handleRaceChange(e) {
//    this.setState({ race: e.target.value })
//  }
//  handleEducationChange(e) {
//    this.setState({ education: e.target.value })
//  }
//  handleEconomicChange(e) {
//    this.setState({ economic: e.target.value })
//  }
//  handleDisclosureChange(e) {
//    this.setState({ disclosure: e.target.value })
//  }
//  render() {
//    return (
//      <div>
//          <h3>Assessment Instructions</h3>
//         <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>
//       <h3>Friends</h3>
//
//
//        <div>
//    <TextField
//      onChange={this.handleNameChange}
//      value={this.state.name}
//      hintText="Name"
//    />
//    <br />
//    <TextField
//      onChange={this.handleAgeChange}
//      value={this.state.age}
//      hintText="Age"
//    />
//    </div>
//
//
//    <DropDownMenu
//      onChange={this.handleFrequencyChange}
//      value={this.state.value}
//    >
//      <MenuItem frequency={1} primaryText="Frequency of Contact" />
//      <MenuItem value={2} primaryText="Daily" />
//      <MenuItem value={3} primaryText="Weekly" />
//      <MenuItem value={4} primaryText="Monthly" />
//
//    </DropDownMenu>
//
//
//    <DropDownMenu
//          onChange={this.handleGenderChange}
//          value={this.state.value}
//        >
//          <MenuItem gender={1} primaryText="Gender" />
//        <MenuItem value={2} primaryText="Female" />
//      <MenuItem value={3} primaryText="Male" />
//    <MenuItem value={4} primaryText="Transgender" />
//    <MenuItem value={5} primaryText="Other" />
//
//
//
//        </DropDownMenu>
//
//        <DropDownMenu
//          onChange={this.handleRaceChange}
//          value={this.state.value}
//        >
//          <MenuItem race={1} primaryText="Race/Ethnicity" />
//        <MenuItem value={2} primaryText="White" />
//      <MenuItem value={3} primaryText="Black/African American" />
//    <MenuItem value={4} primaryText="Asian" />
//      <MenuItem value={5} primaryText="Pacific Islander" />
//    <MenuItem value={6} primaryText="Hispanic/Latino" />
//    <MenuItem value={7} primaryText="Native American" />
//
//
//
//
//        </DropDownMenu>
//        <br />
//        <DropDownMenu
//          onChange={this.handleEducationChange}
//          value={this.state.value}
//        >
//          <MenuItem education={1} primaryText="Level of Education" />
//        <MenuItem value={2} primaryText="Less Than High School" />
//      <MenuItem value={3} primaryText="High School/GED" />
//    <MenuItem value={4} primaryText="Associates Degree" />
//      <MenuItem value={5} primaryText="Bachelors Degree" />
//    <MenuItem value={6} primaryText="Masters Degree" />
//    <MenuItem value={7} primaryText="Doctorate" />
//
//
//
//
//        </DropDownMenu>
//        <DropDownMenu
//          onChange={this.handleEconomicChange}
//          value={this.state.value}
//        >
//          <MenuItem economic={1} primaryText="Economic Position" />
//        <MenuItem value={2} primaryText="Lower" />
//      <MenuItem value={3} primaryText="Lower-Middle" />
//    <MenuItem value={4} primaryText="Middle" />
//      <MenuItem value={5} primaryText="Upper-Middle" />
//    <MenuItem value={6} primaryText="Upper" />
//
//
//        </DropDownMenu>
//
//        <br />
//        <DropDownMenu
//          onChange={this.handleDisclosureChange}
//          value={this.state.value}
//        >
//          <MenuItem disclosure={1} primaryText="  What level of self disclosure is currently possible in this relationship?" />
//        <MenuItem value={2} primaryText="(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person." />
//      <MenuItem value={3} primaryText="(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much." />
//    <MenuItem value={4} primaryText="(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy." />
//      <MenuItem value={5} primaryText="(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me." />
//    <MenuItem value={6} primaryText="(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me." />
//
//
//        </DropDownMenu>
//
//      </div>
//         );
//       }
//     }
//
//
//
//        export class FriendsDrop extends React.Component {
//          constructor() {
//            super();
//            this.state = {
//              value: 1,
//              members: [],
//            };
//            this.checkState = this.checkState.bind(this);
//            this.addFriends = this.addFriends.bind(this);
//          }
//
//          handleChange = (event, index, value) => this.setState({value});
//
//          checkState(e) {
//            console.log(this.state);
//          }
//
//          addFriends() {
//            this.setState({ members: this.state.members.concat([{}]) });
//          }
//
//          render() {
//            return (
//              <div style={style.container}>
//                <section style={style.buttonContainer}>
//                  <button onClick={this.addCloseFriend}>Add Close Friend</button>
//                </section>
//
//                <section style={style.closeFriendsContainer}>
//                  {this.state.members.map((member, i) => {
//                    return <CloseFriendsForm key={i} member={member} />
//                  })}
//                </section>
//
//
//      </div>
//    );
//  }
// }

//  export default class WorkForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       age: '',
//       relationship: 'Relationship',
//       frequency: 'Frequency of Contact',
//       gender: 'Gender',
//       race: 'Race/Ethnicity',
//       education: 'Level of Education',
//       economic: 'Economic Position',
//       disclosure: '  What level of self disclosure is currently possible in this relationship?'
//     };
//
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleAgeChange = this.handleAgeChange.bind(this);
//     this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
//     this.handleGenderChange = this.handleGenderChange.bind(this);
//     this.handleRelationshipChange = this.handleRelationshipChange.bind(this);
//     this.handleRaceChange = this.handleRaceChange.bind(this);
//     this.handleEducationChange = this.handleEducationChange.bind(this);
//     this.handleEconomicChange = this.handleEconomicChange.bind(this);
//     this.handleDisclosureChange = this.handleDisclosureChange.bind(this);
//   }
//   handleNameChange(e) {
//     this.setState({ name: e.target.value })
//   }
//   handleAgeChange(e) {
//     this.setState({ age:  e.target.value })
//   }
//   handleFrequencyChange(e, i, val) {
//     this.setState({ frequency: val });
//   }
//   handleGenderChange(e) {
//     this.setState({ gender: e.target.value })
//   }
//   handleRelationshipChange(e) {
//     this.setState({ relationship: e.target.value })
//   }
//   handleRaceChange(e) {
//     this.setState({ race: e.target.value })
//   }
//   handleEducationChange(e) {
//     this.setState({ education: e.target.value })
//   }
//   handleEconomicChange(e) {
//     this.setState({ economic: e.target.value })
//   }
//   handleDisclosureChange(e) {
//     this.setState({ disclosure: e.target.value })
//   }
//   render() {
//     return (
//       <div>
//           <h3>Assessment Instructions</h3>
//          <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>
//        <h3>Work/Colleagues</h3>
//
//
//         <div>
//     <TextField
//       onChange={this.handleNameChange}
//       value={this.state.name}
//       hintText="Name"
//     />
//     <br />
//     <TextField
//       onChange={this.handleAgeChange}
//       value={this.state.age}
//       hintText="Age"
//     />
//     </div>
//
//     <DropDownMenu
//       onChange={this.handleRelationshipChange}
//       value={this.state.value}
//     >
//       <MenuItem relationship={1} primaryText="Relationship" />
//     <MenuItem value={2} primaryText="Co-Worker" />
//   <MenuItem value={3} primaryText="Employee" />
// <MenuItem value={4} primaryText="Boss" />
//
//
//     </DropDownMenu>
//
//
//     <DropDownMenu
//       onChange={this.handleFrequencyChange}
//       value={this.state.value}
//     >
//       <MenuItem frequency={1} primaryText="Frequency of Contact" />
//       <MenuItem value={2} primaryText="Daily" />
//       <MenuItem value={3} primaryText="Weekly" />
//       <MenuItem value={4} primaryText="Monthly" />
//
//     </DropDownMenu>
//
//
//     <DropDownMenu
//           onChange={this.handleGenderChange}
//           value={this.state.value}
//         >
//           <MenuItem gender={1} primaryText="Gender" />
//         <MenuItem value={2} primaryText="Female" />
//       <MenuItem value={3} primaryText="Male" />
//     <MenuItem value={4} primaryText="Transgender" />
//     <MenuItem value={5} primaryText="Other" />
//
//
//
//         </DropDownMenu>
//
//         <DropDownMenu
//           onChange={this.handleRaceChange}
//           value={this.state.value}
//         >
//           <MenuItem race={1} primaryText="Race/Ethnicity" />
//         <MenuItem value={2} primaryText="White" />
//       <MenuItem value={3} primaryText="Black/African American" />
//     <MenuItem value={4} primaryText="Asian" />
//       <MenuItem value={5} primaryText="Pacific Islander" />
//     <MenuItem value={6} primaryText="Hispanic/Latino" />
//     <MenuItem value={7} primaryText="Native American" />
//
//
//
//
//         </DropDownMenu>
//         <br />
//         <DropDownMenu
//           onChange={this.handleEducationChange}
//           value={this.state.value}
//         >
//           <MenuItem education={1} primaryText="Level of Education" />
//         <MenuItem value={2} primaryText="Less Than High School" />
//       <MenuItem value={3} primaryText="High School/GED" />
//     <MenuItem value={4} primaryText="Associates Degree" />
//       <MenuItem value={5} primaryText="Bachelors Degree" />
//     <MenuItem value={6} primaryText="Masters Degree" />
//     <MenuItem value={7} primaryText="Doctorate" />
//
//
//
//
//         </DropDownMenu>
//         <DropDownMenu
//           onChange={this.handleEconomicChange}
//           value={this.state.value}
//         >
//           <MenuItem economic={1} primaryText="Economic Position" />
//         <MenuItem value={2} primaryText="Lower" />
//       <MenuItem value={3} primaryText="Lower-Middle" />
//     <MenuItem value={4} primaryText="Middle" />
//       <MenuItem value={5} primaryText="Upper-Middle" />
//     <MenuItem value={6} primaryText="Upper" />
//
//
//         </DropDownMenu>
//
//         <br />
//         <DropDownMenu
//           onChange={this.handleDisclosureChange}
//           value={this.state.value}
//         >
//           <MenuItem disclosure={1} primaryText="  What level of self disclosure is currently possible in this relationship?" />
//         <MenuItem value={2} primaryText="(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person." />
//       <MenuItem value={3} primaryText="(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much." />
//     <MenuItem value={4} primaryText="(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy." />
//       <MenuItem value={5} primaryText="(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me." />
//     <MenuItem value={6} primaryText="(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me." />
//
//
//         </DropDownMenu>
//
//
//
//
//       </div>
//     );
//   }
// }
//
//
// export class DropDownWork extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       value: 1,
//       members: [],
//     };
//     this.checkState = this.checkState.bind(this);
//     this.addColleague = this.addColleague.bind(this);
//   }
//
//   handleChange = (event, index, value) => this.setState({value});
//
//   checkState(e) {
//     console.log(this.state);
//   }
//
//   addColleague() {
//     this.setState({ members: this.state.members.concat([{}]) });
//   }
//
//   render() {
//     return (
//       <div style={style.container}>
//         <section style={style.buttonContainer}>
//           <button onClick={this.addColleague}>Add Colleague</button>
//         </section>
//
//         <section style={style.membersContainer}>
//           {this.state.members.map((member, i) => {
//             return <WorkForm key={i} member={member} />
//           })}
//         </section>
//       </div>
//     );
//   }
// }

// export default class ProfessionalForm extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      name: '',
//      age: '',
//      relationship: 'Relationship',
//      frequency: 'Frequency of Contact',
//      gender: 'Gender',
//      race: 'Race/Ethnicity',
//      education: 'Level of Education',
//      economic: 'Economic Position',
//      disclosure: '  What level of self disclosure is currently possible in this relationship?'
//    };
//
//    this.handleNameChange = this.handleNameChange.bind(this);
//    this.handleAgeChange = this.handleAgeChange.bind(this);
//    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
//    this.handleGenderChange = this.handleGenderChange.bind(this);
//    this.handleRelationshipChange = this.handleRelationshipChange.bind(this);
//    this.handleRaceChange = this.handleRaceChange.bind(this);
//    this.handleEducationChange = this.handleEducationChange.bind(this);
//    this.handleEconomicChange = this.handleEconomicChange.bind(this);
//    this.handleDisclosureChange = this.handleDisclosureChange.bind(this);
//  }
//  handleNameChange(e) {
//    this.setState({ name: e.target.value })
//  }
//  handleAgeChange(e) {
//    this.setState({ age:  e.target.value })
//  }
//  handleFrequencyChange(e, i, val) {
//    this.setState({ frequency: val });
//  }
//  handleGenderChange(e) {
//    this.setState({ gender: e.target.value })
//  }
//  handleRelationshipChange(e) {
//    this.setState({ relationship: e.target.value })
//  }
//  handleRaceChange(e) {
//    this.setState({ race: e.target.value })
//  }
//  handleEducationChange(e) {
//    this.setState({ education: e.target.value })
//  }
//  handleEconomicChange(e) {
//    this.setState({ economic: e.target.value })
//  }
//  handleDisclosureChange(e) {
//    this.setState({ disclosure: e.target.value })
//  }
//  render() {
//    return (
//      <div>
//          <h3>Assessment Instructions</h3>
//         <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>
//       <h3>Professional</h3>
//
//
//        <div>
//    <TextField
//      onChange={this.handleNameChange}
//      value={this.state.name}
//      hintText="Name"
//    />
//    <br />
//    <TextField
//      onChange={this.handleAgeChange}
//      value={this.state.age}
//      hintText="Age"
//    />
//    </div>
//
//    <DropDownMenu
//      onChange={this.handleRelationshipChange}
//      value={this.state.value}
//    >
//      <MenuItem relationship={1} primaryText="Relationship" />
//    <MenuItem value={2} primaryText="Therapist/Coach" />
//  <MenuItem value={3} primaryText="Mentor" />
// <MenuItem value={4} primaryText="Clergy" />
// <MenuItem value={4} primaryText="Physician" />
//
//
//
//    </DropDownMenu>
//
//
//    <DropDownMenu
//      onChange={this.handleFrequencyChange}
//      value={this.state.value}
//    >
//      <MenuItem frequency={1} primaryText="Frequency of Contact" />
//      <MenuItem value={2} primaryText="Daily" />
//      <MenuItem value={3} primaryText="Weekly" />
//      <MenuItem value={4} primaryText="Monthly" />
//
//    </DropDownMenu>
//
//
//    <DropDownMenu
//          onChange={this.handleGenderChange}
//          value={this.state.value}
//        >
//          <MenuItem gender={1} primaryText="Gender" />
//        <MenuItem value={2} primaryText="Female" />
//      <MenuItem value={3} primaryText="Male" />
//    <MenuItem value={4} primaryText="Transgender" />
//    <MenuItem value={5} primaryText="Other" />
//
//
//
//        </DropDownMenu>
//
//        <DropDownMenu
//          onChange={this.handleRaceChange}
//          value={this.state.value}
//        >
//          <MenuItem race={1} primaryText="Race/Ethnicity" />
//        <MenuItem value={2} primaryText="White" />
//      <MenuItem value={3} primaryText="Black/African American" />
//    <MenuItem value={4} primaryText="Asian" />
//      <MenuItem value={5} primaryText="Pacific Islander" />
//    <MenuItem value={6} primaryText="Hispanic/Latino" />
//    <MenuItem value={7} primaryText="Native American" />
//
//
//
//
//        </DropDownMenu>
//        <br />
//        <DropDownMenu
//          onChange={this.handleEducationChange}
//          value={this.state.value}
//        >
//          <MenuItem education={1} primaryText="Level of Education" />
//        <MenuItem value={2} primaryText="Less Than High School" />
//      <MenuItem value={3} primaryText="High School/GED" />
//    <MenuItem value={4} primaryText="Associates Degree" />
//      <MenuItem value={5} primaryText="Bachelors Degree" />
//    <MenuItem value={6} primaryText="Masters Degree" />
//    <MenuItem value={7} primaryText="Doctorate" />
//
//
//
//
//        </DropDownMenu>
//        <DropDownMenu
//          onChange={this.handleEconomicChange}
//          value={this.state.value}
//        >
//          <MenuItem economic={1} primaryText="Economic Position" />
//        <MenuItem value={2} primaryText="Lower" />
//      <MenuItem value={3} primaryText="Lower-Middle" />
//    <MenuItem value={4} primaryText="Middle" />
//      <MenuItem value={5} primaryText="Upper-Middle" />
//    <MenuItem value={6} primaryText="Upper" />
//
//
//        </DropDownMenu>
//
//        <br />
//        <DropDownMenu
//          onChange={this.handleDisclosureChange}
//          value={this.state.value}
//        >
//          <MenuItem disclosure={1} primaryText="  What level of self disclosure is currently possible in this relationship?" />
//        <MenuItem value={2} primaryText="(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person." />
//      <MenuItem value={3} primaryText="(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much." />
//    <MenuItem value={4} primaryText="(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy." />
//      <MenuItem value={5} primaryText="(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me." />
//    <MenuItem value={6} primaryText="(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me." />
//
//
//        </DropDownMenu>
//
//
//
//
//      </div>
//    );
//  }
// }
//
//
// export class DropDownProfessional extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      value: 1,
//      members: [],
//    };
//    this.checkState = this.checkState.bind(this);
//    this.addProfessional = this.addProfessional.bind(this);
//  }
//
//  handleChange = (event, index, value) => this.setState({value});
//
//  checkState(e) {
//    console.log(this.state);
//  }
//
//  addProfessional() {
//    this.setState({ members: this.state.members.concat([{}]) });
//  }
//
//  render() {
//    return (
//      <div style={style.container}>
//        <section style={style.buttonContainer}>
//          <button onClick={this.addProfessional}>Add Professional</button>
//        </section>
//
//        <section style={style.membersContainer}>
//          {this.state.members.map((member, i) => {
//            return <ProfessionalForm key={i} member={member} />
//          })}
//        </section>
//      </div>
//    );
//  }
// }
// export default class OtherForm extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      name: '',
//      age: '',
//      relationship: '',
//      frequency: 'Frequency of Contact',
//      gender: 'Gender',
//      race: 'Race/Ethnicity',
//      education: 'Level of Education',
//      economic: 'Economic Position',
//      disclosure: '  What level of self disclosure is currently possible in this relationship?'
//    };
//
//    this.handleNameChange = this.handleNameChange.bind(this);
//    this.handleAgeChange = this.handleAgeChange.bind(this);
//    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
//    this.handleGenderChange = this.handleGenderChange.bind(this);
//    this.handleRelationshipChange = this.handleRelationshipChange.bind(this);
//    this.handleRaceChange = this.handleRaceChange.bind(this);
//    this.handleEducationChange = this.handleEducationChange.bind(this);
//    this.handleEconomicChange = this.handleEconomicChange.bind(this);
//    this.handleDisclosureChange = this.handleDisclosureChange.bind(this);
//  }
//  handleNameChange(e) {
//    this.setState({ name: e.target.value })
//  }
//  handleAgeChange(e) {
//    this.setState({ age:  e.target.value })
//  }
//  handleFrequencyChange(e, i, val) {
//    this.setState({ frequency: val });
//  }
//  handleGenderChange(e) {
//    this.setState({ gender: e.target.value })
//  }
//  handleRelationshipChange(e) {
//    this.setState({ relationship: e.target.value })
//  }
//  handleRaceChange(e) {
//    this.setState({ race: e.target.value })
//  }
//  handleEducationChange(e) {
//    this.setState({ education: e.target.value })
//  }
//  handleEconomicChange(e) {
//    this.setState({ economic: e.target.value })
//  }
//  handleDisclosureChange(e) {
//    this.setState({ disclosure: e.target.value })
//  }
//  render() {
//    return (
//      <div>
//          <h3>Assessment Instructions</h3>
//         <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>
//       <h3>Other</h3>
//
//
//        <div>
//    <TextField
//      onChange={this.handleNameChange}
//      value={this.state.name}
//      hintText="Name"
//    />
//    <br />
//    <TextField
//      onChange={this.handleAgeChange}
//      value={this.state.age}
//      hintText="Age"
//    />
//    <br />
//    <TextField
//      onChange={this.handleRelationshipChange}
//      value={this.state.relationship}
//      hintText="Relationship"
//    />
//    </div>
//
//
//    <DropDownMenu
//      onChange={this.handleFrequencyChange}
//      value={this.state.value}
//    >
//      <MenuItem frequency={1} primaryText="Frequency of Contact" />
//      <MenuItem value={2} primaryText="Daily" />
//      <MenuItem value={3} primaryText="Weekly" />
//      <MenuItem value={4} primaryText="Monthly" />
//
//    </DropDownMenu>
//
//
//    <DropDownMenu
//          onChange={this.handleGenderChange}
//          value={this.state.value}
//        >
//          <MenuItem gender={1} primaryText="Gender" />
//        <MenuItem value={2} primaryText="Female" />
//      <MenuItem value={3} primaryText="Male" />
//    <MenuItem value={4} primaryText="Transgender" />
//    <MenuItem value={5} primaryText="Other" />
//
//
//
//        </DropDownMenu>
//
//        <DropDownMenu
//          onChange={this.handleRaceChange}
//          value={this.state.value}
//        >
//          <MenuItem race={1} primaryText="Race/Ethnicity" />
//        <MenuItem value={2} primaryText="White" />
//      <MenuItem value={3} primaryText="Black/African American" />
//    <MenuItem value={4} primaryText="Asian" />
//      <MenuItem value={5} primaryText="Pacific Islander" />
//    <MenuItem value={6} primaryText="Hispanic/Latino" />
//    <MenuItem value={7} primaryText="Native American" />
//
//
//
//
//        </DropDownMenu>
//        <br />
//        <DropDownMenu
//          onChange={this.handleEducationChange}
//          value={this.state.value}
//        >
//          <MenuItem education={1} primaryText="Level of Education" />
//        <MenuItem value={2} primaryText="Less Than High School" />
//      <MenuItem value={3} primaryText="High School/GED" />
//    <MenuItem value={4} primaryText="Associates Degree" />
//      <MenuItem value={5} primaryText="Bachelors Degree" />
//    <MenuItem value={6} primaryText="Masters Degree" />
//    <MenuItem value={7} primaryText="Doctorate" />
//
//
//
//
//        </DropDownMenu>
//        <DropDownMenu
//          onChange={this.handleEconomicChange}
//          value={this.state.value}
//        >
//          <MenuItem economic={1} primaryText="Economic Position" />
//        <MenuItem value={2} primaryText="Lower" />
//      <MenuItem value={3} primaryText="Lower-Middle" />
//    <MenuItem value={4} primaryText="Middle" />
//      <MenuItem value={5} primaryText="Upper-Middle" />
//    <MenuItem value={6} primaryText="Upper" />
//
//
//        </DropDownMenu>
//
//        <br />
//        <DropDownMenu
//          onChange={this.handleDisclosureChange}
//          value={this.state.value}
//        >
//          <MenuItem disclosure={1} primaryText="  What level of self disclosure is currently possible in this relationship?" />
//        <MenuItem value={2} primaryText="(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person." />
//      <MenuItem value={3} primaryText="(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much." />
//    <MenuItem value={4} primaryText="(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy." />
//      <MenuItem value={5} primaryText="(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me." />
//    <MenuItem value={6} primaryText="(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me." />
//
//
//        </DropDownMenu>
//
//
//
//
//      </div>
//    );
//  }
// }
//
//
// export class DropDownOther extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      value: 1,
//      members: [],
//    };
//    this.checkState = this.checkState.bind(this);
//    this.addOther = this.addOther.bind(this);
//  }
//
//  handleChange = (event, index, value) => this.setState({value});
//
//  checkState(e) {
//    console.log(this.state);
//  }
//
//  addOther() {
//    this.setState({ members: this.state.members.concat([{}]) });
//  }
//
//  render() {
//    return (
//      <div style={style.container}>
//        <section style={style.buttonContainer}>
//          <button onClick={this.addOther}>Add Other</button>
//        </section>
//
//        <section style={style.membersContainer}>
//          {this.state.members.map((member, i) => {
//            return <OtherForm key={i} member={member} />
//          })}
//        </section>
//      </div>
//    );
//  }
// }


// export default class ReflectiveForm extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      reflective: 'In your opinion, how satisfied are you with the support and love you feel from your social network?',
//    };
//
//    this.handleReflectiveChange = this.handleReflectiveChange.bind(this);
//
//  }
//  handleReflectiveChange(e) {
//    this.setState({ reflective: e, i, val })
//  }
//
//  render() {
//    return (
//      <div>
//          <h3>Reflective Form</h3>
//
//    <DropDownMenu
//      onChange={this.handleReflectiveChange}
//      value={this.state.value}
//    >
//      <MenuItem reflective={1} primaryText="In your opinion, how satisfied are you with the support and love you feel from your social network?" />
//    <MenuItem value={2} primaryText="(0) - Not satisfied at all." />
//  <MenuItem value={3} primaryText="(1) - Minimally satisfied." />
//      <MenuItem value={4} primaryText="(2) - Moderately satisfied." />
//    <MenuItem value={5} primaryText="(3) - Adequately satisfied." />
//  <MenuItem value={6} primaryText="(4) - Abundantly satisfied." />
//
//    </DropDownMenu>
//
//
//
//      </div>
//    );
//  }
// }
//
//
// export class DropDownReflect extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      value: 1,
//      members: [],
//    };
//    this.checkState = this.checkState.bind(this);
//    this.addOther = this.addOther.bind(this);
//  }
//
//  handleChange = (event, index, value) => this.setState({value});
//
//  checkState(e) {
//    console.log(this.state);
//  }
//
//  addReflect() {
//    this.setState({ members: this.state.members.concat([{}]) });
//  }
//
//  render() {
//    return (
//      <div style={style.container}>
//        <section style={style.buttonContainer}>
//          <button onClick={this.addReflect}>Add Reflective Section</button>
//        </section>
//
//        <section style={style.membersContainer}>
//          {this.state.members.map((member, i) => {
//            return <ReflectiveForm key={i} member={member} />
//          })}
//        </section>
//      </div>
//    );
//  }
// }
const style = {
  container: {
    display: 'flex',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: '0',
  },
  buttonContainer: {
    width: '20%',
    height: '100%',
  },
  membersContainer: {
    display: 'flex',
    flex: '8',
    width: '80%',
    height: '100%',
    overflow: 'scroll',
  },
};
